//Abiodun Ogundiran Oluwaseun
//cos209 Assignment
//matric number 23/0440
// information technology group c

//Assignment 1 : Write code that computes the area of a rectangle 

function calculateArea(length, width){
    return length * width;
}

let length = 5;
let width = 3;
let area = calculateArea(length, width);

console.log("The area of a rectangle is: ",area);

//Assignment 2 : Write code that computes the cube of a number

function calculateCube(number){
    return number * number * number;
}

let number = 4;
let cube = calculateCube(number);

console.log("Cube of the number:", cube);

//Arrow functions explaination
// Normal function

function normalFunction(parameter1, parameter2){
    return parameter1 + parameter2;
}

//Arrow function 
const arrowFunction = (Param1, param2) => Param1 + param2;

