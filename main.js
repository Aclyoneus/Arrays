// 1

const thingsInHome = ["mint", "basil", "cactus", "table", "wooden spoon", "bread"];
const thingsInGarden = ["apple", "trees", "stairs", "plum", "wooden bench"];

const madeOutOfWood = [thingsInHome[3], thingsInHome[4], thingsInGarden[1], thingsInGarden[4]];
const edibles = [thingsInHome[0], thingsInHome[1], thingsInHome[5], thingsInGarden[0], thingsInGarden[3]];

console.log(
    `made out of wood: ${JSON.stringify(madeOutOfWood)}\n edibles: ${JSON.stringify(edibles)}`
);

// 2

function getSmallestNumber(number) {
    let smallestNumber = number[0];

    for (i = 1; i < number.length; i++) {
        if (number[i] < smallestNumber) {
            return smallestNumber = number[i];
        }
    }
    return smallestNumber;
}

console.log(getSmallestNumber([2, -5, 10, 1, 4])); // -5
console.log(getSmallestNumber([200, 25, 4, 123, 87])); // 4