const events = require('events');

const emitter = new events.EventEmitter();

// remember we ned a listener first then event emit

emitter.on('myevent',(msg,user)=>{
    console.log(` ${msg}---- ${user}`);
})

emitter.emit('myevent',"helloworld",'computer');
emitter.emit('myevent',"Hi",'tanvir');
