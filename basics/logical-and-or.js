// let temp = 150;

// //Logical And operator - True if both sides are true, otherwise false
// //Logical And operator - True if atleast one side is true, otherwise false
// if(temp >= 60 && temp<=90){
//     console.log('it is pretty nice out');
// }else if(temp <=0 || temp>=120){
//     console.log('do not go outside');
// }else{
//     console.log('do what you want');
// }


//challange area

let isGuestOneVegan = true;
let isGuestTwoVegan =false;


//Are both vegan? Only offer up vegan dishes.
//Are least one vegan? Make sure to offer up some vegan options.
//Else, Offer up anything on the menue

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Only Offer up vegan dishes');
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some vegan option');
}else{
    console.log('offer up anything on the menue');
}
