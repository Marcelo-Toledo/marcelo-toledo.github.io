/*
document.addEventListener("DOMContentLoaded", 
function(){
    const menus = this.getElementsByClassName("categoria");
    alert("pagina carregada");
    for(let i=0; i < menus.length; i++){
        const submenus = menus[i].getElementsByClassName("subcategoria")
        
        menus[i].addEventListener("click", 
        function(){
            menus.classList.toggle("active");
            if(submenus.style.display === none){
                submenus.style.display = block;
            }else{
                submenus.style.display = none;
            }
            
        });

        for (let j=0; j<submenus.length; j++){
            submenus[j].addEventListener("click", 
            function(){

            });
        }
    }
});
*/

document.addEventListener("DOMContentLoaded", 
function(){
    const menus = this.getElementsByClassName("categoria");
    

    for(let i = 0; i < menus.length; i++){
        //alert("for:" + menus.length);
        let item = menus[i].getElementsByClassName("item-categoria");
        let submenus = menus[i].getElementsByClassName("subcategoria");
        let nomeSubmenu = menus[i].getElementsByClassName("nome-subcategoria") ;
        let itensSubmenus = menus[i].getElementsByClassName("item-subcategoria");

        item[0].addEventListener("click", 
        function(){ 
            for(let j = 0; j < submenus.length; j++){
                
                if(submenus[j].style.display === "block"){
                    submenus[j].style.display = "none";
                }
                else{
                    submenus[j].style.display = "block";
                }
            }

            for(let j = 0; j < submenus.length; j++){
                let nome = nomeSubmenu[j];
                
                if(submenus[j].contains(itensSubmenus[j])){
                    nome.addEventListener("click", 
                    function(){
                        if(itensSubmenus[j].style.display === "block"){
                            itensSubmenus[j].style.display = "none";
                        }
                        else{
                            itensSubmenus[j].style.display = "block";
                        }
                    });
                }


            }
            
        });

       // alert(itensSubmenus.length + " : " + itensSubmenus[0].innerHTML);
        
        
        
    }



});

