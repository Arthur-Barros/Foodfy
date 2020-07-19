const cards = document.querySelectorAll(".card");


for(let card of cards){
    
    card.addEventListener("click",  function(){
        const cardId = card.getAttribute("id");
        window.location.href = `/recipe/${cardId}`;

    });
}


const preparations = document.querySelectorAll(".preparation_recipe");

const button = document.querySelectorAll(".button");

for(let i = 0; i < button.length; i++){

    if(preparations[i].innerHTML == ""){
        button[i].innerHTML = "";
        preparations[i].innerHTML = "Não temos informação adicional dessa receita."
    }

    button[i].addEventListener("click", function(){
        
       
        if(button[i].innerHTML == "Esconder"){
            preparations[i].classList.add("active");
            button[i].innerHTML = "Mostrar"
        }else{
            preparations[i].classList.remove("active"); 
            button[i].innerHTML = "Esconder"
        }
        
      

    });
}