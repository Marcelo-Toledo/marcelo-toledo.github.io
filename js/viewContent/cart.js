export const cartView = document.createElement("div");
cartView.classList.add("cart");
cartView.innerHTML = `
  <span class="titleCart">Meu Carrinho</span>

  <div class="cartContainer">

  <div class="cartItem">

  <div class="cartItemQuantity">
  <div class="cartImg">
    <img src="../../images/content/product/coffee2.jpg" alt="Product Image" width="80px" height="80px">
  </div>

  <div class="cartItemName">
    <span>Café tradicional 500g</span>
  </div>

  <div class="cartItemButtons">
    <button class="cartAddItem">+</button>
    <input type="text" class="quantityInput" value="1">
    <button class="cartRmItem">-</button>
  </div>
  </div>

  <div class="cartItemValue">
  <div class="cartItemValueContainer">
    <span class="cartItemPrice">Preço por únidade</span> <span>R$ 15,00</span>
  </div>

  <hr>

  <div class="cartItemValueContainer">
    <span class="cartItemShipping">Frete por envio</span> <span>R$ 20,00</span>
  </div>

  <hr>

  <div class="cartItemValueContainer">
    <span class="cartItemTotal">Total</span> <span>R$ 35,00</span>
  </div>
  </div>

  <div class="cartItemRemove">
  <button>Remover</button>
  </div>

  </div>



  <div class="cartItem">

  <div class="cartItemQuantity">
  <div class="cartImg">
    <img src="../../images/content/product/coffee1.jpg" alt="Product Image" width="80px" height="80px">
  </div>

  <div class="cartItemName">
    <span>Café tradicional 500g</span>
  </div>

  <div class="cartItemButtons">
    <button class="cartAddItem">+</button>
    <input type="text" class="quantityInput" value="1">
    <button class="cartRmItem">-</button>
  </div>
  </div>

  <div class="cartItemValue">
  <div class="cartItemValueContainer">
    <span class="cartItemPrice">Preço por únidade</span> <span>R$ 15,00</span>
  </div>

  <hr>

  <div class="cartItemValueContainer">
    <span class="cartItemShipping">Frete por envio</span> <span>R$ 20,00</span>
  </div>

  <hr>

  <div class="cartItemValueContainer">
    <span class="cartItemTotal">Total</span> <span>R$ 35,00</span>
  </div>
  </div>

  <div class="cartItemRemove">
  <button>Remover</button>
  </div>

  </div>



  <div class="cartShoppingSummary">
  <div class="cartItemShoppingSummaryContainer">
  <span class="cartItemShoppingSummaryTitle">Resumo da compra</span>
  </div>
  <hr>
  <div class="cartItemShoppingSummaryContainer">
  <span class="cartItemShoppingSummaryShipping">Custo de envio</span><span class="cartItemShoppingSummaryShippingValue">R$ 20,00</span>
  </div>
  <hr>
  <div class="cartItemShoppingSummaryContainer">
  <span class="cartItemShoppingSummaryProduct">Protutos(2)</span><span class="cartItemShoppingSummaryProductValue">R$ 30,00</span>
  </div>
  <hr>
  <div class="cartItemShoppingSummaryContainer">
  <span class="cartItemShoppingSummaryTotal">Total</span><span class="cartItemShoppingSummaryTotalValue">R$ 50,00</span>
  </div>

  </div>

  <hr>
  <div class="cartCompletePurchases">
  <button>Finalizar Compra</button>
  </div>
  </div>

`