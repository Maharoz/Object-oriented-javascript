//Function - input, code , output

// let greetUser = function(){
//     console.log('welcome')
// }

// greetUser();
// greetUser();
// greetUser();

// let square = function(num){
//     //console.log(num)
//     let result = num* num;
//     return result;
// }

// let value = square(3);
// let otherValue = square(10);
// console.log(value);
// console.log(otherValue);

//Challange 


let covertFahrenheitToCelcius = function(fahrenheit){
    celcius= (fahrenheit-32)*(5/9);
    return celcius;
}


//call a couple of time
let tempOne=covertFahrenheitToCelcius(32);
let tempTwo=covertFahrenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);