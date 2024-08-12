//TP 1.9
//Desenvolva uma função chamada agruparPorCategoria que receba um array de objetos representando produtos, onde cada produto tem uma propriedade categoria e uma propriedade nome. A função deve retornar um objeto onde as chaves são as categorias e os valores são arrays contendo os nomes dos produtos pertencentes a cada categoria.

function agruparPorCategoria(produtos) {
  var resultado = {};

  for (var i = 0; i < produtos.length; i++) {
    var produto = produtos[i];
    var categoria = produto.categoria;
    var nome = produto.nome;

    if (!resultado[categoria]) {
      resultado[categoria] = [];
    }

    resultado[categoria].push(nome);
  }

  return resultado;
}

var produtos = [ 
  { nome: "Laptop", categoria: "Eletrônicos" }, 
  { nome: "Camisa", categoria: "Roupas" }, 
  { nome: "Smartphone", categoria: "Eletrônicos" }, 
  { nome: "Calça", categoria: "Roupas" }, 
  { nome: "Fone de Ouvido", categoria: "Eletrônicos" } 
];

console.log(agruparPorCategoria(produtos));


