# variable_constant

- ## 변수 (let, var)
  데이터를 저장할 때 쓰는 저장소
- ## 상수 (const)
  변화 하지 않는 변수를 선언 할 때 상수 const
  const로 선언한 변수는 재할당할 수 없다.

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

- ## var

  var는 hoisting 이 되고, 중복 선언이 가능한 변수 이다.

  > 중복 선언이 가능하여 오류가 발생하기 쉽다.

- ## Hoisting
  > var 를 사용하여 변수를 선언 할 시, 해당 변수의 scope를 최상단으로 올려버리는 현상이다.

```javascript
age = 6;
age++;
console.log(age);

var age;
```
