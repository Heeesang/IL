# 변수와 상수

- ## 변수 (let, var)
  값을 여러번 할당할 수 있다.
  값을 할당하지 않았을때 undefine 값을 가진다.
- ## 상수 (const)
  한번 값이 정해지면 다른 값으로 변경이 불가능 하다. => 상수를 선언과 동시에 값을 할당 해야 한다

```javaScript
const sum = 5 + 10;
let result = false;

if(sum % 3 === 0){
    console.log("yeah3");
    result = true;
}
if(sum % 5 === 0){
    console.log("yeah5");
    result = true;
}
```

- ## const, let의 유효범위

  > 블록스코프, { }블록 내에서만 유효하다

- ## var

  함수를 스코프로 가지는 변수 이며, hoisting이 일어난다.

  > 변수의 중복 선언이 가능하다는 문제점이 있다.

- ## Hoisting
  > 아래 있는 선언을(만) 끌어올리는 것

```javascript
age = 6;
age++;
console.log(age);

var age;
```
