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

    for (i = 1; i < numbersArray.length; i++) {
        if (numbersArray[i] < smallestNumber) {
            return smallestNumber = numbersArray[i];
        }
    }
    return smallestNumber;
}

function getSmallestNumber(numbersArray) {
    return numbersArray.sort(
        function (firstNumber, secondNumber) {
            return firstNumber - secondNumber;
        }
    );
}

console.log(getSmallestNumber([2, -5, 10, 1, 4])); // -5
console.log(getSmallestNumber([200, 25, 4, 123, 87])); // 4

// 3

function getSquaredNumbers(numbersArray) {
    let squaredNumbers = [];

    for (let i = 0; i < numbersArray.length; i++) {
        squaredNumbers.push(numbersArray[i] * numbersArray[i]);
    }
    return squaredNumbers;
}

getSquaredNumbers([1, 2, 3, 4, 5]); // [1, 4, 9, 16, 25]
getSquaredNumbers([6, 7, 8, 9, 10]); // [36, 49, 64, 81, 100]

const numbers = [1, 2, 3];
const squaredNumbers = getSquaredNumbers(numbers);
console.log(squaredNumbers); // [1, 4, 9]
console.log(numbers); // [1, 2, 3]
console.log(numbers !== squaredNumbers); // true

// 4

function getReversedString(string) {
    const stringSplitByCharacters = string.split('');
    return stringSplitByCharacters.reverse();
}

console.log(getReversedString('Hello!'));
console.log(getReversedString('Arrays'));

// 5

// 6

function countLetters(string) {

}

const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

console.log(lettersObject);

// 7

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

function getAgeDifference(peopleArray) {
    function getYoungestPerson(peopleArray, age) {
    }
}

getAgeDifference(peopleArray); // 70

function getYoungestPerson(people) {
    // ...
}

function getOldestPerson(people) {
    // ...
}

function getAgeDifference(people) {
    // ...
}

// 8 - codewars

function getPositiveNumbersSum(numbersArray) {
    let sum = 0;

    for (i = 0; i < numbersArray.length; i++) {
        let currentNumber = numbersArray[i];

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

    for (i = 0; i < numbersArray.length; i++) {
        let currentnumber = numbersArray[i];
        sum = sum + (currentnumber * currentnumber);
    }
    return sum;
}

console.log(getSumOfSquaredNumbers([1, 2, 3]));

// 10

// 11

function countSheepsIfPresent(sheepArray) {
    let sumOfSheepsPresent = 0;

    for (i = 0; i < sheepArray.length; i++) {
        let isCurrentSheepPresent = sheepArray[i];

        if (isCurrentSheepPresent === true) {
            sumOfSheepsPresent = sumOfSheepsPresent + 1;
        }
    }
    return sumOfSheepsPresent;
}

console.log(countSheepsIfPresent([undefined,null,false,true,true,false,null,undefined]));

// 12

function getDigitizedAndReversedNumber(number) {
    const numberSplit = number.toString().split('');
    return numberSplit.reverse().map(Number);
}

console.log(getDigitizedAndReversedNumber(35231));

// 13

function findNeedleIndex(haystackArray) {
    return "found the needle at position " + haystackArray.indexOf("needle");
}

console.log(findNeedleIndex(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']));

// 14

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