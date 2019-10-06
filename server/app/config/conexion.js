var mysql = require('mysql')

var parametros = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123',
    database: 'practica2ipc2'
}

var conexion = mysql.createConnection(parametros)

if(conexion) {
    console.log('conexion a la base de datos establecida con exito')
}


module.exports = conexion