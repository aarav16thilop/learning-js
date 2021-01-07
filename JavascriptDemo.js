var name = prompt("What is your name?");
var ta = "Try again";
if(isNaN(name) == false){
   alert(ta)

}else if (name == null){
   alert(ta);

}else {alert("Hey "+ name +"! Click on the empty box multiple times!")

};



   var changeColor = document.getElementById("color_changer");
var colors = ["red", "blue", "green", "yellow"];
var counter = 0;

changeColor.onclick = function colorChanger(){
     if(counter > 0){
        counter = 0;
     };

     changeColor.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
        counter++;

};


