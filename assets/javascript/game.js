
  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var wins = 0;
  var losses = 0;
  var guesses = [];
  var chances = 0; //don't know how to get this to work


  document.onkeyup = function(event) {
    var player = event.key;
      if
      (!letters.includes(player)){
        alert("pick letters only");
        return;
      };

    if (chances = 0){
      alert("Yooour score is: ");
      return;
    }


    var computer = letters[Math.floor(Math.random()*letters.length)];

    if(player ===computer){
      wins++;
      guesses+=player;
    }
    if(player !== computer){
      losses+=1;
      guesses+=player;
      chances;
    }

    var html =
      "<p> You chose: " + player + "</p>"
      +
      "<p> I chose: " + computer + "</p>"
      +
      "<p> Guesses:" + guesses + "</p>"+
      "<p> Plays left:"+ --chances +"</p>" +
      "<p> Wins: " + wins + "</p>"
      +
      "<p> Losses: " + losses + "</p>"

      ;

    document.querySelector("#game").innerHTML = html;
  };
