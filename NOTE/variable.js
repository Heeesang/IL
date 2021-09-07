'use strict';
{
    let name = "gg"
    console.log(name)   
    name = 'hello'
    console.log(name)
}
//hoisting
//어디에 선언했는가에 상관없이 제일 위로 선언을 끌어 올림

//constants
//값을 변경 못함
//보안성 
//Thread safety 
//코드를 바꿀때 실수 방지

//Variable
const count = 17;
const size = 17.2;
console.log(typeof count);
console.log(typeof size);

const infinity = 1/0 // +숫자를 0 으로 나누게 되면 무한대의 숫자값이 나옴 == infinity
const negativeinfinity = -1/0 // -숫자를 0 으로 나누게 되면 무한대의 숫자값이 나옴 ==  nagative infinity
const nAn = 'not a number' / 2 // 숫자가 아닌것을 숫자로 나누면 nan 값이 나옴
console.log(infinity) 
console.log(negativeinfinity) 
console.log(nAn) 

//string
//-모두 string 타입
const char = 'c';
const breaden = 'breaden';
const greeting = 'hello' + breaden;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

//boolean
const canRead = true;
const test = 3 < 1;
console.log(`value ${canRead}, type: ${typeof canRead}`);
console.log(`value ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//object 
const Heesang = { name: 'Heesang', age: 20};
Heesang.age = 21;

//symbol 고유한 식별자를 만들때 사용
const symblo1 = Symbol('id');
const symblo2 = Symbol('id');
console.log(symblo1 == symblo2);
const fsymblo1 = Symbol.for('id');//동일안 Symbol 만들기 .for
const fsymblo2 = Symbol.for('id');
console.log(symblo1 == symblo2);
console.log(`value: ${symbol1.description}`) //스트링으로 변환해서 출력 .description



