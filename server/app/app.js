var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')


var app = express()
var puerto = 3000
var uri = 'servidor/v1/'

//configuracion del formato de respuestas
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
//cabeceras para entrar al servidor
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization')
    if(req.methods == "OPTIONS") {
        res.sendStatus(200)
    } else {
        next()
    }
})
//rutas

//midlewares

//levantar el server
app.listen(puerto, function(){
    console.log('servidor levantado')
})


