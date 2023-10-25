var produtos = [
    {
      nome: "Café Especial",
      preco: "R$ 10,00",
      imagemSrc: "images/product/coffee1.jpg"
    },
    {
      nome: "Outro Produto",
      preco: "R$ 15,00",
      imagemSrc: "images/product/coffee2.jpg"
    },
    // Adicione mais produtos conforme necessário
  ];

  let produtoContainer = document.getElementById("containerProduto");
 

  document.addEventListener("DOMContentLoaded", function() {
    for (const item of produtos) {
        let divProduto = document.createElement("div");
        divProduto.classList.add("product");

        let divBnt = document.createElement("div");
        divBnt.classList.add("btnProduto");
    
        let imgProduto = document.createElement("img");
        imgProduto.src = item.imagemSrc;
        imgProduto.alt = "Preencher";
    
        let h2Produto = document.createElement("h2");
        h2Produto.textContent = item.nome;
    
        let pProduto = document.createElement("p");
        pProduto.textContent = item.preco
    
        let btnProdutoCarrinho = document.createElement("button");
        btnProdutoCarrinho.textContent = "Adicionar ao Carrinho";
    
        let btnProdutoComprar = document.createElement("button");
        btnProdutoComprar.textContent = "Comprar Agora"
    
        divBnt.appendChild(btnProdutoCarrinho);
        divBnt.appendChild(btnProdutoComprar);

        divProduto.appendChild(imgProduto);
        divProduto.appendChild(h2Produto);
        divProduto.appendChild(pProduto);
        divProduto.appendChild(divBnt);

        produtoContainer.appendChild(divProduto);

      }
  });