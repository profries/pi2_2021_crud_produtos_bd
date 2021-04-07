const Produto = require("./produto");
const CadastroProdutos = require("./cadastro_produtos");

let cadastroProdutos = new CadastroProdutos();

const produto = new Produto(0,"massa",4);

cadastroProdutos.inserir(produto);

cadastroProdutos.listar(function(err, produtos){
    if(err) throw err;
    console.log(produtos);
});
