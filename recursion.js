function reduce(array,fn,initial){

    return function reduceReccur(index, previous){
        if(array.length===index)
            return previous;
        else{
            return reduceReccur(index+1,fn(previous, array[index], index, array));
        }
    }(0,initial);
}

function computaion(prev, curr, index, arr){
    return prev + curr;
}

//Test Cases
let arr=[1,2,3,4,5];
console.log("Reducing list of numbers to its sum:",reduce(arr,computaion,0)===15);