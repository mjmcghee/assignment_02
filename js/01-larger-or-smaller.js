function compareNums(numOne,numTwo) {
    if (numOne == numTwo) {
        document.write("<p>The numbers are equal.</p>");
    } else if (numOne > numTwo) {
        document.write(numOne);
    } else {
        document.write(numTwo);
    }
}

let numInput1 = prompt("Enter a number.");
let numInput2 = prompt("Enter another number.");

compareNums(+numInput1,+numInput2);