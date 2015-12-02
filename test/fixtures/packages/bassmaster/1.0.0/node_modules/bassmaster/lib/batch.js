// Load modules

var Async = require('async');


// Declare internals

var internals = {};


module.exports.config = function (pack) {

    return {
        handler: function (request, reply) {

            var resultsData = {
                results: [],
                resultsMap: []
            };

            var requests = [];
            var requestRegex = /(?:\/)(?:\$(\d)+\.)?([^\/\$]*)/g;       // /project/$1.project/tasks, does not allow using array responses

            // Validate requests

            var errorMessage = null;
            var parseRequest = function ($0, $1, $2) {

                if ($1) {
                    if ($1 < i) {
                        parts.push({ type: 'ref', index: $1, value: $2 });
                        return '';
                    }
                    else {
                        errorMessage = 'Request reference is beyond array size: ' + i;
                        return $0;
                    }
                }
                else {
                    parts.push({ type: 'text', value: $2 });
                    return '';
                }
            };

            if (!request.payload.requests) {
                return reply(pack.hapi.error.badRequest('Request missing requests array'));
            }

            for (var i = 0, il = request.payload.requests.length; i < il; ++i) {

                // Break into parts

                var parts = [];
                var result = request.payload.requests[i].path.replace(requestRegex, parseRequest);

                // Make sure entire string was processed (empty)

                if (result === '') {
                    requests.push(parts);
                }
                else {
                    errorMessage = errorMessage || 'Invalid request format in item: ' + i;
                    break;
                }
            }

            if (errorMessage === null) {
                internals.process(request, requests, resultsData, reply);
            }
            else {
                reply(pack.hapi.error.badRequest(errorMessage));
            }
        }
    };
};


internals.process = function (request, requests, resultsData, reply) {

    var fnsParallel = [];
    var fnsSerial = [];
    var callBatch = function (pos, parts) {

        return function (callback) {

            internals.batch(request, resultsData, pos, parts, callback);
        };
    };

    for (var i = 0, il = requests.length; i < il; ++i) {
        var parts = requests[i];

        if (internals.hasRefPart(parts)) {
            fnsSerial.push(callBatch(i, parts));
        }
        else {
            fnsParallel.push(callBatch(i, parts));
        }
    }

    Async.series([
        function (callback) {

            Async.parallel(fnsParallel, callback);
        },
        function (callback) {

            Async.series(fnsSerial, callback);
        }
    ], function (err) {

        if (err) {
            reply(err);
        }
        else {
            reply(resultsData.results);
        }
    });
};


internals.hasRefPart = function (parts) {

    for (var i = 0, il = parts.length; i < il; ++i) {
        if (parts[i].type === 'ref') {
            return true;
        }
    }

    return false;
};


internals.batch = function (batchRequest, resultsData, pos, parts, callback) {

    var path = '';
    var error = null;

    for (var i = 0, il = parts.length; i < il; ++i) {
        path += '/';

        if (parts[i].type === 'ref') {
            var ref = resultsData.resultsMap[parts[i].index];

            if (ref) {
                var value = null;

                try {
                    eval('value = ref.' + parts[i].value + ';');
                }
                catch (e) {
                    error = new Error(e.message);
                }

                if (value) {
                    if (value.match && value.match(/^[\w:]+$/)) {
                        path += value;
                    }
                    else {
                        error = new Error('Reference value includes illegal characters');
                        break;
                    }
                }
                else {
                    error = error || new Error('Reference not found');
                    break;
                }
            }
            else {
                error = new Error('Missing reference response');
                break;
            }
        }
        else {
            path += parts[i].value;
        }
    }

    if (error === null) {

        // Make request
        batchRequest.payload.requests[pos].path = path;
        internals.dispatch(batchRequest, batchRequest.payload.requests[pos], function (data) {

            var result = data.result;
            resultsData.results[pos] = result;
            resultsData.resultsMap[pos] = result;
            callback(null, result);
        });
    }
    else {
        resultsData.results[pos] = error;
        callback(error);
    }
};


internals.dispatch = function (batchRequest, request, callback) {

    var body = (request.payload !== null ? JSON.stringify(request.payload) : null);     // payload can be '' or 0
    var injectOptions = {
        url: request.path,
        method: request.method,
        headers: batchRequest.headers,
        payload: body,
        session: batchRequest.session
    };

    batchRequest.server.inject(injectOptions, callback);
};