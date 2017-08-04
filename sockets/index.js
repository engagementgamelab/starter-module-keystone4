module.exports = function(app, socket) {

  var io = require('socket.io')(app, {path: '/module/'});

  var CommonHandler = require('./handlers/Common');

  io.on('connection', function (socket) {

    // Create event handlers for this socket
    var eventHandlers = {
        common: new CommonHandler(io, socket)
    };

    // Bind events to handlers
    for (var category in eventHandlers) {
        var handler = eventHandlers[category].handler;
        for (var event in handler) {
            socket.on(event, handler[event]);
        }
    }

    socket.send(socket.id);

  });

  console.log('module loaded socket.io')

};