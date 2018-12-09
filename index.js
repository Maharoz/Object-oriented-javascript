function Circle(radius){

    let color = 'red'; //local variable

    this.radius = radius;

    let defaultLocation ={ x:0 ,y:0};

   let computeOptimumLocation= function(factor){
        //...
    }
    this.draw = function(){
        let x,y;
        computeOptimumLocation(0.1);
        console.log('draw');
    }
}

const circle = new Circle(10);

