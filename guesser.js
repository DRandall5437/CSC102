/*assigns audio files to variables*/
var correct = new Audio ('325444__troym1__correct.mp3');
var Incorrect = new Audio ('648462__andreas__wrong-answer.mp3');
// this function will be called by a button click; it will start the guessing game
function guessingGame(){
    /*logs the function has started*/
    console.log("guessingGame function was called");
    // set the random number
    var a = pickNumber();
    //logs the variable a
    console.log("The number is  " + a);
    //sets variable b to the userinput
    var b = document.getElementById('userInput').value;
    //logs variable b
    console.log('b is  ' + b );
    // checks is b is equal to a
    if(b==a) {
      // if true outputs this
      outputRes("guessingGame", "Congradulations the number is " + a);
      //plays the audio for correct
      correct.play ();
     } 
    else {
      // if not alerts this
      outputRes("guessingGame", "WRONG try again"); 
      //plays audio for incorrect
      Incorrect.play ();
    }
    

        
}

// output our game results
function outputRes(htmlElement,theText){
    //use the html element to show the results
    document.getElementById(htmlElement).innerHTML = theText;
}

//this function will generate a random number between 1 and 15
function pickNumber(){
    // get a random number between 0 and 1 and multiply by 15
    var n = 15 * Math.random();
    // return the random number and make sure it is a whole number
    return Math.ceil(n)
}


