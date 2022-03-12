const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

// initialize Object

const myEmitter = new MyEmitter();

//add listener 

myEmitter.on('log', (message) =>logEvents(message));

setTimeout(()=>{
//Emit event 
myEmitter.emit('log','log event emitted');
},1000);
