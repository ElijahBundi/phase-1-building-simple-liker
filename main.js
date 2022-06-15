// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// first make a Nodelist of all likes
// add a button for each of the likes
// the button will turn to FULL_HEART when in empty
// and back to EMPTY_HEART when in full.

// remove the error message by introducing 'hidden.'



const modal = document.querySelector('#modal')
modal.classList = 'hidden'
// console.log(modal)

const likeys = document.querySelectorAll('.like-glyph')
// console.log(likeys)
for (let like of likeys) {
  like.addEventListener('click', simpleLiker)
}

function simpleLiker() {
  mimicServerCall()
  .then(() => {
    if (like.textContent === EMPTY_HEART) {
      like.textContent = FULL_HEART
      like.classList.add('activated-heart')
    } 
    else if (like.textContent === FULL_HEART) {
      like.textContent = EMPTY_HEART
      like.classList.remove('activated-heart')
    }
  })
  .catch(() => {
    modal.classList.remove('hidden')
    modal.textContent = 'Error!'
    setTimeout(() => {
      modal.classList.add('hidden')
    }, 3000)
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
