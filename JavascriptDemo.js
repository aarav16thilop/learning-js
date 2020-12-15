
var merryChristmas = document.getElementById("christmas");

const today = new Date();

const christmas = new Date(today.getFullYear(),11,25);

const timeLeft = christmas.getTime()-today.getTime();

const oneDay = 1000*3600*24;

const daysLeft = Math.ceil(timeLeft/oneDay) + " days";

if (today.getMonth() === 11 && today.getDate() === 25) { 
     merryChristmas.textContent = "Merry Christmas!"
     
}else{
   
    merryChristmas.textContent = "There are " + daysLeft + " until Christmas!";
};





