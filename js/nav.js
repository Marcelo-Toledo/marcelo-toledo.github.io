
document.addEventListener("DOMContentLoaded", 
function(){
    const menus = this.getElementsByClassName("categoria");
    
    for(let i = 0; i < menus.length; i++){
        //alert("for:" + menus.length);
        let nomeCategoria = menus[i].getElementsByClassName("nome-categoria");
        let subCategoria = menus[i].getElementsByClassName("subcategoria");
        let nomeSubCategoria = menus[i].getElementsByClassName("nome-subcategoria") ;
        let itensSubCategoria = menus[i].getElementsByClassName("item-subcategoria");

        nomeCategoria[0].addEventListener("click", 
        function(){ 
            for(let j = 0; j < subCategoria.length; j++){
                
                if(subCategoria[j].style.display === "block"){
                    subCategoria[j].style.display = "none";
                }
                else{
                    subCategoria[j].style.display = "block";
                }
            }

            for(let j = 0; j < subCategoria.length; j++){
                let nome = nomeSubCategoria[j];
                
                if(subCategoria[j].contains(itensSubCategoria[j])){
                    nome.addEventListener("click", 
                    function(){
                        if(itensSubCategoria[j].style.display === "block"){
                            itensSubCategoria[j].style.display = "none";
                        }
                        else{
                            itensSubCategoria[j].style.display = "block";
                        }
                    });
                }


            }
            
        });
        
    }

});

