var abroadButton = document.querySelector('.abroadButton');
var tutorButton = document.querySelector('.tutorButton');
var internButton = document.querySelector('.internButton');
var abroadBox = document.querySelector('.abroadBox');
var tutorBox = document.querySelector('.tutorBox');
var internBox = document.querySelector('.internBox');

tutorButton.addEventListener('click', function() {
    tutorBox.style.height = '55%';
    abroadBox.style.height = '0';
    internBox.style.height = '0';
});

abroadButton.addEventListener('click', function() {
    tutorBox.style.height = '0';
    abroadBox.style.height = '55%';
    internBox.style.height = '0';
});
internButton.addEventListener('click', function() {
    tutorBox.style.height = '0';
    abroadBox.style.height = '0';
    internBox.style.height = '55%';
});