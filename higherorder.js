function repeat(operation,num){
    let counter;
    for(counter=1;counter<num;counter++)
        operation();
    return counter;
}

function operation()
{
    console.log("Hello World");
}


//testcases
console.log("Repeating function 4 times:",repeat(operation,4)===4);