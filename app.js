const http = require("http");
const fs=require("fs");
/*
function init(){
    function onRequest(request, response){
      response.writeHead(200,{"Content-Type":"text/html"});
      response.write("<h1>Hola Mundo</h1>");
      response.end();
    }
    http.createServer(onRequest).listen(1111);

}
*/
exports.init=()=>{
  const html=fs.readFileSync("./index.html");
    http.createServer((request,response)=>{
      response.writeHead(200,{"Content-Type":"text/html"});
      response.write(html);
      response.end();
    })listen(1111);

};
