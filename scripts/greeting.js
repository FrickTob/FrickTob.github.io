const greetingBox = document.getElementById('greetingBox')
const acceptCardButton = document.getElementById('acceptCardButton')
const cardBox = document.getElementById('cardBox')
const firstMessage = document.getElementById('firstMessage')
const cursor = document.getElementById('cursor')

window.addEventListener('load', () => {
    typeMessage()
})


acceptCardButton.onclick = () => {
    greetingBox.style.display = 'none';
    cardBox.style.display = 'block';
    fadeIn(cardBox)
}

const fadeIn = (element) => {
    var i = 0;
    element.style.opacity = 0;
    var k = window.setInterval(function() {
      if (i >= 10) {
        clearInterval(k);
      } else {
        element.style.opacity = i / 10;
        i++;
      }
    }, 100)
  }
  async function typeMessage() {
    await waitForMs()
    await typeSentence("Hi! Here's My Interactive Resume!")
    await waitForMs()
    await deleteLetters("Hi! Here's My Interactive Resume!")
    await waitForMs()
    await typeSentence("No. Too many exclamation marks.")
    await waitForMs()
    await deleteLetters("No. Too many exclamation marks.")
    await waitForMs()
    await typeSentence("Looking for a capable developer? Try me!")
    await waitForMs()
    await deleteLetters("Looking for a capable developer? Try me!")
    await waitForMs()
    await typeSentence("No. Too eager.")
    await waitForMs()
    await deleteLetters("No. Too eager.")
    await waitForMs()
    await typeSentence("Hi, I'm Toby. Here's My Card.")
    await waitForMs(1000)
    await deleteLetters("Hi, I'm Toby. Here's My Card.")
    await waitForMs()
    await typeSentence("Nailed it")
    await removeCursor()
  }
  async function typeSentence(message, delay = 100) {
    sentence = "" + message
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      firstMessage.innerHTML += letters[i];
      i++
    }
    return;
  }

  async function deleteLetters(message, delay = 50) {
    numLetters = message.length
    let i = 0;
    while(i < numLetters) {
      await waitForMs(delay);
      firstMessage.innerHTML = firstMessage.innerHTML.slice(0, -1);
      i++
    }
    return;
  }
  
  
  function waitForMs(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function removeCursor() {
    cursor.style.display = 'none';
  }