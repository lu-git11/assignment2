
/*
console.log("conditionals");

//if-statment
//if(condition){y/n ?
//code to be executed if the condition is true
//}

if(3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 25;
if(student1==student2){
    console.log("The values are the same");
}

//if-else(not true) statement
//if(condition){
// code to be run if the condition is true
//}else{
// code tot be run if the conditon is falase
//}

let isTrue = false;

if(isTrue==true){
    console.log("yes");
}else{
    console.log("no");
}

let waterTemp = 92;

if(waterTemp >=100){
    console.log("The water is boiling")
}else{
    console.log("The water is NOT boiling");
}

let age = 31;

if(age >=21){
    console.log("you are an adult");
}else{
    console.log("you are underage");
}

//else-if statement

age = prompt("enter your age");

if(age<13){
    console.log("you are a child");
}else if(age<21){
    console.log("you are a teenager");
}else if(age<64){
    console.log("you are an adult");
}else{
    console.log("you are a senior");
}

age = prompt("enter age");

if(age<12){
    console.log("ticket costs $5");
}else if(age>12){
    console.log("ticket costs $8");
}else(age>18){
    console.log("ticket costs $10");
}


function temp(){
    let temp = prompt("what temp");
    if(temp>25){
        console.log("wear a jacket");
    }else if(temp>= 15){
        console.log("wear a sweater");
    }else {
        console.log("wear a t-shirt");
}
}


function suggest(){
document.getElementById("submit").addEventListener("click", function () {
    let temp = document.getElementById("temp").value;
        let outfitSuggestion = "";
        if (temp >= 25) {
            outfitSuggestion = "wear shirt";
        } else if (temp >= 15) {
            outfitSuggestion = "wear jacket";
        } else {
            outfitSuggestion = "wear coat";
        }
        document.getElementById("outfit").innerText = outfitSuggestion;
});
}

*/

function cToF(Celsius) {
    return (Celsius*9/5) + 32;
}
function fToC(Fahrenheit) {
    return (Fahrenheit-32) * 5/9;
}

document.getElementById(`submit`).addEventListener(`click`, function() {
        var temp = document.getElementById(`temp`).value; 
        var unit = document.getElementById(`unit`).value;
        var result;

    if (unit === `C`) {
        results = cToF(temp);
    }else {
        results = fToC(temp);
    }
        document.getElementById(`results`).innerHTML = results;
    });

