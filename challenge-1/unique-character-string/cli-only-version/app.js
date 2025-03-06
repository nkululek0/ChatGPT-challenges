/**
 * Determines whether a string is unique by checking whether or not the string has repeating characters.
 * @param { string } input The string that is going to processed and checked if it is unique
 * @returns bool
 */
const isUnique = (input) => {
    if (input && typeof input == "string" && input != " ") {
        let inputArray = input.split("");

        if (inputArray.length > 1) {
            let result = true;
            let inputCharacterMap = new Object({});

            for (let character of inputArray) {
                if (inputCharacterMap.hasOwnProperty(character)) {
                    result = false;
                    break;
                }
                else {
                    inputCharacterMap[character] = 1;
                }
            }

            return result;
        }
        else {
            // One character automatically means the string is unique
            return true;
        }
    }
    else {
        throw new Error("Invalid input, please make sure that you enter a valid string");
    }
};

try {
    // console.log(isUnique(""));
    // console.log(isUnique(1));
    // console.log(isUnique(" "));
    // console.log(isUnique("a"));
    console.log(isUnique("aa"));
} catch (error) {
    console.log(error);
}