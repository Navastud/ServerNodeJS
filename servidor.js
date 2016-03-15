//Creamos variable a la cual le asignaremos todos los metodos del modulo http
var servidor = require('http');
var url = require('url');
function iniciar(enrutar, manejador){
  function arrancaServidor(requiere, respuesta){

    var ruta = url.parse(requiere.url).pathname;
    console.log("Alguien se ha conectado");
    var c = enrutar(manejador,ruta);
    respuesta.writeHead(200, {"Content-Type":"text/html"})
    respuesta.write(c);
    respuesta.end();
  }
  servidor.createServer(arrancaServidor).listen(8080);
}
exports.iniciar = iniciar;
