const Produto = require("./produto");
const CadastroProdutos = require("./cadastro_produtos");

let cadastroProdutos = new CadastroProdutos();

//Inserir Produtos
//const produto = new Produto(0,"massa",4);
//cadastroProdutos.inserir(produto);

//Atualizar Produtos
const produto = new Produto(0,"massa",5);
//Substituir 8 pelo id da "massa"
//cadastroProdutos.atualizar(8,produto);

//Deletar um produto pelo id
//Substituir o id pelo produto que quer remover
//cadastroProdutos.deletar(8);

//Listar Produtos
cadastroProdutos.listar(function(err, produtos){
    if(err) {
        console.log(`Erro: $err.message`);
        return;
    }
    console.log(produtos);
});

//Buscar Produtos por id
//Substituir o id pelo produto que quer consultar
cadastroProdutos.buscarPorId(1, function(err, produto){
    if(err) {
        console.log(`Erro: ${err.message}`);
        return;
    }
    console.log(produto);
});
