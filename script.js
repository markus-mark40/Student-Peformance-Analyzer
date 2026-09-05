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

while (currentStudentNumber <= studentNumbers){
    studentScore = prompt("Input score of student", "");

    if (studentScore < 0 || studentScore > 100){
        alert("Number is invalid. Number must be greater than or equal to 0 and less than or equal to 100");
    }

    if (studentScore >= 90){
        scoreCategory = "Excellent";
    }

    currentStudentNumber = currentStudentNumber + 1;
}