// Load modules

var Hoek = require('hoek');
var Batch = require('./batch');
var Defaults = require('./defaults');


// Declare internals

var internals = {};


exports.register = function (pack, options, next) {

    var settings = Hoek.applyToDefaults(Defaults, options);

    pack.route({
        method: 'POST',
        path: settings.batchEndpoint,
        config: Batch.config(pack)
    });

    next();
};