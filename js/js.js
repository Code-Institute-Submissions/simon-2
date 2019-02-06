//vars 
var playerSequence = [];
var gameSequence = [0,1,2,3 ];
const LEVELS = 3
var id, color, level = 0;
var strict = false

//start game

$(document).ready(function() {
    $(".counter").text("");
    $(".start").click(function() {
        console.log("level " + level);
        level++;
        startSequence();
    })
})

//pad presses
  $(".colour-pads").click(function() {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[1];
    addClass(id,color)
    playerSequence.push(id);
    console.log(id+" "+color)
    if (!checkSequence()){
        showError();
        playerSequence = [];
    }
    //check sequence
    if (playerSequence.length == gameSequence.length) {
        level++;
        playerSequence = [];
        startSequence();
    }
    playerSequence();
  });
  

// functions
//start
function startSequence() {
    console.log(level);
    $(".counter").text(level);
    randomNumberGen();
    var i = 0;
    var gameInterval = setInterval(function() {
        id = gameSequence[i];
        color = $("#" + id).attr("class");
        color = color.split(" ")[1];
        console.log(id + " " + color);
        addClass(id, color);
        i++;
        if (i == gameSequence.length) {
            i = 0;
            clearInterval(gameInterval);
        }
    }, 1000);
}

//random number generator 
function randomNumberGen() {
    var random = Math.floor(Math.random() * 4);
    gameSequence.push(random);
}

//add class colors

function addClass(id, color) {
    $("#" + id).addClass(color + "-on");
    setTimeout(function() {
        $("#" + id).removeClass(color + "-on");
    }, 600);
}



//player
function userSequence(){
    playerSequence.push(id);
    console.log(id+ " " + color);
    addClass(id, color);
}


  
  // see if user correct
  
  function checkSequence(){
      for(var i = 0; i < playerSequence.length; i++){
          if(playerSequence[i] != gameSequence[i]){
              return false;
          }
      }
      return true
      if(strict){
          startSequence();
      } else {
          gameSequence = true;
          playerSequence = [];
          gameInterval=setInterval(gameSequence, 700);
      }
      
  }
  
  //error
  
  function showError(){
      console.log("error");
      var counter = 0;
      $(".counter").text("!!");
      var error = setInterval(function(){
          counter++;
          if (counter = 3){
              clearInterval(error);
              playerSequence = [];
              counter = 0;
          }
      }, 1000);
  }