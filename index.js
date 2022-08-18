//1 requerimos los paquetes necesarios
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//1.1 Configuramos
app.use(bodyParser.urlencoded({extended:true}));

//2 Rutas ---> se crea con metodo y URL app.metodo("URL",funcion(request,response))
app.get('/prueba',function(req,res){
    res.sendFile(__dirname+"/index.html")// send o sendfile envia algo como res 
});
app.post('/formulario',function(req,res){
    var n1=req.body.n1;
    var n2=req.body.n2;
    var resultado=parseInt(n1)+parseInt(n2)
    res.send(n1+"+"+n2+"="+resultado)
    
})
//3 Listen
app.listen(4000,function(){
    console.log("Servidor iniciado")
});
