
export function openCloseCategory(){
    const menu = document.getElementsByClassName("category");
    
    for(let i = 0; i < menu.length; i++){
        //alert("for:" + menus.length);
        let categoryName = menu[i].getElementsByClassName("categoryName");
        let subcategory = menu[i].getElementsByClassName("subcategory");
        let subcategoryName = menu[i].getElementsByClassName("subcategoryName") ;
        let subcategory2 = menu[i].getElementsByClassName("subcategory2");

        categoryName[0].addEventListener("click", 
        function(){ 
            for(let j = 0; j < subcategory.length; j++){
                
                if(subcategory[j].style.display === "flex"){
                    subcategory[j].style.display = "none";
                }
                else{
                    subcategory[j].style.display = "flex";
                }
            }

            for(let j = 0; j < subcategory.length; j++){
                let name = subcategoryName[j];
                
                if(subcategory[j].contains(subcategory2[j])){
                    name.addEventListener("click", 
                    function(){
                        if(subcategory2[j].style.display === "flex"){
                            subcategory2[j].style.display = "none";
                        }
                        else{
                            subcategory2[j].style.display = "flex";
                        }
                    });
                }


            }
            
        });
        
    }

}