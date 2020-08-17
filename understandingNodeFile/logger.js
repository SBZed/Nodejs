const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(msg) {
        console.log(msg);

        // Raise event
        this.emit('messageLogged', {
            id: 1,
            url: 'http://google.com'
        });
    }
}

module.exports = Logger;