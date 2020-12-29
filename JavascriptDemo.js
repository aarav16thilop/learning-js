var name = prompt("What is your name?");

if(isNaN(name) == false){
   alert("Try again")

}else{alert("Hey "+ name +" Click on the empty box multiple times!")

};


var changeColor = document.getElementById("color_changer");
var colors = ["red", "blue", "green", "yellow"];
var counter = 0;

changeColor.onclick = function colorChanger(){
     if(counter > 3){
        counter = 0;
     };

     changeColor.style.background = colors[counter];
        counter++

}

setInterval(colorChanger, 3000);

