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

//3. Αυ°¨
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


