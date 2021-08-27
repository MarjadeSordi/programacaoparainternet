const lista = []; 

function inserir(produto){
  lista.push(produto);
}

function listar(){
  return lista;
}

function buscarPorId(id){
  for(let prod of lista){
    if(prod.id === id){
      return prod;
    }
  }
}

function deletar(id) {
  for(let prod of lista){
    if (prod.id === id){
    let i = lista.indexOf(prod);
    lista.splice(i, 1)
    return lista
    }
  }
}

function atualizarValor(id, produto) {
  for(let prod of lista){
    if (prod.id === id){
    let i = lista.indexOf(prod);
    lista[i].nome = produto;     
    return lista
    }
  }
}


inserir({id: 1, nome: 'produto1', preco: 10})
inserir({id: 2, nome: 'produto2', preco: 40}) 
inserir({id: 3, nome: 'produto3', preco: 50})

buscarPorId(1);


console.log(lista)
console.log(buscarPorId(2))
console.log(deletar(1))
console.log(atualizarValor(2,'marja'))


