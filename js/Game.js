/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0;
        //the phrases for player to guess
        this.phrases = [
           new Phrase("never give up"),
           new Phrase('hard work works'),
           new Phrase('ez way is the hard way'),
           new Phrase('failure equals learning'),
           new Phrase('batman is the best')
        ];
        this.activePhrase = null;
    }
    //setting randomphrase every time you want to play
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
      }
      //hiding the overlay at the start
      startGame(){
        document.getElementById("overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
      }
      //method for Win , it returns booleans true or false
      checkForWin(){
        const hideChars = document.getElementsByClassName('hide');
        if (hideChars.length === 0){
            return true;
        } else {
            return false;
        }
      }
      //if player make wrong guess remove one heart
      removeLife(){
         const hearts = document.querySelectorAll('img');
         if (this.missed < 4) {
            hearts[this.missed].src = 'images/lostHeart.png';
            this.missed++;
         } else {
            this.gameOver();
         }
      }
      // setting the overlay to show when player win or lose
      gameOver(gameWon){
         const overLay = document.getElementById('overlay');
         if (gameWon) {
            document.getElementById('game-over-message').innerHTML = 'You Are Smart , Keep It Going !';
            overLay.className = 'win';
            overLay.style.display = '';
         } else {
            document.getElementById('game-over-message').innerHTML = 'Out Of Guesses , Try Again?';
            overLay.className = 'lose';
            overLay.style.display='';
         }
         this.resetGame();
      }
      /*Checks to see if the onscreen keyboard button clicked by the player matches a letter in the phrase, 
     and then directs the game based on a correct or incorrect guess*/
      handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent)) {
          button.classList.add("chosen");
          this.activePhrase.showMatchedLetter(button.textContent);
          this.checkForWin();
          if (this.checkForWin()) {
            this.gameOver(true);
          }
        } else {
          button.classList.add("wrong");
          this.removeLife();
        }
      }
      //reseting buttons , phrases and hearts.
      resetGame() {
        const phrase = document.getElementById("phrase");
        const keys = document.querySelectorAll(".key");
        const Hearts = document.querySelectorAll("img");
        const btnReset = document.getElementById("btn__reset");
    
        btnReset.addEventListener("click", (e) => {
          this.missed = 0;
          phrase.innerHTML = "<ul></ul>";
          keys.forEach((key) => {
            key.className = 'key';
            key.disabled = false;
          });
          Hearts.forEach((life) => {
            life.src = "images/liveHeart.png";
          });
          game.startGame();
        });
      }
}
