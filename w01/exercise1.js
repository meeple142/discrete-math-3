/**
 * floorSqrt(value)
 * @param {int} value the value inside floor(sqrt(value))
 * 
 * This function computes the value of floor(sqrt(n)) using only
 * arithmetic operations (+, -, *, /)
 **/
function floorSqrt(value) {
    let i = 1;
    let result = 1;

    while (result <= value) {
        i++;
        result = i * i;
    }

    return i - 1;
}

console.log(`100 should be 10: ${floorSqrt(100).toString()}`);
console.log(`11 should be 3: ${floorSqrt(11).toString()}`);
console.log(`26 should be 5: ${floorSqrt(26).toString()}`);
console.log(`463 should be 21: ${floorSqrt(463).toString()}`);
console.log(`3882 should be 62: ${floorSqrt(3882).toString()}`);
console.log(`99 should be 9: ${floorSqrt(99).toString()}`);
console.log(`1 should be 1: ${floorSqrt(1).toString()}`);
