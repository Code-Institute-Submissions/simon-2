//vars 
var playerSequence = [];
var gameSequence = [];
const LEVELS = 20;
var id, color, level = 0;
var strictMode = false;
var error = false;

var gameSound = [
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3", // yellow
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", // green
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", // red
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" // purple
];


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
    makeActive(id, color);
    playerSequence.push(id);
    console.log(id + " " + color);
    //check sequence
    if (!checkSequence(playerSequence, gameSequence)) {
        if (strictMode) {
            console.log("strictMode");
            gameSequence = [];
            level = 1;
            playerSequence = [];
            // startSequence();

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
    if (playerSequence.length === LEVELS) {
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
        makeActive(id, color);
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

function makeActive(id, color) {
    $("#" + id).addClass(color + "-on");
    playSound(id);
    setTimeout(function() {
        $("#" + id).removeClass(color + "-on");
    }, 600);
}

function addClassStrict() {
    $(".strict-light").toggleClass("strict-light-on");
}



// see if user correct

function checkSequence(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true;

}

//error

function showError() {
    errorTone();
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

//sound functions

function playSound(id) {
    var sound = new Audio(gameSound[id]);
    sound.play();
}

function errorTone() {
    var sound = new Audio("https://s3.amazonaws.com/adam-recvlohe-sounds/error.wav");
    sound.play();
}
