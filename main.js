//computer pick the random number
let computerNumber = Math.floor(Math.random() * 10) + 1;
console.log("random number", computerNumber);

let guesses = 3;
document.getElementById("guessRemaining").innerHTML = guesses;
// user type number and click button
function guess() {
  if (guesses > 0) {
    let userNumber = document.getElementById("userInput").value;
    console.log("you guessed", userNumber);

    if (computerNumber < userNumber) {
      result = "your number is too big";
    } else if (computerNumber > userNumber) {
      result = "your number is too small";
    } else if (computerNumber == userNumber) {
      result = "Correct!";
      document.getElementById("resultArea").innerHTML = result;
      timeOut()
      return;
    }
    guesses = guesses - 1;
    document.getElementById("guessRemaining").innerHTML = guesses;
    // guess -= 1;
    // guess--
    if (guesses == 0) document.getElementById("resultArea").innerHTML = "Game Over";
    else {
      document.getElementById("resultArea").innerHTML = result;
    }

    let history = [];
    history.push(userNumber);
    console.log(history);
    document.getElementById("historyGuess").innerHTML += " " + history;
    
    }

}
function reset() {
  guesses = 3;
  document.getElementById("userInput").value = "";
  document.getElementById("historyGuess").innerHTML = "";
  document.getElementById("guessRemaining").innerHTML = guesses;
  document.getElementById("resultArea").innerHTML = "Start game again!";
  computerNumber = Math.floor(Math.random() * 10) + 1;
  console.log("random number", computerNumber);

}
let time = 10; // time start from 0
let myTime; // timer will be assign to this variable
document.getElementById("timecount").innerHTML = "10";
function timecounting() {
  myTime = setInterval(() => {
    if (time === 1) {
      timeOut();
    }
    time -= 1;
    document.getElementById("timecount").innerHTML = time;
    
  }, 1000); // every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting()
function timeOut() {
  clearInterval(myTime);
}

