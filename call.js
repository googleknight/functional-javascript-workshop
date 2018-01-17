function duckCount(){
    arrayofArguments = Array.prototype.slice.call(arguments);
    return arrayofArguments.filter( function(arg){
        return Object.prototype.hasOwnProperty.call(arg,'quack');
    }).length;
}





//test cases
let notDuck = Object.create({quack: true});
let duck = {quack:false}
console.log("Number of quacks:",duckCount(duck,notDuck)===1);