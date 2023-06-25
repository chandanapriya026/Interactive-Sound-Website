// -------------for buttons in the webpage---------------
var noOfdrumbuttoms = document.querySelectorAll(".drum").length

for(var i=0; i<noOfdrumbuttoms; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttoninnerHTML = this.innerHTML;
    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);
});
}


// -------------for keyword inputs-----------------------
document.addEventListener("keypress",function(event){
    makeSound(event.key);       // event.key is a key property of button clicked from keyboard
    buttonAnimation(event.key);
});


// ------------function to play sound--------------------
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(key);
    }
}

// ------------for adding animation to the buttons------------
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey)   //to store the class e.g. .w, .a, .......
    activeButton.classList.add("pressed"); //for css

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}


function gotClicked(){      //for testing
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
}
