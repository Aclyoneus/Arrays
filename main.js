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