// this function will be called by a button click; it will start our game
function playCraps(){
    console.log("playCraps function was called");
    // first roll of the dice
    var die1 = rollDie();
    console.log("The first die roll is: " + die1)
    // second roll of the dice
    var die2 = rollDie();
    console.log("The second die roll is: " + die2)
    // add rolls together
    var sum = die1 + die2;
    console.log("The sum of the dice roll is " + sum)
    // show the result of the first die roll on the HTML page
    outputRes("die1Res", "Die 1 is: " + die1)
    // show the result of the second die roll on the HTML page
    outputRes("die2Res", "Die 2 is: " + die2)
    // show the result of the sum of the die rolls on the HTML page
    outputRes("sumRes", "The sum is : " + sum)
    // the logic for id we won, lost or tied
    if (sum == 7 || sum == 11){
        // you lose
        outputRes("crapsRes", "You lose!");
    }
    // if the dice equal each other, and they are even
    else if(die1 ==die2 && die2 % 2 == 0){
        // you win
        outputRes("crapsRes", "You win!");
    }
    // the catch all - the dice roll was a tie
    else{
        // you tied
        outputRes("crapsRes", "You pushed (you tied)!");
    }
}
// output our game results
function outputRes(htmlElement,theText){
    //use the html element to show the results
    document.getElementById(htmlElement).innerHTML = theText;
}

//this function will generate a random number between 1 and 6
function rollDie(){
    // get a random number between 0 and 1 and multiply by 6
    var die = 6 * Math.random();
    // return the die roll and make sure it is a whole number
    return Math.ceil(die)
}

