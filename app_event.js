

const Logger = require('./logger');
const logger = new Logger;

//Register a listner -- Start Listning event of 'messageLogged'
logger.on('messageLogged',(arg)=>{
  console.log('Event Called',arg);
});

logger.log('message');


 