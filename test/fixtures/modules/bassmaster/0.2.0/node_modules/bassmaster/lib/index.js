// Load modules

var Hoek = require('hoek');
var Batch = require('./batch');
var Defaults = require('./defaults');


// Declare internals

var internals = {};


exports.register = function (plugin, options, next) {

    var settings = Hoek.applyToDefaults(Defaults, options);

    plugin.route({
        method: 'POST',
        path: settings.batchEndpoint,
        config: Batch.config
    });

    next();
};