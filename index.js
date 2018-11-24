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
circle.draw(); 