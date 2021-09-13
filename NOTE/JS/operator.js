//1. String concatention
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1+2 = ${1+2}`);

//2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(1%1);
console.log(1**1); 

//3. 증감
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//pretIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;
//postIncrement = counter
//counter = counter + 1;
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`)

//4. Logical operators ||(or) &&(and) !(not)
const value1 = true;
const value2 = 4<2;

console.log(`or: ${value1 || value2 || check() }`);
console.log(`and: ${value1 && value2 && check() }`);
console.log(`not: ${!value1}`);


function check(){
    return true;
}

//5. Equality
const stringFive = '5';
const numberFive = 5;

//loose Equality
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//strict Equality
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object Equality
const Hee1 = {name: 'Hee'};
const Hee2 = {name: 'Hee'};
const Hee3 = Hee1;
console.log(Hee1 == Hee2);
console.log(Hee1 === Hee2);
console.log(Hee1 === Hee2);

//6. if
const name = 'Hee';
if(name === 'Hee'){
    console.log('Welcome, Hee');
}else if(name === 'coder'){
    console.log('You are coder');
}else {
    console.log('unkwnon');
}

//7. switch
const browser ='IE';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same.all');
        break;        
}

//8. loops
let i = 3;
while (i>0){
    console.log(`while: ${i}`);
    i--;
}

do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

//for
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i-2){
    console.log(`inline variable for: ${i}`);
}









