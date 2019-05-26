//javascript scope(static scope)
//Global scope - define outside of all code blocks
//local scope - define inside a code block

//Global scope(varOne)
  //Local Scope(varTwo)
    //Local Scope(varFour)
  //Local Scope(var three)

let varOne = 'varOne';

if(true){
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);
    if(true){
        let varFour ='varFour';
    }
}

if(true){
    let varThree ='varThree'
}

console.log(varTwo);