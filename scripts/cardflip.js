const card = document.getElementById('card');
const button = document.getElementById('flipButton');
const projectImg1 = document.getElementById('projectImg1')
const projectImg2 = document.getElementById('projectImg2')
const projectImg3 = document.getElementById('projectImg3')
const projectImg4 = document.getElementById('projectImg4')

button.addEventListener('click', flipCard);

function flipCard() {
    card.classList.toggle('flipcard');
}