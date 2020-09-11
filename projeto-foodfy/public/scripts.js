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

function addIngredient() {
    
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
    
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}

function addPreparation(){
    const preparations = document.querySelector("#preparations");
    const fieldContainer = document.querySelectorAll(".preparation")

    const newField =  fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if(newField.children[0].value == "") return false;

    newField.children[0].value = "";
    preparations.appendChild(newField);

}

  
document.querySelector(".add-ingredient").addEventListener("click", addIngredient);
document.querySelector(".add-preparation").addEventListener("click", addPreparation);


