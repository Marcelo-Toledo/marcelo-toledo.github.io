var product = [
    {
      name: "Café Especial",
      price: "R$ 10,00",
      imageSrc: "images/product/coffee1.jpg"
    },
    {
      name: "Outro Produto",
      price: "R$ 15,00",
      imageSrc: "images/product/coffee2.jpg"
    },
    {
      name: "Café Especial",
      price: "R$ 10,00",
      imageSrc: "images/product/coffee1.jpg"
    },
    {
      name: "Outro Produto",
      price: "R$ 15,00",
      imageSrc: "images/product/coffee2.jpg"
    },
    {
      name: "Café Especial",
      price: "R$ 10,00",
      imageSrc: "images/product/coffee1.jpg"
    },
    {
      name: "Outro Produto",
      price: "R$ 15,00",
      imageSrc: "images/product/coffee2.jpg"
    },
    {
      name: "Café Especial",
      price: "R$ 10,00",
      imageSrc: "images/product/coffee1.jpg"
    },
    {
      name: "Outro Produto",
      price: "R$ 15,00",
      imageSrc: "images/product/coffee2.jpg"
    },
    // Adicione mais produtos conforme necessário
  ];

  let productContainer = document.getElementById("containerProduct");
 

  document.addEventListener("DOMContentLoaded", function() {
    for (const item of product) {
        let divProduct = document.createElement("div");
        divProduct.classList.add("product");
    
        let imgProduct = document.createElement("img");
        imgProduct.src = item.imageSrc;
        imgProduct.alt = "Preencher";
    
        let h2Product = document.createElement("h2");
        h2Product.textContent = item.name;
    
        let pProduct = document.createElement("p");
        pProduct.textContent = item.price

        let divBnt = document.createElement("div");
        divBnt.classList.add("btnProduct");
    
        let btnProductCart = document.createElement("button");
        btnProductCart.textContent = "Adicionar ao Carrinho";
    
        let btnProductBuy = document.createElement("button");
        btnProductBuy.textContent = "Comprar Agora"
    
        divBnt.appendChild(btnProductCart);
        divBnt.appendChild(btnProductBuy);

        divProduct.appendChild(imgProduct);
        divProduct.appendChild(h2Product);
        divProduct.appendChild(pProduct);
        divProduct.appendChild(divBnt);

        productContainer.appendChild(divProduct);

      }
  });