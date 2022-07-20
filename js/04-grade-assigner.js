function gradeAssign(findGrade) {
    if (findGrade < 1 || findGrade > 100) {
        findGrade = prompt("Be sure to enter a number between 1 and 100!");
        gradeAssign(findGrade);
    } else if (findGrade < 60) {
        console.log("You received a F");
    } else if (findGrade >= 60 && findGrade <= 69) {
        console.log("You received a D");
    } else if (findGrade >= 70 && findGrade <= 79) {
        console.log("You received a C");
    } else if (findGrade >= 80 && findGrade <= 89) {
        console.log("You received a B");
    } else if (findGrade >= 90 && findGrade <= 100) {
        console.log("You received an A");
    }
}

let numInput = prompt("Please enter a number between 1 and 100.")

gradeAssign(+numInput)