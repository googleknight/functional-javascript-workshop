let logger = function(namespace) {
    return console.log.bind(this,namespace);
};

//module.exports =




//test cases
//console.log('It should display namespace concatenated with arguments:');
let info= logger('INFO');
info('this is an info message','another message');