//create an array for the computer to choose.
  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//declare variables that will be updated at user plays
  var wins = 0;
  var losses = 0;
  var guesses = [];
  var chances = 2; //don't know how to get this to work

//recognize when the player presses a key
  document.onkeyup = function(event) {
    var player = event.key;
      if //make sure they only press letters because that's what's in the array
      (!letters.includes(player)){
        alert("pick letters only");
        return;
      };

      if (chances = 0){ //was hoping to limit number of plays
      alert("Your score is: "); // this is not working. not sure where it goes.
      ;
    };

//make the computer choices from array random
    var computer = letters[Math.floor(Math.random()*letters.length)];
//increase the wins score if player and computer have same letter. record letter the player typed.
    if(player ===computer){
      wins++;
      guesses+=player;
    }
//increase the losses if player guess does not match computer guess.  record the letter the player typed.
    if(player !== computer){
      losses+=1;
      guesses+=player;

    }
//update the variables in the html to show the player results
    var html =
      "<p> You chose: " + player + "</p>"
      +
      "<p> I chose: " + computer + "</p>"
      +
      "<p> Guesses:" + guesses + "</p>"+
      "<p> Plays left:" + -chances +"</p>" + //doesn't work :(
      "<p> Wins: " + wins + "</p>"
      +
      "<p> Losses: " + losses + "</p>"

      ;
//display the updated results.
    document.querySelector("#game").innerHTML = html;
  };
