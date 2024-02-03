import { EventEmitter } from 'node:events';
const Emmitter = new EventEmitter;
function logerror(contents){
    const fs = require('node:fs');
     
    fs.writeFile('D:/NodeProjects/first-app/test.txt', contents, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('log file written success');
      }
    });
};


Emmitter.on('MessageLogged',  (arg)=>{
    console.log('Listner Logged', arg);
});

Emmitter.emit('MessageLogged',{id:'1', url:'http://'});

Emmitter.on('messagenamehere',(eArgs)=>{
    logerror(eArgs.id + ' ' + eArgs.urks);
});

Emmitter.emit('messagenamehere', {id:'23432', urks:'adfadf', thissi:'adsfadf'});


function checkerr(){

    const constantvariable = 10;

    if(err){
        console.log('errororor');
    } else{
        console.log('No Error');
    }
}

checkerr();
 
