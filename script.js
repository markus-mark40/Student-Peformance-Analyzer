// initialize START
let studentNumbers = 0;
let currentStudentNumber = 1;
let studentScore = -1;

let totalScore = 0;
let averageScore = 0;

let highestScore = 0;
let lowestScore = 0;

let passingCount = 0;
let failingCount = 0;

let setCategory = "";
// Intialize END

// Asks for studentNumbers until a valid number is given.
while (studentNumbers <= 0){
    studentNumbers = prompt("Input number of students", "");

    if (studentNumbers <= 0){
        alert("Number is invalid. Number must be greater than 0");
    }
}