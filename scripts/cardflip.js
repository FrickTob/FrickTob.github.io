const card = document.getElementById('card');
const button = document.getElementById('flipButton');

button.addEventListener('click', flipCard);

function flipCard() {
    card.classList.toggle('flipcard');
}