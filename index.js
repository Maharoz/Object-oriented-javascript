function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

//printing the property of object
for (let key in circle){
    console.log(key);
}

//printing the property of object with value
for (let key in circle){
    console.log(key,circle[key]);
}

//printing the property of object with value using filtering
for (let key in circle){
    if(typeof circle[key]!== 'function'){
        console.log(key,circle[key]);
    } 
}

//printing the property of object with value using array format
const keys = Object.keys(circle);
console.log(keys);

//checking anny property exists on a object or not
if('radius' in circle){
    console.log('circle has radius');
}