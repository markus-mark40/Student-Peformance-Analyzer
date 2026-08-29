let studentNumbers = 0;
let currentStudentNumber = 0;
let studentScore = 0;

let passingCount = 0;
let failingCount = 0;

let highestScore = 0;
let lowestScore = 0;

let averageScore = 0;
let totalScore = 0;

let category = "";

studentNumbers = prompt("Total number of students?", "");
studentScore = prompt("Student score?", "");


Number(studentNumbers);


highestScore = studentScore;
lowestScore = studentScore;

while (currentStudentNumber < studentNumbers){
    currentStudentNumber += 1;
    studentScore = prompt("Student score?", "")
    
    Number(studentScore);
    console.log(typeof(studentScore));
    //Compares the score and asigns a category
    if (studentScore <= 100 && studentScore >= 90){
        category = "Excellent";
    } else if (studentScore <= 89 && studentScore >= 80) {
        category = "Very Good";
    } else if (studentScore <= 79 && studentScore >= 75){
        category = "Good";
    } else if (studentScore <= 74 && studentScore >= 60) {
        category = "Needs Improvement";
    } else if ( studentScore <= 59){
        category = "Failing";
    }
    console.log("//////////");
    console.log (category);
    

    //Assigns the highest and lowest score
    if (studentScore > highestScore){
        highestScore = studentScore;
    } else if (studentScore < lowestScore){
        lowestScore = studentScore;
    }

    //Counts the total score by adding the student score at every repititon.
    totalScore = totalScore + studentScore;
    console.log(`Total Score: ${totalScore}`)
    console.log(`Highest score: ${highestScore}`);
    console.log(`Lowest score: ${lowestScore}`);
}