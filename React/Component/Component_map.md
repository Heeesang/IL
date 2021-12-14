# map() 함수

- 반복되는 컴포넌트를 렌더링할 수 있다.
- 기존 배열로 새로운 배열을 만드는 역할을 한다.
  > 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성한다.

## 문법

```JS
arr.map(callback, [thisArg])
```

1. callback: 새로운 배열의 요소를 생성하는 함수 (파라미터 3개..)

- currentValue: 현재 처리하고 있는 요소
- index: 현재 처리하고 있는 요소의 index 값
- array: 현재 처리하고 있는 원본 배열

2. thisArg(선택 항목): callback 함수 내부에서 사용할 this 레퍼런스

```JS
const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map(name => <li>{name}<li>);
    return <ul>{nameList}</ul>
}

/*
- 눈사람
- 얼음
- 눈
- 바람
*/
```

## key

> 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용

#### **key값 설정**

- map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정
- key 값은 언제나 유일해야 한다.
