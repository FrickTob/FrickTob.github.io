const changeOrientationMessage = document.getElementById('verticalScreenMessage')
const greetingBox = document.getElementById('greetingBox')
const acceptCardButton = document.getElementById('acceptCardButton')
const cardBox = document.getElementById('cardBox')
const firstMessage = document.getElementById('firstMessage')
const cursor = document.getElementById('cursor')

var hasAcceptedCard = false
alert("hello")
window.addEventListener('load', () => {
  switch (screen.orientation.type) {
    case "landscape-primary":
    case "landscape-secondary":
      changeOrientationMessage.style.display = 'none'
      greetingBox.style.display = 'flex';
      break;
    case "portrait-primary":
    case "portrait-secondary":
      if(window.innerWidth < 1000) {
        changeOrientationMessage.style.display = 'block'
        changeOrientationMessage.innerHTML = 'Please rotate your device to landscape mode for best experience.'
        greetingBox.style.display = 'none';
        cardBox.style.display = 'none';
      }
      else if (hasAcceptedCard) {
      changeOrientationMessage.style.display = 'none'
      cardBox.style.display = 'block';
      greetingBox.style.display = 'none';
      }
      else {
        changeOrientationMessage.style.display = 'none'
        greetingBox.style.display = 'flex';
        cardBox.style.display = 'none';
      }
      break;
  
    default:
      console.log("Orientation Not FOund");
  }
    typeMessage()
})
screen.orientation.addEventListener('change', () => {
  console.log(screen.orientation.type)
  switch (screen.orientation.type) {
    case "landscape-primary":
    case "landscape-secondary":
      if (hasAcceptedCard) {
        changeOrientationMessage.style.display = 'none'
        cardBox.style.display = 'block';
        greetingBox.style.display = 'none';
      }
      else {
        changeOrientationMessage.style.display = 'none'
        greetingBox.style.display = 'flex';
        cardBox.style.display = 'none';
      }
      break;
    case "portrait-primary":
    case "portrait-secondary":
      if(window.innerWidth < 1000) {
        changeOrientationMessage.style.display = 'block'
        changeOrientationMessage.innerHTML = 'Please rotate your device to landscape mode for best experience.'
        greetingBox.style.display = 'none';
        cardBox.style.display = 'none';
      }
      else if (hasAcceptedCard) {
      changeOrientationMessage.style.display = 'none'
      cardBox.style.display = 'block';
      greetingBox.style.display = 'none';
      }
      else {
        changeOrientationMessage.style.display = 'none'
        greetingBox.style.display = 'flex';
        cardBox.style.display = 'none';
      }
      break;
    }
})


acceptCardButton.onclick = () => {
    greetingBox.style.display = 'none';
    cardBox.style.display = 'block';
    fadeIn(cardBox)
    hasAcceptedCard = true
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
    await waitForMs(600)
    await typeSentence("No. Too many exclamation marks.")
    await waitForMs()
    await deleteLetters("No. Too many exclamation marks.")
    await waitForMs()
    await typeSentence("Looking for a capable developer? Try me!")
    await waitForMs(600)
    await deleteLetters("Looking for a capable developer? Try me!")
    await waitForMs()
    await typeSentence("No. Too eager. Play it cool.")
    await waitForMs()
    await deleteLetters("No. Too eager. Play it cool.")
    await waitForMs()
    await typeSentence("Hi, I'm Toby. Here's My Card.")
    await waitForMs(1000)
    await deleteLetters("Hi, I'm Toby. Here's My Card.")
    await waitForMs()
    await typeSentence("Nailed it.")
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