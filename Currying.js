let multiply = function (x,y){
    console.log(x*y)
};
let divide = function(y){
    return function(x){
        console.log(parseInt(x/y));
    }
};

//currying using bind
let multiplyBy2 = multiply.bind(this,2);
multiplyBy2(16);

//currying using closure
let divideBy3 = divide(3);
divideBy3(45);