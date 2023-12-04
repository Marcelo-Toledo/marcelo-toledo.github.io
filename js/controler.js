import {divProductMain, productView } from "./viewContent/product.js";
import { cartView } from "./viewContent/cart.js";
import { loginView } from "./viewContent/login.js";
import { userView, userViewPersonalData, userViewSecurity,
userViewPurchaseHistory, userViewAddress } from "./viewContent/user.js";
const contentView = document.getElementById("contentView");

export function viewModel(){
    productView();
    contentView.appendChild(divProductMain);
    contentView.appendChild(cartView);
    contentView.appendChild(loginView);
    contentView.appendChild(userView);
    hideChildren(contentView);
    contentView.children[0].style.display = "flex";

    contentProductMain();
    contentCart();
    contentLogin();
    contentUser();
    userData();
}

function userData(){
    const personalData = document.querySelector("#personalView");
    personalData.addEventListener("click", function(){
        while(userView.childElementCount > 1){
            userView.removeChild(userView.lastChild);
        }
        userView.appendChild(userViewPersonalData);
        activeUser(personalData);
    });

    const security = document.querySelector("#securityView");
    security.addEventListener("click", function(){
        while(userView.childElementCount > 1){
            userView.removeChild(userView.lastChild);
        }
        userView.appendChild(userViewSecurity);
        activeUser(security);
    });

    const history = document.querySelector("#historyView");
    history.addEventListener("click", function(){
        while(userView.childElementCount > 1){
            userView.removeChild(userView.lastChild);
        }
        userView.appendChild(userViewPurchaseHistory);
        activeUser(history);
    });

    const address = document.querySelector("#addressView");
    address.addEventListener("click", function(){
        while(userView.childElementCount > 1){
            userView.removeChild(userView.lastChild);
        }
        userView.appendChild(userViewAddress);
        activeUser(address);
    });

}

function activeUser(view){
    const active = [document.querySelector("#personalView"),
    document.querySelector("#securityView"),
    document.querySelector("#historyView"),
    document.querySelector("#addressView")];

    for (const el of active){
        if(el.classList.contains("active") && el.id !== view.id){
            el.classList.remove("active");
        }
        if(!(el.classList.contains("active")) && el.id === view.id){
            view.classList.add("active");
        }
    }

}

function contentUser(){
    const user = document.querySelector("#user");
    user.addEventListener("click", function(){
        hideChildren(contentView);
        userView.style.display = "grid";
    });
}

function contentLogin(){
    const cart = document.querySelector("#login");
    cart.addEventListener("click", function(){
        hideChildren(contentView);
        loginView.style.display = "flex";
    });

    const cartMobile = document.querySelector("#loginMobile");
    cartMobile.addEventListener("click", function(){
        hideChildren(contentView);
        loginView.style.display = "flex";
    });
}

function contentCart(){
    const cart = document.querySelector("#cart");
    cart.addEventListener("click", function(){
        hideChildren(contentView);
        cartView.style.display = "flex";
    });

    const cartMobile = document.querySelector("#cartMobile");
    cartMobile.addEventListener("click", function(){
        hideChildren(contentView);
        cartView.style.display = "flex";
    });
}

function contentProductMain(){
    const logo = document.querySelector("#logo a");
    logo.addEventListener("click", function(){
        hideChildren(contentView);
        divProductMain.style.display = "flex";
    });
}

function hideChildren(view){
    for(let i = 0; i < contentView.childElementCount; i++){
        view.children[i].style.display = "none";
    }
}