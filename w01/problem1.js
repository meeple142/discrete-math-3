//specify doors here
let doors = 10000;

let doorsArray = Array(doors).fill(0)
                             .map((e, i) => ++i)
                             .filter(ele => Math.sqrt(ele) % 1 === 0);

console.log(doorsArray);