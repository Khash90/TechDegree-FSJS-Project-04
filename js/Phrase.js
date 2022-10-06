/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    //creating li for place holders also including space class 
    addPhraseToDisplay(){
        const charArr = this.phrase.split("");
         charArr.forEach((character) => {
         const ul = document.querySelector("ul");
         const li = document.createElement("li");
      li.textContent = character;
      if (character === " ") {
        li.classList.add("space");
      } else {
        li.classList.add("letter");
        li.classList.add("hide");
        li.classList.add(character);
      }
      ul.appendChild(li);
    });
    }
    checkLetter(letter) {
        return this.phrase.includes(letter);
      }
      //when letter is matched it gets displayed on the screen
      showMatchedLetter(letter) {
        const matched = document.querySelectorAll(".letter");
        if (this.checkLetter(letter)) {
          for (let i = 0; i < matched.length; i++) {
            if (matched[i].classList.contains(letter)) {
              matched[i].classList.remove("hide");
              matched[i].classList.add("show");
            }
          }
        }
      }
}