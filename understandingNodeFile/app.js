// Module Wrapper Function
// (function (exports, require, modules, __filename, __dirname) {
//     const logger = require('./logger');
//     console.log("file name : ", __filename);
//     console.log("dir name : ", __dirname);
//     console.log("imported module : ", logger);
//     logger.logFunction('Saurabh');
// });

// path module
// const path = require('path');

// var pathObj = path.parse(__filename);
// console.log(pathObj);

// os modules
// const os = require('os');
// console.log(`total memory: ${os.totalmem()}`);
// console.log(`free memory: ${os.freemem()}`);

// file system module
// const fs = require('fs');

// Synchronous
// console.log(`current files : ${fs.readdirSync('./')}`);

// Asynchrous
// fs.readdir('./', function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// Events Module
// Event - A signal that indicate something happended
// CLASS
// const EventEmitter = require('events');
// EventEmitter is class not variable not function but class
// OBJECT
// const emitter = new EventEmitter();

// Register a listener
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// })

// Raised an event
// emitter.emit('messageLogged', {
//     id: 1,
//     url: 'http://google.com'
// });
// NOTE : Register listener before eventEMitter

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });

// logger.log('message');

// HTTP Modules
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Saurabh');
    res.end();
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3, 4, 5]));
    res.end();
  }
});
// server is eventEmitter

//Register
// server.on('connection', (socket) => {
//     console.log('New Connection....');
// });
server.listen(3000);

console.log('Listening on port 3000...');
