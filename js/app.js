//vars 
var playerSequence = [];
var gameSequence = [];
const LEVELS = 20;
var id, color, level = 0;
var strictMode = false;
var error = false;
var gameOn = false;

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
        gameOn = true;
        console.log("level " + level);
        level = 0;
        level++;
        startSequence();
    });
    //strict mode button
    $(".strict-button").click(function() {
        //toggle strict mode true or false.
        strictMode = !strictMode;
        level = 0;
        level++;
        //light
        addClassStrict();
        console.log(strictMode);
        gameOn = true;
        gameSequence = [];
        playerSequence = [];
        startSequence();
    });
    //pad presses
    $(".colour-pads").click(function() {
        //stops the user from pressing the pads before the game has started
        if (gameOn) {
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
                }
                showError();
                error = true;
                playerSequence = [];
                startSequence();
            }
            if (playerSequence.length === gameSequence.length && playerSequence.length < LEVELS) {
                level++;
                error = false;
                playerSequence = [];
                startSequence();
            }
            //winner  
            if (playerSequence.length === LEVELS) {
                $(".counter").text("Win");
            }
        }

    });

});




//starts the game
function startSequence() {
    console.log(level);
    gameOn = false;
    $(".counter").text(level);
    if (!error) {
        randomNumberGen(gameSequence);
    }
    if (error && strictMode) {
        randomNumberGen(gameSequence);
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
            gameOn = true;
            clearInterval(gameInterval);
        }
    }, 1000);
}

//generate a random number and push into sequence
function randomNumberGen(sequence) {
    var random = Math.floor(Math.random() * 4);
    sequence.push(random);
}

//add class colors and play sound

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



// check the users sequence against the games
function checkSequence(a, b) {
    for (let i = 0; i < a.length; i++) {
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
