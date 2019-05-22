let name='Maharoz';
let age = 28
console.log(`Hey,my name is ${name}! I am ${age} years old`)


//challange

let getTip = function(total, tipPercent=.2){
    let percent= tipPercent *100
    let tip= total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(100,.25)

console.log(tip)
//total , tipPercent 