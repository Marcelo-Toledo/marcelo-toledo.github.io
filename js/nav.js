import { openCloseCategory } from "./openCloseCategory.js";

export function navView() {
  const containerNavegation = document.getElementById("containerNavegation");

  // barra inicial================================================
  const navHomeBar = document.createElement("nav");
  navHomeBar.id = "homeBar";
  
  
      //logo
      let divLogo = document.createElement("div");
      divLogo.id = "logo";
      
          //aLogo
          const aLogo = document.createElement("a");
          
              //picture
              const pictureLogo = document.createElement("picture");

                  //imageLogo
                  const imageLogo = document.createElement("img");
                  imageLogo.src = "../../images/nav/logo/logo_apenas_icone.png";
                  imageLogo.width = "50";
                  imageLogo.height = "50";
  

      //pesquisa
      const divSearch = document.createElement("div");
      divSearch.id = "homeSearch";
          //input
          const inputBarHome = document.createElement("input");
          //button
          const buttonSearch = document.createElement("button");
          buttonSearch.textContent = "Buscar";
      
      //login e carrinho
      const divLoginCart = document.createElement("div");
      divLoginCart.id = "loginCart";
          //aLogin
          const aLogin = document.createElement("a");
              const imageLogin = document.createElement("img");
              imageLogin.id = "login";
              imageLogin.src = "../../images/nav/login/login.png";
              imageLogin.width = "50";
              imageLogin.height = "50";
          //aCart
          const aCart = document.createElement("a");
              const imageCart = document.createElement("img");
              imageCart.id = "cart"
              imageCart.src = "../../images/nav/cart/shopping-cart.png";
              imageCart.width = "50";
              imageCart.height = "50";
              
      
      //menu
      const divMenu = document.createElement("div");
      divMenu.id = "menu";
          const buttonMenu = document.createElement("button");
          buttonMenu.onclick = function openMenu(){
  
              let categoryNavigation = document.getElementById("myTopnav");
          
              if(categoryNavigation.className === "categoryNavigation"){
                  categoryNavigation.className = "categoryNavigationHidden"
              }else{
                  categoryNavigation.className = "categoryNavigation"
              }
          
              let loginCartMobile = document.getElementById("myLoginCartTopnav");
          
              if(loginCartMobile.className === "loginCartMobile"){
                  loginCartMobile.className = "loginCartMobileHidden"
              }else{
                  loginCartMobile.className = "loginCartMobile"
              }
          }
          
              const imageMenu = document.createElement("img");
              imageMenu.src = "../../images/nav/menu/menu_margin.png";
              imageMenu.width = "50";
              imageMenu.height = "50";

  //==
  //containerNavegation
  containerNavegation.appendChild(navHomeBar);

  navHomeBar.appendChild(divLogo);
  divLogo.appendChild(aLogo);
  aLogo.appendChild(pictureLogo);
  pictureLogo.appendChild(imageLogo);

  navHomeBar.appendChild(divSearch);
  divSearch.appendChild(inputBarHome);
  divSearch.appendChild(buttonSearch);

  navHomeBar.appendChild(divLoginCart);
  divLoginCart.appendChild(aLogin);
  divLoginCart.appendChild(aCart);
  aLogin.appendChild(imageLogin)
  aCart.appendChild(imageCart);

  navHomeBar.appendChild(divMenu);
  divMenu.appendChild(buttonMenu);
  buttonMenu.appendChild(imageMenu);



  //========================================================
  //= barra para mobile

  const navMobileBar = document.createElement("nav");
  navMobileBar.classList.add("loginCartMobile");
  navMobileBar.id = "myLoginCartTopnav";

      const aLoginMobile = document.createElement("a");
      aLoginMobile.classList.add("linkLoginMobile");

          const imgLoginMobile = document.createElement("img");
          imgLoginMobile.id = "loginMobile";
          imgLoginMobile.src = "../../images/nav/login/login_white.png";
          imgLoginMobile.width = "50";
          imgLoginMobile.height = "50";

      const aCartMobile = document.createElement("a");
      aCartMobile.classList.add("linkCartMobile");

          const imgCartMobile = document.createElement("img");
          imgCartMobile.id = "cartMobile";
          imgCartMobile.src = "../../images/nav/cart/shopping-cart_white.png";
          imgCartMobile.width = "50";
          imgCartMobile.height = "50";

  //==
  //containerNavegation
  containerNavegation.appendChild(navMobileBar);
  navMobileBar.appendChild(aLoginMobile);
  navMobileBar.appendChild(aCartMobile);
  aLoginMobile.appendChild(imgLoginMobile);
  aCartMobile.appendChild(imgCartMobile);

  //========================================================
  //= barra de categoria

  const navCategoryNavigation = document.createElement("nav");
  navCategoryNavigation.classList.add("categoryNavigation");
  navCategoryNavigation.id = "myTopnav";
  navCategoryNavigation.innerHTML = `
  <div class="column">
        <ul class="category">
          <li class="categoryName categoryItem">CAFE</li>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem">POR MÉTODO</li>

            <ul class="subcategory2">
              <li class="item categoryItem"><a href="#">Grãos</a></li>
              <li class="item categoryItem"><a href="#">Moídos</a></li>
            </ul>
          </ul>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem">INTENSIDADE</li>

            <ul class="subcategory2">
              <li class="item categoryItem"><a href="#">Suave</a></li>
              <li class="item categoryItem"><a href="#">Média</a></li>
              <li class="item categoryItem"><a href="#">Intensa</a></li>
            </ul>
          </ul>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem">TIPO</li>

            <ul class="subcategory2">
              <li class="item categoryItem"><a href="#">Aromatizado</a></li>
              <li class="item categoryItem"><a href="#">Certificado</a></li>
            </ul>
          </ul>

        </ul>
      </div>
  
      <div class="column">
        <ul class="category">
          <li class="categoryName categoryItem">CAFETEIRAS</li>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem">MÁQUINAS</li>

            <ul class="subcategory2">
              <li class="item categoryItem"><a href="#">Máquinas Para Grãos</a></li>
              <li class="item categoryItem"><a href="#">Máquinas Para Pó</a></li>
              <li class="item categoryItem"><a href="#">Máquinas Para Cápsulas</a></li>
            </ul>

          </ul>
        </ul>
      </div>
  
      <div class="column">
        <ul class="category">
          <li class="categoryName categoryItem">ACESSÓRIOS</li>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem">MOEDORES</li>

            <ul class="subcategory2">
              <li class="item categoryItem"><a href="#">Manuais</a></li>
              <li class="item categoryItem"><a href="#">Elétricos</a></li>
            </ul>
          </ul>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem"><a href="#">FILTRO DE PAPEL</a></li>
          </ul>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem"><a href="#">CHALEIRAS</a></li>
          </ul>

        </ul>
      </div>
  
      <div class="column">
        <ul class="category">
          <li class="categoryName categoryItem">BEBIDAS & GOURMET</li>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem">BEBIDAS</li>
              
            <ul class="subcategory2">
              <li class="item categoryItem"><a href="#">Cappuccinos</a></li>
            </ul>
          </ul>


          <ul class="subcategory">
            <li class="subcategoryName categoryItem">ACOMPANHAMENTO</li>
            
            <ul class="subcategory2">
              <li class="item categoryItem"><a href="#">Chocolates</a></li>
            </ul>
          </ul>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem"><a href="#">CHAROPES</a></li>
          </ul>

        </ul>
      </div>
  
      <div class="column">
        <ul class="category">
          <li class="categoryName categoryItem">MAIS</li>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem">USUÁRIO</li>

            <ul class="subcategory2">
              <li class="item categoryItem"><a id="user" href="#">Informações do Usuário</a></li>
              <li class="item categoryItem"><a href="#">Histórico de compra</a></li>
            </ul>
          </ul>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem">INSTITUCIONAL</li>

            <ul class="subcategory2">
              <li class="item categoryItem"><a href="#">Quem Somos</a></li>
            </ul>
          </ul>

          <ul class="subcategory">
            <li class="subcategoryName categoryItem">SUPORTE E AJUDA</li>

            <ul class="subcategory2">
              <li class="item categoryItem"><a href="#">Central de Atendimento</a></li>
              <li class="item categoryItem"><a href="#">Frete e Promoções</a></li>
            </ul>
          </ul>

        </ul>
      </div>
  `
  containerNavegation.appendChild(navCategoryNavigation);
  
  openCloseCategory();
}
     
  /**
   *     for (const item of product) {
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
   */