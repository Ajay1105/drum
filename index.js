for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
       makeSound(this.innerHTML);
       press(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    press(event.key);
});

function makeSound(value){
    if (value === "w") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    if (value === "a") {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    if (value === "s") {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    if (value === "d") {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    if (value === "j") {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    if (value === "k") {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    if (value === "l") {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
}

function press(event){
    document.querySelector("."+ event).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+ event).classList.remove("pressed");
    },100)
}