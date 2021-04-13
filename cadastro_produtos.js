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

    deletar(id) {
        let conexao = mysql.createConnection(this.dadosConexao);    
        conexao.connect();        
        const sql = "DELETE FROM produto WHERE id=?";
        conexao.query(sql,[id]);
        conexao.end();
    }

    atualizar(id, produto){
        let conexao = mysql.createConnection(this.dadosConexao);    
        conexao.connect();        
        const sql = "UPDATE produto SET nome=?, preco=? WHERE id=?";
        conexao.query(sql,[produto.nome,produto.preco,id]);
        conexao.end();
    }

    buscarPorId(id, mostraResultado){
        let conexao = mysql.createConnection(this.dadosConexao);    
        conexao.connect();        
        const sql = "SELECT * FROM produto WHERE id=?";
        conexao.query(sql, [id], function(err, res){
            if(err) {
                mostraResultado(err, null);
            }
            else {
                if(res && res[0])
                    mostraResultado(null, JSON.stringify(res[0]));
                else
                    mostraResultado(new Error("Id inexistente"), null);
            }
        });
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
                mostraResultado(null, JSON.stringify(res));
            }
        });
        conexao.end();
    }    
}