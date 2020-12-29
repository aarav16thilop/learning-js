var changeColor = document.getElementById("color_changer");
var colors = ["red", "blue", "green", "yellow"];
var counter = 0;

function colorChanger(){
     if(counter > 3){
        counter = 0;
     };

     changeColor.style.background = colors[counter];
        counter++

}

setInterval(colorChanger, 3000);