let slice = Array.prototype.slice;

function logger(namespace) {
    return function partialogger(){
        let arrayofArguments=slice.call(arguments);
        console.log.apply(this,[namespace].concat(arrayofArguments));
    };
}

//module.exports = logger






//test cases
//console.log('It should display namespace concatenated with arguments:');
let info= logger('INFO');
info('this is an info message','another message');