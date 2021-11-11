# ������ ���

- ## ���� (let, var)
  ���� ������ �Ҵ��� �� �ִ�.
  ���� �Ҵ����� �ʾ����� undefine ���� ������.
- ## ��� (const)
  �ѹ� ���� �������� �ٸ� ������ ������ �Ұ��� �ϴ�. => ����� ����� ���ÿ� ���� �Ҵ� �ؾ� �Ѵ�

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

- ## const, let�� ��ȿ����

  > ���Ͻ�����, { }���� �������� ��ȿ�ϴ�

- ## var

  �Լ��� �������� ������ ���� �̸�, hoisting�� �Ͼ��.

  > ������ �ߺ� ������ �����ϴٴ� �������� �ִ�.

- ## Hoisting
  > �Ʒ� �ִ� ������(��) ����ø��� ��

```javascript
age = 6;
age++;
console.log(age);

var age;
```
