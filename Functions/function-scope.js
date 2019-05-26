//Global scope(convertFahreheitToCelcius,tempOne,tempTwo)
    //Local scope (fahrenheit,celcius)
        //Local scope(isFrezzing)
let covertFahrenheitToCelcius = function(fahrenheit){
    celcius= (fahrenheit-32)*(5/9);
    if(celcius <=0){
        let isFrezzing = true;
    }
    return celcius;
}


//call a couple of time
let tempOne=covertFahrenheitToCelcius(32);
let tempTwo=covertFahrenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);