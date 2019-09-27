const http = require("http");
const fs=require("fs");

exports.init=()=>{

    http.createServer((request,response)=>{
      fs.readFile("./index.html",(err,obj)=>{
        if(err){
          response.writeHead(404,{"Content-type":"application/json"});
          response.write(err);

          }
          else{
        response.writeHead(200,{"Content-type":"text/html"});
        response.write(obj);
        response.end();
          }
      });

    }).listen(4000);

console.log('hola mundi escribe CONTROL+C');
};
