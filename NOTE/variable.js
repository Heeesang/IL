'use strict';
{
    let name = "gg"
    console.log(name)   
    name = 'hello'
    console.log(name)
}
//hoisting
//��� �����ߴ°��� ������� ���� ���� ������ ���� �ø�

//constants
//���� ���� ����
//���ȼ� 
//Thread safety 
//�ڵ带 �ٲܶ� �Ǽ� ����

//Variable
const count = 17;
const size = 17.2;
console.log(typeof count);
console.log(typeof size);

const infinity = 1/0 // +���ڸ� 0 ���� ������ �Ǹ� ���Ѵ��� ���ڰ��� ���� == infinity
const negativeinfinity = -1/0 // -���ڸ� 0 ���� ������ �Ǹ� ���Ѵ��� ���ڰ��� ���� ==  nagative infinity
const nAn = 'not a number' / 2 // ���ڰ� �ƴѰ��� ���ڷ� ������ nan ���� ����
console.log(infinity) 
console.log(negativeinfinity) 
console.log(nAn) 

//string
//-��� string Ÿ��
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

//symbol ������ �ĺ��ڸ� ���鶧 ���
const symblo1 = Symbol('id');
const symblo2 = Symbol('id');
console.log(symblo1 == symblo2);
const fsymblo1 = Symbol.for('id');//���Ͼ� Symbol ����� .for
const fsymblo2 = Symbol.for('id');
console.log(symblo1 == symblo2);
console.log(`value: ${symbol1.description}`) //��Ʈ������ ��ȯ�ؼ� ��� .description



