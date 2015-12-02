var Hapi = require('hapi');

var server = new Hapi.Server(process.env.PORT || 8080);

var options = {
    cookieOptions: {
        password: 'password',   // Required
        isSecure: false // Required if using http
    }
};

server.pack.allow({ ext: true }).require('../', options, function (err) {

    if (err) {
        console.log(err)
        throw err;
    }
});

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: function (request) {

            request.reply(request.session._store)
        }
    }
});

server.route({
    method: 'GET',
    path: '/set',
    config: {
        handler: function (request) {

            request.session.set('test', 1);
            request.reply.redirect('/');
        }
    }
});

server.route({
    method: 'GET',
    path: '/set/{key}/{value}',
    config: {
        handler: function (request) {

            request.session.set(request.params.key, request.params.value);
            request.reply.redirect('/');
        }
    }
});

server.route({
    method: 'GET',
    path: '/clear',
    config: {
        handler: function (request) {

            request.session.reset();
            request.reply.redirect('/');
        }
    }
});

server.route({
    method: 'GET',
    path: '/control',
    config: {
        handler: function (request) {

            request.reply('ohai');
        }
    }
});

server.start(function () {

    console.log('server started on port: ', server.info.port);
});