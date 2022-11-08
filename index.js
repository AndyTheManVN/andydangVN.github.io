// Đếm tổng số button
var numOfButton = document.querySelectorAll(".drum").length;

// EventListener lấy innerHTML của button được click, gọi function playsoundfile
for (var i=0; i<numOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        playsoundfile(this.innerHTML);
        animationPlay(this.innerHTML);
    });  
}

// Lấy chữ gõ trên bàn phím
document.addEventListener("keypress", function(e){
    playsoundfile(e.key);
    animationPlay(e.key);
});

// Function dùng switch chọn file play audio
function playsoundfile(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();            
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();            
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();            
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();            
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();            
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();            
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();            
            break;  
    }
}

//Animation hiển thị hinh nao đang bấm hoặc click
function animationPlay(currentKey){    
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    } ,150)
}