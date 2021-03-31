const mysql = require('mysql');

let conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "crud_produtos"
});

conexao.connect(function(erro){
    if(erro) throw erro;
    console.log("Conectado");    
});

//Execute primeiro o INSERT e depois o SELECT
//const sql = "INSERT INTO produto (nome, preco) VALUES (?,?)";
const sql = "SELECT * FROM produto";
//conexao.query(sql, ["arroz",30], function(erro, resultado){
conexao.query(sql, function(erro, resultado){
    if(erro) throw erro;
    console.log(JSON.stringify(resultado));
});

conexao.end();