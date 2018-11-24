//factory function

function createCircle(raduis){
     return { 
        radius,
        draw: function(){
            console.log('draw');
        }
    };    
}

const circle = createCircle(1);


//constructor function

function Circle(radius){
    this.raduis = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1)


//there are two ways of creating object in js 
// one is factory function and another one is constructor function