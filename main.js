// 1

const thingsInHome = ["mint", "basil", "cactus", "table", "wooden spoon", "bread"];
const thingsInGarden = ["apple", "trees", "stairs", "plum", "wooden bench"];

const madeOutOfWood = [thingsInHome[3], thingsInHome[4], thingsInGarden[1], thingsInGarden[4]];
const edibles = [thingsInHome[0], thingsInHome[1], thingsInHome[5], thingsInGarden[0], thingsInGarden[3]];

console.log(
    `made out of wood: ${JSON.stringify(madeOutOfWood)}\n edibles: ${JSON.stringify(edibles)}`
);

// 2

function getSmallestNumber(numbersArray) {
    let smallestNumber = numbersArray[0];
    for (let i = 1; i < numbersArray.length; i++) {
        let currentNumber = numbersArray[i];
        if (currentNumber < smallestNumber) {
            return smallestNumber = currentNumber;
        }
    }
    return smallestNumber;
}

function getSmallestNumber(numbersArray) {
    const sortedArray = numbersArray.sort(
        function (firstNumber, secondNumber) {
            return firstNumber - secondNumber;
        }
    );
    return sortedArray[0];
}

console.log(getSmallestNumber([2, -5, 10, 1, 4])); // -5
console.log(getSmallestNumber([200, 25, 4, 123, 87])); // 4

// 3

function getSquaredNumbers(numbersArray) {
    let squaredNumbers = [];
    for (let i = 0; i < numbersArray.length; i++) {
        let currentNumber = numbersArray[i];
        squaredNumbers.push(currentNumber * currentNumber);
    }
    return squaredNumbers;
}

getSquaredNumbers([1, 2, 3, 4, 5]);
getSquaredNumbers([6, 7, 8, 9, 10]);

const numbers = [1, 2, 3];
const squaredNumbers = getSquaredNumbers(numbers);
console.log(squaredNumbers);
console.log(numbers);
console.log(numbers !== squaredNumbers);

// 4

function getReversedString(string) {
    const stringSplitByCharacters = string.split('');
    return stringSplitByCharacters.reverse().join('');
}

console.log(getReversedString('Hello!'));
console.log(getReversedString('Arrays'));

// 5

function isPalindrome(text) {
    const textWithoutSpecialCharacters = text.replace(/[^a-z]/gi, '').toLowerCase();
    const reversedText = textWithoutSpecialCharacters.split('').reverse().join('');
    return textWithoutSpecialCharacters === reversedText;
}

console.log(isPalindrome('Kayak'));
console.log(isPalindrome('Hello!'));
console.log(isPalindrome('Was it a cat I saw'));

// 6 - TO FINISH LATER _____________________________________________________________________

function countLetters(string) {
    const letterCount = {};
    const splitAndCleanedString = string.replace(/[^a-zA-Z]/g, '').toLowerCase().split('');

    for (let i = 0; i < splitAndCleanedString.length; i++) {
        const letter = splitAndCleanedString[i];
        if (letterCount[letter] > 0) {
            letterCount[letter] = letterCount[letter] + 1;
        } else {
            letterCount[letter] = 1;
        }
    }
    return letterCount;
}

const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

console.log(lettersObject);

// 7 - ACTION NEEDED - functions without AGE in exercise description! __________________

const peopleArray = [
    {
        name: 'Adam',
        age: 20
    },
    {
        name: 'Amanda',
        age: 5
    },
    {
        name: 'John',
        age: 75
    },
    {
        name: 'Dave',
        age: 15
    }
]

function getYoungestPersonAge(people) {
   let youngestPersonAge = people[0].age;
   for (let i = 1; i < people.length; i++) {
       if (people[i].age < youngestPersonAge) {
           youngestPersonAge = people[i].age;
       }
   }
   return youngestPersonAge;
}

function getOldestPersonAge(people) {
    let oldestPersonAge = people[0].age;
    for (let i = 1; i < people.length; i++) {
        if (people[i].age > oldestPersonAge) {
            oldestPersonAge = people[i].age;
        }
    }
    return oldestPersonAge;
}

function getAgeDifference(people) {
    const oldestPersonAge = getOldestPersonAge(peopleArray);
    const youngestPersonAge = getYoungestPersonAge(peopleArray);

    return oldestPersonAge - youngestPersonAge;
}

