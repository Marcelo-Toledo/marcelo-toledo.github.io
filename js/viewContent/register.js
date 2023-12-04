export const registerView = document.createElement("div");
registerView.classList.add("register");
registerView.innerHTML = `
<div class="registerContainer">

<span class="titleRegister">Cadastrar usuário</span>

  <div class="nameRegister">
    <span>Nome completo</span>
    <input type="text">
  </div>

  <div class="emailRegister">
    <span>E-mail</span>
    <input type="email">
  </div>


  <div class="passwordRegister">
    <span>Senha</span>
    <input type="password">
  </div>


  <div class="confirmPasswordRegister">
    <span>Confirmar Senha</span>
    <input type="password">
  </div>

  <div>
    <button>Cadastrar</button>
  </div>

  <div class="haveAccountRegister">
    <span >Já possui uma conta? <a id="loginHere" href="#">Faça o login aqui.</a></span>
  </div>

</div>
`;