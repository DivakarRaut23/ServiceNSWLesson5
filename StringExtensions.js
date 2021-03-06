



// let myNums = "12,23,56,48,45,26,96,78,32,64".split(",");
// console.log(myNums);

// String Extension Methods
//1. Write function that searches for a string inside the sentence above. The function should return true if the string is found or false otherwise

let sentence = "The quick brown fox jumps over the lazy dog.";

function searchInSentence(searchTerm){
    return sentence.includes(searchTerm);
}

// console.log(searchInSentence("fox"));
// console.log(searchInSentence("borat"));



// Write function that searches for a string inside the sentence above. The function should return the index of the first occurrence of the string if the string is found or -1 otherwise.

function findIndexInSentence(searchTerm){
    return sentence.includes(searchTerm);

}
// console.log(findIndexInSentence("fox"));
// console.log(findIndexInSentence("zlatan"));

// Write a function that takes a string and returns the first three characters of that string.

function firstThreeChars(myString) {
    return myString.substring(0, 3);
}
// console.log(firstThreeChars(sentence));
// console.log(firstThreeChars("Manchester United"));


// Write a function that takes a string and returns the last two characters of that string.

function lastTwoChars(myString) {
    return myString.substring(myString.length - 2);
}
// console.log(lastTwoChars(sentence)); 
// console.log(lastTwoChars("ZLatan")); 

//Write a function that converts a string into an array of words where a word is any string separated by a space.

function stringToArray(myString) {
    return myString.split(" ");
}
// console.log(stringToArray(sentence));

//Write a function that counts the number of times a string appears inside the sentence string above.

function countOccurrences(searchTerm) {
    let count = 0;
    let startIndex = 0;
    while (true) {
        let index = sentence.toLowerCase().indexOf(searchTerm, startIndex);
        if (index == -1) {
            break;
        }
        count++;
        startIndex = index + 1;
    }
    return count;
}
console.log(countOccurrences("the"));
