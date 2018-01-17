function countWords(input){
    let result={};
    if(input.length===0)
        return null;
    input.reduce(
        function(acc,curVal){
            if(!acc[curVal]){
                acc[curVal]=1;
            }
            else{
                acc[curVal]++;
            }
            return acc;
        },result
    )
    return result;
}





//Test Cases
let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
let testObject = { Apple: 2, Banana: 1, Durian: 3};
let resultObject = countWords(inputWords);
console.log("Count words",resultObject.Apple===2 && resultObject.Banana===1 && resultObject.Durian===3);

resultObject = countWords([]);
console.log("Count words",resultObject===null);
