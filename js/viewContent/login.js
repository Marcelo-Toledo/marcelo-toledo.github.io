export const loginView = document.createElement("div");
loginView.classList.add("login");
loginView.innerHTML = `
<div class="loginContainer">

<span class="titleLogin">Login</span>

  <div class="emailLogin">
    <span>E-mail</span>
    <input type="email">
  </div>


  <div class="passwordLogin">
    <span>Senha</span>
    <input type="password">
  </div>

  <div>
    <button>Entrar</button>
  </div>

  <div class="haveAccountLogin">
    <span >Ainda não tem uma conta? <a id="registerHere" href="#">Cadastre-se aqui.</a></span>
  </div>

</div>
`;