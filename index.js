//1 requerimos los paquetes necesarios
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//1.1 Configuramos
app.use(bodyParser.urlencoded({extended:true}));

//2 Rutas ---> se crea con metodo y URL app.metodo("URL",funcion(request,response))
app.get('/prueba',function(req,res){
    res.send("Hola Mundo")// send o sendfile envia algo como res 
});
//3 Listen
app.listen(4000,function(){
    console.log("Servidor iniciado")
});
