
/*function favoriteColor(){
    console.log("Aqua/Cyan")
    
};*/



/* function calculator(var1,var2){
    console.log(var1 + var2);
    console.log(var1 - var2);
    console.log(var1 * var2);
    console.log(var1 / var2);
}

calculator(616,11);*/



 
    






/*for (let i = 0; i < 10; i++){
    console.log ("This is a loop" + i)
};*/

//data (variables, numbers, strings...) - nouns
//actions (functions, methods) - verbs



/*function isEvenNumber(number){    

    if (isNaN(number)){
        throw console.error("The input is not a number");

    }


    return number % 2 === 0;
    

};

console.log(isEvenNumber("hi"));*/



/*function isPrimeNumber(number){
    
    for(i=2; i<number; i++){

        if(number % i === 0) {

            return false;
        
        };
    }
        
    return true;

}

console.log (isPrimeNumber(7))*/

// The function, "isNaN" tells you whether something is a number. "!isNaN" reverses it.
/*
        
    var enterName = prompt("What's your name?");
        
    alert ("Hey, "+enterName+" nice to meet you!");*/
        
    

//The "Prompt" function prompts the user to type something(ususally a string) for output

 /*var enterAge = prompt("What's your age?(only numbers)")

 if(isNaN(enterAge)){

 

    throw console.error("I said to only enter a number, try again");
 };

 if(enterAge >= 9 && enterAge <= 18 ){

    document.write("You are invited to the party!")
}
else{document.write ("Sorry, you can't come") 

}; */


/*var loading = 0;
while(loading < 10){

    console.log("This website is still loading");
    loading++
};

*/
/*
var num = prompt("Enter a number");

for(i=0; i <= num; i++){

    document.write(i+"<br>");

};

if(typeof(num) === 'boolean')

{
    document.write("That's a boolean, try again");

};

if(typeof(num) === 'string' )

{
    document.write("That's a string, try again");

};*/

/*var foo = 10; //Global variable

function getAverage(a,b){

    var average = (a + b) / 2; //Local variable

    console.log("The average is " + average);
};

getAverage(12,9);*/

/*

var a = false;

console.log(typeof(a));
*/

/*
var a = "Abc";

if(a.length <= 6)
{
    console.log("This is a short string");
} else {console.log("This is a long string")

};
*/

/*
var str = "Hello world";

var str2 = str.slice(2,9);

console.log(str2);


var meat = "chicken, ham, beef, pork, salmon";

var meatArray = meat.split(",");

console.log(meatArray);
*/

/*
myArray = [];

myArray[0] = 10;

myArray[1] = 25;

myArray[2] = true;

myArray[3] = "Hello world";

console.log(myArray[2]);
*/

/*
myString = new String();

myString = "Hello World";

console.log(myString.length);

console.log(myString.toLowerCase());
*/

//var myCar = new Object(myCar.maxSpeed = 120); to create an object OR...

var myCar = {
    
    maxSpeed:120,
    driver:"Aarav",
    distanceToTravel:function isDriving(speed,time){
    console.log(speed * time + " miles");
    },
    logDriver: function isDriver(){
        ("The driver of this car is " + this.driver )
    }

};

var Car = function(maxSpeed,driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = drive;
};
this.logDriver = function(){

    "The driver is " + this.driver
};

var myCar1 = new Car = (40,"test1");
var myCar2 = new Car = (70,"test2");
var myCar3 = new Car = (120,"test3");

myCar.drive = (30,5);
myCar2.logmaxSpeed;
//-----------------------------------------------------------------------------------------
var birthday = new Date (2010,4,16);
var birthday2 = new Date (2010,4,16);

//console.log(birthday.getFullYear());
//console.log(birthday.getMonth());
//console.log(birthday.getDay());
//console.log(birthday.getDate());
//console.log(birthday.getHours());

if(birthday.getTime() == birthday2.getTime()){

    console.log("Birthdays are the same");

}else {
    
    console.log("Birthdays are different");

};





      




