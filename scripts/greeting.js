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
    await waitForMs(200)
    await typeSentence("Hi! Here's My Interactive Resume!")
    await waitForMs(300)
    await deleteLetters("! Here's My Interactive Resume!")
    await waitForMs(200)
    await typeSentence(", I'm Toby. Here's My Card.", delay = 100)
    await waitForMs(300)
    await removeCursor()
    //await displayButton()
  }
  async function typeSentence(message, delay = 50) {
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
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function removeCursor() {
    cursor.style.display = 'none';
  }

  async function displayButton() {
    fadeIn(acceptCardButton)
  }