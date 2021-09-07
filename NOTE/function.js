//1.Function
//function name (param1, param2){ code return}
function printHello(){
    console.log("Hello");
}
printHello();

function log (message){
    console.log(message);
}
log('Hello World');
log(1234);

//2.Default parameters
function showmessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showmessage('hi');

//3.Rest parameters
function printall(...args){
//     for(let i = 0; i < args.length;i++){
//         console.log(args[i]);
//     }

    for(const arg of args){
        console.log(arg);
    }
}
printall('dream', 'coding', 'Hee');

//4.Early return, early exit
//bad
function upgradeUser(user){
    if(user.point > 10){
        //logic
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //logic
} 
