function openMenu(){
    
    let navigation = document.getElementById("myTopnav");

    if(navigation.className === "navigation"){
        navigation.className = "navigationHidden"
    }else{
        navigation.className = "navigation"
    }

    let loginCartMobile = document.getElementById("myLoginCartTopnav");

    if(loginCartMobile.className === "loginCartMobile"){
        loginCartMobile.className = "loginCartMobileHidden"
    }else{
        loginCartMobile.className = "loginCartMobile"
    }
}