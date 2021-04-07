const mysql = require('mysql');

module.exports = class CadastroProdutos {
    constructor(){
        this.dadosConexao = {
            host: "localhost",
            user: "root",
            password:"",
            database: "crud_produtos"
        };
    }

    inserir(produto){
        let conexao = mysql.createConnection(this.dadosConexao);    
        conexao.connect();        
        const sql = "INSERT INTO produto (nome, preco) VALUES (?,?)";
        conexao.query(sql,[produto.nome,produto.preco]);
        conexao.end();

    }

    //resultado é uma variável de callback (equivale a uma função)
    listar(mostraResultado) {
        let conexao = mysql.createConnection(this.dadosConexao);    
        conexao.connect();        
        const sql = "SELECT * FROM produto";
        conexao.query(sql, function(err, res){
            if(err) {
                mostraResultado(err, null);
            }
            else {
                let produtos = JSON.stringify(res);
                mostraResultado(null, produtos);
            }
        });
        conexao.end();
    }    
}