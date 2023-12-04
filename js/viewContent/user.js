export const userView = document.createElement("div");
userView.classList.add("user");
userView.classList.contains
userView.classList.remove
userView.innerHTML = `
<div class="userNavigation">
    <span>Minha conta</span>

    <a id="personalView" href="#">
    <span>Dados Pessoais</span>
    </a>
    <a href="#" id="securityView">
    <span>Segurança</span>
    </a>
    <a href="#" id="historyView">
    <span>Histórico de compras</span>
    </a>
    <a href="#" id="addressView">
    <span>Endereço</span>
    </a>    
</div>
`;

export const userViewPersonalData = document.createElement("div");
userViewPersonalData.classList.add("myProfile");
userViewPersonalData.innerHTML = `
<div class="personalData">
    <div class="sideLeft">
    <span class="userItemPrimary">Nome completo</span>
    <span class="userItemSecondary">Fulano Fictício</span>
    <input class="userInput" type="text" placeholder="Digite seu nome completo...">
    </div>

    <div class="sideRight">
    <button>Corrigir</button>
    </div>
    </div>

    <hr>

    <div class="personalData">
    <div class="sideLeft">
    <span class="userItemPrimary">E-mail</span>
    <span class="userItemSecondary">email@example.com</span>

    </div>

    <div class="sideRight">
    <button>Editar</button>
    </div>
    </div>

    <hr>

    <div class="personalData">
    <div class="sideLeft">
    <span class="userItemPrimary">CPF</span>
    <span class="userItemSecondary">123.345.789-00</span>
    <input class="userInput" type="text" placeholder="Digite seu CPF, apenas números...">
    </div>

    <div class="sideRight">
    <button>Corrigir</button>
    </div>
    </div>

    <hr>

    <div class="personalData">
    <div class="sideLeft">
    <span class="userItemPrimary">Endereço atual</span>
    <span class="userItemSecondary">{Rua ou avenida}, {Número}, {Cidade}, {CEP}.</span>
    
    <div class="changeAddress">

    </div>
    </div>

    <div class="sideRight">
    <button>Mudar</button>
    </div>
</div>
`;

export const userViewSecurity = document.createElement("div");
userViewSecurity.classList.add("myProfile");
userViewSecurity.innerHTML = `
<div class="personalData">
<div class="sideLeft">
  <span class="userItemPrimary">Senha</span>
  <span class="userItemSecondary">***********</span>
  <input class="userInput" type="password" placeholder="Digite sua senha atual...">
  <input class="userInput" type="password" placeholder="Digite sua nova senha...">
  <input class="userInput" type="password" placeholder="Digite novamente...">
</div>

<div class="sideRight">
  <button>Alterar</button>
</div>
</div>

<hr>

<div class="personalData">
<div class="sideLeft">
  <span class="userItemPrimary">E-mail de recuperação de conta</span>
  <span class="userItemSecondary">email@example.com</span>
  <input class="userInput" type="email" placeholder="Digite um novo E-mail...">
  <input class="userInput" type="email" placeholder="Digite novamente...">
</div>

<div class="sideRight">
  <button>Alterar</button>
</div>
</div>

<hr>

<div class="personalData">
<div class="sideLeft">
  <span class="userItemPrimary">Telefone</span>
  <span class="userItemSecondary">(00) 13455-6789</span>
  <input class="userInput" type="text" placeholder="Digite um novo número...">
</div>

<div class="sideRight">
  <button>Alterar</button>
</div>
</div>

</div>
`;

export const userViewPurchaseHistory = document.createElement("div");
userViewPurchaseHistory.classList.add("myProfile");
userViewPurchaseHistory.innerHTML = `

<div class="personalData">
    
<div class="imagePurchasesHistory">
  <img src="../../images/content/product/coffee1.jpg" alt="coffee1" width="150px" height="150px">
</div>

<div class="userDataPurchasesHistory">
  <div class="userPurchaseInformation">
    <span class="userItemPrimaryPurchases">24 de setembro de 2023</span>
    <span class="userItemPurchasesData"></span>
  </div>

  <div class="userPurchaseInformation">
    <span class="userItemPrimaryPurchases">Situação: </span>
    <span class="userItemPurchasesData">Entregue (Recebido no dia 14 de outubro de 2023)</span>
  </div>

  <div class="userPurchaseInformation">
    <span class="userItemPrimaryPurchases">Produto: </span>
    <span class="userItemPurchasesData">Café tradicional 500g</span>
  </div>

  <div class="userPurchaseInformation">
    <span class="userItemPrimaryPurchases">Quantidade: </span>
    <span class="userItemPurchasesData">10 Unidades</span>
  </div>

  <div class="userPurchaseDetails">
    <span class="userItemPrimaryPurchases">Detalhes da compra</span>
    <span class="userItemPurchasesData"></span>
  </div>

  <div class="userPurchaseDetails">
    <span class="userItemSecondaryPurchases">Valor do produto: </span>
    <span class="userItemPurchasesData">R$ 15,00</span>
  </div>

  <hr>
  
  <div class="userPurchaseDetails">
    <span class="userItemSecondaryPurchases">Valor do frete: </span>
    <span class="userItemPurchasesData">R$ 20,00</span>
  </div>

  <hr>
  
  <div class="userPurchaseDetails">
    <span class="userItemSecondaryPurchases">Valor do desconto: </span>
    <span class="userItemPurchasesData">R$ 10,00</span>
  </div>

  <hr>
  
  <div class="userPurchaseDetails">
    <span class="userItemSecondaryPurchases">Total da compra: </span>
    <span class="userItemPurchasesData">R$ 160,00</span>
  </div>
  
</div>

</div>
<hr>
`;

export const userViewAddress = document.createElement("div");
userViewAddress.classList.add("myProfile");
userViewAddress.innerHTML = `
<div class="personalData">
<div class="sideLeft">
  <span class="userItemPrimary">Endereço atual</span>
  <span class="userItemSecondary">{Rua ou avenida}, {Número}, {Cidade}, {CEP}.</span>
  
  <div class="changeAddress">

  </div>
</div>

<div class="sideRight">
  <button>Mudar</button>
</div>
</div>
<hr>

<div class="personalData">
<div class="sideLeft">
  <span class="userItemPrimary">Adicionar novo endereço</span>
  <span class="userItemAddress">Nome completo</span>
  <input class="userInput" type="text" placeholder="Digite...">
  <span class="userItemAddress">CEP</span>
  <input class="userInput" type="text" placeholder="Digite...">
  <span class="userItemAddress">Estado</span>
  <input class="userInput" type="text" placeholder="Digite...">
  <span class="userItemAddress">Cidade</span>
  <input class="userInput" type="text" placeholder="Digite...">
  <span class="userItemAddress">Bairro</span>
  <input class="userInput" type="text" placeholder="Digite...">
  <span class="userItemAddress">Rua/Avenida</span>
  <input class="userInput" type="text" placeholder="Digite...">
  <span class="userItemAddress">Número</span>
  <input class="userInput" type="text" placeholder="Digite...">
  <span class="userItemAddress">Complemento (opcional)</span>
  <input class="userInput" type="text" placeholder="Digite...">
  <span class="userItemAddress">Telefone de contato</span>
  <input class="userInput" type="text" placeholder="Digite...">
</div>

<div class="sideRight">
  <button>Adicionar</button>
</div>
</div>

</div>

`;