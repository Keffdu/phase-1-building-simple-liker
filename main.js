// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


  const errorDiv = document.querySelector('#modal')
  const like_glyphs = document.getElementsByClassName('like-glyph')

  function changeOfHeart(e) {
    let promise = mimicServerCall()
    promise.then(resp => {
      let heart = e.target
      if(heart.textContent === EMPTY_HEART)
      {heart.textContent = FULL_HEART
      heart.classList.add('activated-heart')}
      else {
        heart.textContent = EMPTY_HEART
        heart.classList.remove("activated-heart")
      }
    }).catch(error => {
      errorDiv.classList.remove('hidden')
      errorDiv.textContent = error
      setTimeout(() => {errorDiv.classList.add('hidden')}, 3000)
    })
  }
  for(let i = 0; i < like_glyphs.length; i++) {
    like_glyphs[i].addEventListener('click', changeOfHeart)
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
document.addEventListener('DOMContentLoaded', () => {
  errorDiv.className = "hidden"})

