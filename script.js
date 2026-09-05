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

let scoreCategory = "";
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

    // Asks for studentScore until a valid number is given.
    while (studentScore < 0 || studentScore > 100){
        alert("Number is invalid. Number must be greater than or equal to 0 and less than or equal to 100");
        studentScore = prompt("Input score of student", "");
    }

    if (studentScore >= 90){
        scoreCategory = "Excellent";
    } else if ( studentScore >= 80 && studentScore <= 89){
        scoreCategory = "Very Good";
    } else if (studentScore >= 75 && studentScore <= 79) {
        scoreCategory = "Good"; 
    } else if (studentScore >= 60 && studentScore <= 74){
        scoreCategory = "Needs Improvement";
    } else {
        scoreCategory = "Failing"
    }

    currentStudentNumber = currentStudentNumber + 1;
}