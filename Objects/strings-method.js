let name = 'Maharoz'

//length property
console.log(name.length);

//Convert to UpperCase
console.log(name.toUpperCase());

//Convert to lower case
console.log(name.toLowerCase());

//Includes method
let password ='ajndejljfhbjpasswordwjb4545453';
console.log(password.includes('password'))

//Trim
console.log(name.trim())

//challange

//isValidPassord
let isValidPassword = function(password){
    if(password.length>8 && password.includes('password')){
        return true;
    }
    else{
        return false;
    }
}
//length is more than 8 - and it doesnot contain the word password
console.log(isValidPassword('ashfh'));
console.log(isValidPassword('abc123!@44555^^&'));
console.log(isValidPassword('asdfpasswordjfjfj'));
