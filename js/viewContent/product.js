const product = [
    {
      name: "Café Especial",
      price: "R$ 10,00",
      imageSrc: "../../images/content/product/coffee1.jpg"
    },
    {
      name: "Outro Produto",
      price: "R$ 15,00",
      imageSrc: "../../images/content/product/coffee2.jpg"
    },
    {
      name: "Café Especial",
      price: "R$ 10,00",
      imageSrc: "../../images/content/product/coffee1.jpg"
    },
    {
      name: "Outro Produto",
      price: "R$ 15,00",
      imageSrc: "../../images/content/product/coffee2.jpg"
    },
    {
      name: "Café Especial",
      price: "R$ 10,00",
      imageSrc: "../../images/content/product/coffee1.jpg"
    },
    {
      name: "Outro Produto",
      price: "R$ 15,00",
      imageSrc: "../../images/content/product/coffee2.jpg"
    },
    {
      name: "Café Especial",
      price: "R$ 10,00",
      imageSrc: "../../images/content/product/coffee1.jpg"
    },
    {
      name: "Outro Produto",
      price: "R$ 15,00",
      imageSrc: "../../images/content/product/coffee2.jpg"
    },
    // Adicione mais produtos conforme necessário
  ];
  
  export const divProductMain = document.createElement("div");
  divProductMain.classList.add("productMain");
  

  const divContainerProduct = document.createElement("div");
  divContainerProduct.id = "containerProduct";

  divProductMain.appendChild(divContainerProduct);

  export function productView() {
    let index = 0;
    for (const item of product) {
        const divProduct = document.createElement("div");
        divProduct.classList.add("product");
    
        const imgProduct = document.createElement("img");
        imgProduct.src = item.imageSrc;
        imgProduct.alt = "Preencher";
        imgProduct.id = "product" + index;
    
        const h2Product = document.createElement("h2");
        h2Product.textContent = item.name;
    
        const pProduct = document.createElement("p");
        pProduct.textContent = item.price

        const divBnt = document.createElement("div");
        divBnt.classList.add("btnProduct");
    
        const btnProductCart = document.createElement("button");
        btnProductCart.textContent = "Adicionar ao Carrinho";
    
        const btnProductBuy = document.createElement("button");
        btnProductBuy.textContent = "Comprar Agora"
    
        divBnt.appendChild(btnProductCart);
        divBnt.appendChild(btnProductBuy);

        divProduct.appendChild(imgProduct);
        divProduct.appendChild(h2Product);
        divProduct.appendChild(pProduct);
        divProduct.appendChild(divBnt);

        divContainerProduct.appendChild(divProduct);
        index++;
      }
  }