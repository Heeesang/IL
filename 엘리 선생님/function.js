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

//5. function expression
// 이름이 없는 함수 - anonymous function
const print = function(){
    console.log('print');
}
print();
const printAgain = print;
printAgain();

//6. Callback function
function randomQuiz(answer,printYes,printNo){
    if(answer === 'love you'){
        printYes();
    }else {
        printNo();
    }
};

//anonymous function
const printYes = function(){
    console.log('yes!');
};

//named function
const printNo = function print(){
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow funtion
// 함수를 간결하게 해주는 너무너무 고마운 친구
const simplePrint = function(){
    console.log('simplePrint');
};

const simplePrint = () => console.log('simplePrint');

