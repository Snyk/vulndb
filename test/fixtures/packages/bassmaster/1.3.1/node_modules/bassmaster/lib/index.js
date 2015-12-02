// Load modules

var Hoek = require('hoek');
var Batch = require('./batch');


// Declare internals

var internals = {
    defaults: {
        batchEndpoint: '/batch',
        description: 'A batch endpoint that makes it easy to combine multiple requests to other endpoints in a single call.',
        tags: ['bassmaster']
    }
};


exports.register = function (pack, options, next) {

    var settings = Hoek.applyToDefaults(internals.defaults, options);

    pack.route({
        method: 'POST',
        path: settings.batchEndpoint,
        config: Batch.config(settings)
    });

    next();
};