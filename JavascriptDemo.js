/*
const today = new Date();

const birthdate = new Date(today.getFullYear(),str1,str2);

const timeLeft = birthdate.getTime()-today.getTime();

const oneDay = 1000*3600*24;

const daysLeft = Math.ceil(timeLeft/oneDay) + " days";


};*/

function fn(){
    
    var str1 = document.getElementById("text1").value;

    var str2 = document.getElementById("text2").value;
     
    const today = new Date();

    const birthdate = new Date(today.getFullYear(),str1,str2);

    const timeLeft = birthdate.getTime()-today.getTime();

    const oneDay = 1000*3600*24;

    const daysLeft = Math.ceil(timeLeft/oneDay) + " days";

    alert("Your birthday is in " + daysLeft)
};
    




