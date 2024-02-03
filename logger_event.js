const { EventEmitter } = require("events");
//const emitter = new EventEmitter();

class Logger extends EventEmitter {

    log(message){
        console.log(message);
        
        //Raise Event
        this.emit('messageLogged',{id:1, url:'http://localhost:80'});
    }

}

module.exports = Logger;
