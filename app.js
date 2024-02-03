const { Console } = require('console');
const { Socket } = require('dgram');
const http = require('http');

const serverobj  = http.createServer((req,res)=>{
  if (req.url === '/'){
    res.write('Hello Worldd');
    res.end();
  }

  if(req.url === '/api/courses'){
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }

});


serverobj.listen(3000);
console.log('Listning to port 3000');



 