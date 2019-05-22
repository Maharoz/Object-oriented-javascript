// //multiple arguments

// let add = function (a,b,c){
//     return a + b + c;
// }

// let result = add(10,20,5);
// console.log(result);

// //Default arguments
// let getScoreText = function(name = 'Anonymous',score=0){
//     // console.log(name);
//     // console.log(score);
//     return 'Name:' + name +' Score: ' +score

// }

// let scoreText = getScoreText(undefined,99);
// console.log(scoreText);


//challange

let getTip = function(total, tipPercent=.2){
        return total * tipPercent
}

let tip = getTip(100,.25)

console.log(tip)
//total , tipPercent 