console.log(getAgeDifference(peopleArray));

// 8 - codewars

function getPositiveNumbersSum(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        const currentNumber = numbersArray[i];
        if (currentNumber > 0) {
            sum = sum + currentNumber;
        }
    }
    return sum;
}

console.log(getPositiveNumbersSum([1,-2,3,4,5]));

// 9

function getSumOfSquaredNumbers(numbersArray){
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        const currentNumber = numbersArray[i];
        sum = sum + (currentNumber * currentNumber);
    }
    return sum;
}

console.log(getSumOfSquaredNumbers([1, 2, 3]));

// 10

function getNameInitials(name){
    const nameConvertedToArray = name.toUpperCase().split(' ');
    const firstName = nameConvertedToArray[0][0];
    const lastName = nameConvertedToArray[1][0];

    return `${firstName}.${lastName}`;
}

console.log(getNameInitials('Sam Harris'));
console.log(getNameInitials('Anita Włodarczyk'));

// 11

function countSheepIfPresent(sheepArray) {
    let sumOfSheepPresent = 0;
    for (let i = 0; i < sheepArray.length; i++) {
        const isCurrentSheepPresent = sheepArray[i];
        if (isCurrentSheepPresent) {
            sumOfSheepPresent = sumOfSheepPresent + 1;
        }
    }
    return sumOfSheepPresent;
}

console.log(countSheepIfPresent([undefined,null,false,true,true,false,null,undefined]));

// 12 - HOW TO MAKE FOR INSTEAD OF MAP?????????????

function getDigitizedAndReversedNumber(number) {
    const numberSplit = number.toString().split('');
    const reversedArray = numberSplit.reverse();

    for (let i = 0; i < reversedArray.length; i++) {

    }
}

console.log(getDigitizedAndReversedNumber(35231));
console.log(getDigitizedAndReversedNumber(0));

// 13

function findNeedleIndex(haystackArray) {
    return 'found the needle at position ' + haystackArray.indexOf('needle');
}

console.log(findNeedleIndex(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']));

// 14 ---- NEXT ONE TO FINISH ______________________________________________________________________

function getDoubledNumbers(numberArray) {
    function doubledNumbers(number) {
        return number * 2;
    }
    return numberArray.map(doubledNumbers);
}

console.log(getDoubledNumbers([1, 2, 3]));

// 15

function getInvertedNumbersArray(numbersArray) {
    return numbersArray.map(function(number) {
        return number * -1;
    });
}

console.log(getInvertedNumbersArray([1, -2, 3, -4, 5]));

// 16

function calculateNumbersInArraySum(numbersArray) {
    "use strict";
    return numbersArray.reduce(function calculateReducedArrayNumbers(currentSum, number) {
        return currentSum + number;
    }, 0);
}

console.log(calculateNumbersInArraySum([1, 5.2, 4, 0, -1]));
console.log(calculateNumbersInArraySum([]));

// 17

function arrayPlusArray(numbersArrayOne, numbersArrayTwo) {
    function getArraySum(array) {
        let singleArraySum = 0;

        for (let i = 0; i < array.length; i++) {
            singleArraySum = singleArraySum + array[i];
        }
        return singleArraySum;
    }

    const numbersArrayOneSum = getArraySum(numbersArrayOne);
    const numbersArrayTwoSum = getArraySum(numbersArrayTwo);

    return numbersArrayOneSum + numbersArrayTwoSum;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// 18

function countSheep(number) {
    let countSheepText = ''

    for (i = 1; i <= number; i++) {
        countSheepText = countSheepText +`${i} sheep...`;
    }
    return countSheepText;
}

console.log(countSheep(0));
console.log(countSheep(2));

// 19

function calculateAverage(marks) {
    return Math.floor((marks.reduce(function sumOfMarks(currentSum, mark) {
        return currentSum + mark;
    }) / marks.length));
}

console.log(calculateAverage([1, 2, 3, 4, 5]));
console.log(calculateAverage([2, 2, 2, 2]));

// 20

function monkeyCount(numberOfMonkeys) {
    let monkeysArray = [];

    for (let i = 1; i <= numberOfMonkeys; i++) {
        monkeysArray.push(i);
    }
    return monkeysArray;
}

console.log(monkeyCount(5));
console.log(monkeyCount(10));