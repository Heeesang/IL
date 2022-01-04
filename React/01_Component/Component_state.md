# state
> 컴포넌트 내부에서 바뀔 수 있는 값을 의미

- 클래스형 컴포넌트 (state)
- 함수형 컴포넌트(useState)

## useState
- 배열 비구조화 할당
>배열 안에 있는 값을 쉽게 추출할 수 있게 해주는 문법
```JS
//비구조화 할당 전
const array = [1,2];
const one = array[0];
const two = array[1];
//비구조화 할당 후
const array = [1,2];
const [ one, two ] = array;
```
useState 함수를 호출하면 배열이 반환된다.
- 배열의 첫 번째 원소 = 현재 상태
- 두 번째 원소 = 상태를 바꿔주는 함수
