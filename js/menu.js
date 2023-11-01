function openMenu(){
    
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