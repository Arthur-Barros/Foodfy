const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");


for(let card of cards){
    card.addEventListener("click",  function(){
        const cardId = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("img").src = `./assets/${cardId}.png`;
        const title = card.querySelector(".card__content p").textContent;
        const content = card.querySelector(".card__info p").textContent;
        modalOverlay.querySelector(".modal-title p").innerHTML = title;
        modalOverlay.querySelector(".modal-content p").innerHTML = content;
    });
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
});

