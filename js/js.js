//vars 
var playerSequence = [];
var gameSequence = [];
const LEVELS = 20;
var id, color, level = 0;
var strictMode = false;
var error = false;

//start game

$(document).ready(function() {
    $(".counter").text("");
    $(".start").click(function() {
        gameSequence = [];
        error = false;
        console.log("level " + level);
        level = 0;
        level++;
        startSequence();
    });
    //strict mode button
    $(".strict-button").click(function() {
        //toggle true or false.
        strictMode = !strictMode;
        level = 0;
        level++;
        //light
        addClassStrict();
        console.log(strictMode);
        gameSequence = [];
        playerSequence = [];

    });
});


//pad presses
$(".colour-pads").click(function() {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[1];
    addClass(id, color);
    playerSequence.push(id);
    console.log(id + " " + color);
    //check sequence
    if (!checkSequence()) {
        if (strictMode) {
            console.log("strictMode");
            gameSequence = [];
            level = 0;
            level++;
            playerSequence = [];
            startSequence();

        }
        showError();
        error = true;
        playerSequence = [];
        startSequence();
    }
    if (playerSequence.length == gameSequence.length && playerSequence.length < LEVELS) {
        level++;
        error = false;
        playerSequence = [];
        startSequence();
    }
    //winner  
    if (playerSequence.length == LEVELS) {
        $(".counter").text("Win");
    }

});


// functions
//start
function startSequence() {
    console.log(level);
    $(".counter").text(level);
    if (!error) {
        randomNumberGen();
    }
    if (error && strictMode) {
        randomNumberGen();
    }
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

function addClassStrict() {
    $(".strict-light").toggleClass("strict-light-on");
}



//player
//function playerSequence() {
//playerSequence.push(id);
// console.log(id + " " + color);
// addClass(id, color);
//}



// see if user correct

function checkSequence() {
    for (var i = 0; i < playerSequence.length; i++) {
        if (playerSequence[i] != gameSequence[i]) {
            return false;
        }
    }
    return true;

}

//error

function showError() {
    console.log("error");
    var counter = 0;
    var error = setInterval(function() {
        $(".counter").text("!!");
        counter++;
        if (counter == 3) {
            $(".counter").text(level);
            clearInterval(error);
            playerSequence = [];
            counter = 0;
        }
    }, 400);
}
