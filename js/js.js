//vars 
var playerSequence = [];
var gameSequence = [0,1,2,3 ];
var id, color, level = 0;


//start game

$(document).ready(function() {
    $(".counter").text("");
    $(".start").click(function() {
        console.log("level " + level);
        $(".counter").text(level);
        level++;
        startSequence();
    })
})

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
    $("#" + id).addClass(color + "-active");
    setTimeout(function() {
        $("#" + id).removeClass(color + "-active");
    }, 600);
}



//user 
function userSequence(){
    playerSequence.push(id);
    console.log(id+ " " + color);
    addClass(id, color);
}

//pad 

  $(".colour-pads").click(function() {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[1];
    playerSequence();
  });