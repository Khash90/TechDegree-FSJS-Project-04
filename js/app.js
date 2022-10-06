/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//starting the game
let game;
const btnReset = document.getElementById('btn__reset') ;
btnReset.addEventListener('click', (e)=> {
    game = new Game();
    game.startGame();
});

//Event listener for clicking
const keyboard = document.getElementById("qwerty");
keyboard.addEventListener("click", (e) => {
  if (e.target.className === "key") {
    game.handleInteraction(e.target);
  }
});

  //event listener for keyboard pressing
  const button = document.getElementsByClassName('key');
  document.addEventListener('keyup', (e) => {
    
    if (overlay.style.display == 'none') {
        for (let i=0; i<button.length; i++) {
            if (button[i].textContent === e.key && button[i].disabled == false) {
                game.handleInteraction(button[i]);
            } 
        }
    } else if (overlay.style.display == 'flex') {
        onkeyup = null;
    }
});

