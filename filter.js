function getShortMessages(messages){
    let arrayofMessages=messages.map(function(obj){
        return obj.message;
    });
    let fileterdmessages=arrayofMessages.filter(function(message){
        return message.length<50;
    })
    return fileterdmessages;
}


//testcases

let messages=[
    {message: "qweqweqweqweqweqweqweqweqw1231313`eqweqwwqqeqeweweqweqqqeqw"},
    {message: "qweqweqweqweqweqweqweqweqweqweqwwqqeqewewe"},
    {message: "qweqweqweqweqweqweqweqweqweqweqwwqqeqeweweqwasdadasddaseqqqeqw"},
    {message: "qweqweqweqweqweqweqweqweqwqweqqqeqw"}
];
console.log("Filtering short messages:",getShortMessages(messages).length===2);