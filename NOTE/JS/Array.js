'use strict';

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2.Index
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits.length-1);

//3.Loop
for(let i = 0; i <fruits.length;i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

//forEach 
fruits.forEach((fruit) => console.log(fruit));

//4. Addtion, deletion, copy

//push
fruits.push('복숭아','수박');
console.log(fruits);

//pop
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift
fruits.unshift('딸기','복숭아');
console.log(fruits);

//shift
fruits.shift();
console.log(fruits);

//splice
fruits.push('딸기','수박','감자');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'청사과','고구미');
console.log(fruits);

//combine
const fruits2 = ['천도복숭아', '코코넛'];
const Newfruits = fruits.concat(fruits2);
console.log(Newfruits);

//5. Searching
console.clear;
console.log(fruits);
console.log(fruits.indexOf('복숭아'));
console.log(fruits.indexOf('사과'));
console.log(fruits.includes('사과'));






