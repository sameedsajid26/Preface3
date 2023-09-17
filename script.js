// #1. Create a repeating pop-up reminder each time after 10 seconds have passed.
window.addEventListener("DOMContentLoaded", tenSeconds);

// KP: JavaScript Set Interval
var reminder;

function tenSeconds(){
  reminder = setInterval(function(){alert("Another 10 seconds have passed!");}, 10000);
}

function stopTenSeconds(){
  clearInterval(reminder);
}

// #2. Generate a random number between 1 and 100.
let randomNum = Math.floor(Math.random() * 100) + 1;

document.write(randomNum);
// // #3. Record the number of guesses the user has made by creating a variable.
// var guessCount = 1;

// // #4. Set up initial game settings.
// const guesses = document.querySelector(".guesses");
// const result = document.querySelector(".result");
// const comparison = document.querySelector(".comparison");
// const guessSubmit = document.querySelector(".guessSubmit");
// const guessField = document.querySelector(".guessField");
// // KP: JavaScript Audio Objects And Play
// // KP: File System
// var winningSound = new Audio("audios/win.mp3");
// var losingSound = new Audio("audios/lose.mp3");

// // #5. Create a function to check if the user's guess is correct.
// function checkGuess(){

//   //#5.1. Record user's guesses.
//   let userGuess = Number(guessField.value);
//   if (guessCount === 1){
//     guesses.textContent = "Previous guesses: ";
//   }

//   guesses.textContent += userGuess + " ";

//   // #5.2. Check if guessed number is correct.
//   if (userGuess === randomNum){
//     result.textContent = "Congratulations! You saved Joy and Bing Bong!! :D";
//     result.style.backgroundColor = "green";
//     comparison.textContent = "";
//     winningSound.play();
//     alert("The password is correct! You powered the wagon successfully, let's escape from the Memory Dump now!");
//     setGameOver();
//   } else{
//     // KP: JavaScript Switch
//     switch(guessCount){
//       case 10:
//         result.textContent = "No way out!!! We are trapped here forever!!! :(";
//         comparison.textContent = "";
//         losingSound.play();
//         alert("You guessed incorrectly too many times, the wagon is now broken! You are trapped here FOREVER!!");
//         setGameOver();
//         break;
//       default:
//         result.textContent = "Wrong password!";
//         result.style.backgroundColor = "red";
//         if(userGuess < randomNum) {
//           comparison.textContent = "Your guess was too low!";
//         } else if(userGuess > randomNum) {
//           comparison.textContent = "Your guess was too high!";
//         }
//     }
//   }

//   // #5.3. Increment number of guesses and empty guess field textbox.
//   guessCount++;
//   guessField.value = "";
// }

// // #6. Let the user submit a guess by clicking a button.
// guessSubmit.addEventListener("click", checkGuess);

// // #7. Create function to disable the guess field textbox, submit button, and the 10 seconds reminder.
// function setGameOver(){
//   guessField.disabled = true;
//   guessSubmit.disabled = true;
//   stopTenSeconds();
// }
