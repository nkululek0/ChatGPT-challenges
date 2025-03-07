import isUnique from "./src/is-unique.js";
import readline from "node:readline";

const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

readLineInterface.question("Enter a string: ", answer => {
    try {
        let result = isUnique(answer);
    
        result ? console.log("String is unique") : console.log("String is not unique");
    }
    catch (error) {
        console.log(error.stack);
    }
    finally {
        readLineInterface.close();
    }
});