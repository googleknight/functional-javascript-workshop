let counter=0;
function repeat(operation,num){
    if(num!=0)
    {
        operation();
        repeat(operation,--num);
    }
    else if(num==0)
        return;
    
}

function operation()
{
    counter++;
    console.log("Hello World");
}

//module.exports=repeat;
//testcases
repeat(operation,4)
console.log("Repeating function 4 times:",counter===4);