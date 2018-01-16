function doubleAll(numbers){
    resultmap=numbers.map(function(number){return number*2;});
    return resultmap;
}



//Test Cases
console.log("Doubling all the elements:",compareArrays(doubleAll([1,2,3,4]),[2,4,6,8]));

function compareArrays(first,second){
    if(first.length!=second.length)
        return false;
    else{
        let length=first.length;
        for(let i=0;i<length;i++)
            if(first[i]!=second[i])
                return false;
        return true;
    }
}