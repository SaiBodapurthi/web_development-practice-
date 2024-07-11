var randomGeneratedColors = [];
var userSelectedColors = [];
var started=false;
var level=0;
var colors = ["blue", "green", "red", "yellow"];

$(document).keypress(function(){
    if(started==false){
        randomGeneratedColors=[];
        started=true;
        setTimeout(function(){
            gameStart();
        },200);
    }
});


$(".btn").click(function(){
    var clickedElement =$(this).attr("id");
    if(userSelectedColors.length<randomGeneratedColors.length){
        playSound(clickedElement);
        animate(clickedElement);
        userSelectedColors.push(clickedElement);
        checkIfTrue(userSelectedColors.length-1);
    }
    else{
        setTimeout(function(){
            started=false;
            playSound(clickedElement);
            animate(clickedElement);
            $("h1").text("Game over! Press any key to Restart");
            $("body").addClass("game-over");
            var audio=new Audio("sounds/wrong.mp3");
            audio.play();
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);
        },200);
    }
    
});

function checkIfTrue(current){
    if(userSelectedColors[current]!=randomGeneratedColors[current]){
        setTimeout(function(){
            started=false;
            $("h1").text("Game over! Press any key to Restart");
            var sound=new Audio("sounds/wrong.mp3");
            sound.play();
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },100);
        },200);
    }
    else{
        if(userSelectedColors.length==randomGeneratedColors.length){
            setTimeout(function(){
                generateRandomColor();
            },500);
        }
    }

}

function gameStart(){
    level=0;
    generateRandomColor();
}

function generateRandomColor(){
    level++;
    $("#level-title").text("Level "+level);
    userSelectedColors=[];
    var randomColor = colors[Math.floor(Math.random()*4)];
    randomGeneratedColors.push(randomColor);
    setTimeout(function(){
        playSound(randomColor);
        $("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    },500);
}

function playSound(color){
    var audio=new Audio("sounds/"+color+".mp3");
    audio.play();
}

function animate(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },200);
}

/*else{
    setTimeout(function(){
        started=false;
        playSound(clickedElement);
        animate(clickedElement);
        $("h1").text("Game over! Press any key to Restart");
        $("body").addClass("game-over");
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
    },200);
}*/