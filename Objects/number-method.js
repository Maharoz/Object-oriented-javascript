let num = 103.941;
console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max-min))+min
console.log(randomNum);

//challange

let makeGuess = function(guess){
    let min = 0
    let max = 1
    let randomNum = Math.floor(Math.random() * (max-min))+min
    return guess === randomNum
}

console.log(makeGuess(1));
