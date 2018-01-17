function duckCount(){
    let arrayofArguments = Array.prototype.slice.call(arguments);
    return arrayofArguments.filter( function(arg){
        return Object.prototype.hasOwnProperty.call(arg,'quack');
    }).length;
}





//test cases
let notDuck = Object.create({quack: true});
let duck = {quack:false};
console.log('Number of ducks with quack should be 1:',duckCount(duck,notDuck)===1);
console.log('Number of ducks with quack should be 2:',duckCount(duck,duck)===2);
console.log('Number of ducks with quack should be 0 for no arguments:',duckCount()===0);
console.log('Number of ducks with empty objects, and 1 nonempty should be 1:',duckCount({},{quack:32},{})===1);
console.log('Number of ducks with zero quack should be 0:',duckCount(notDuck,notDuck)===0);