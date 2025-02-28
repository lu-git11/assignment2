console.log("functions.js file");

/* function
1. declare function
2. call the fucntion*/
/*
function sayHello(){
    console.log("Hello Cohort 56");
}

sayHello();

// with parameter
function greet(name){
    console.log(`Hello ${name}, welcome!`);

}

greet('Jeffrey');
greet();

// with 2 parameter
function greet2(name1,name2){
    console.log(`Hello ${name1} and ${name2}, welcome to the system.`);
}

greet2(`Eric`, `jeff`);

//double number

function doubleNumber(number){
    console.log(number*2);
}
doubleNumber(2);

function doubleNumber(number){
    let total = number *2;
    console.log(total);
    let tax = total*.1;
    console.log("taxes = " + tax);
}
doubleNumber(10);

// with prompt
function welcome(){
    let name2 = prompt("Enter your Name:");
    let age2 = prompt("Enter your Age")
    console.log(`Welcome ${name2} - ${age2}`);
}

welcome();

//defualt parameters
function add(num1=0,num2=0){
    console.log(`The totel is ${num1} + ${num2} = ${num1+num2}`);
    document.write(`<p>The totel is ${num1} + ${num2} = ${num1+num2}</p>`);
}

add();
add(10,20);

//challenge
function combineNames(name1="Unknown",name2="Unknown"){
    console.log(`${name1} + ${name2}`);
    document.write(`Name: ${name1} ${name2}`);
}
combineNames("alice","johnson");
combineNames('alice');
combineNames();


//challenge 3

function convertToSeconds(number){
    let min = prompt("Enter the mintues");
    let seconds = min*60;
    console.log(`${number} minutes equals ${number*60} seconds`);
    document.getElementById("results").innerHTML+=`<p>${seconds}s </p>`
}

convertToSeconds(2);


*/
function temperature(){
    let celsius = prompt("Enter Temperature");
    let fahrenheit = (celsius*9/5) + 32;
    document.getElementById("results").innerHTML=`<p>${fahrenheit}° Fahrenheit</p>`;
}


//c-f