/**


 */

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function bogo(number, uneven) {
    let arr = Array(uneven).fill(-1);
    let tempArr = [];
    let tempTempArr = [];

    do {
        tempArr = arr.map(ele => getRandomInt(Math.floor(number / 2)));
        tempTempArr = tempArr.filter((v, i) => tempArr.indexOf(v) === i);
    } while (sumArray(tempArr) !== number || tempArr.length !== tempTempArr.length)

    return tempArr;
}

function sethoscope(number, uneven) {
    let arr = Array(uneven - 1).fill(-1)
                               .map((v, i) => ++i);
    
    return arr.concat((number - sumArray(arr)));
}

function halfBosetho(number, uneven) {
    let halfUneven = Math.floor(uneven / 2);
    let halfNum = Math.floor(number / 2);

    let firstArr = Array(halfUneven).fill(-1)
                                    .map((v, i) => ++i);
    
    let secondArr = bogo(halfNum, halfUneven, false);

    return firstArr.concat(secondArr);
}

console.log(halfBosetho(34, 5));
// console.log(sethoscope(34, 4));
// console.log(sethoscope(34, 5));
// console.log(bogo(432, 8));