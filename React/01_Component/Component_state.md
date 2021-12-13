# state

컴포넌트 내부에서 바뀔 수 있는 값

- state (클래스형 컴포넌트)
- useState (함수형 컴포넌트)

## useState

> 함수형 컴포넌트에선 state 대신 useState 사용

**배열 비구조화 할당**  
배열 안에 들어있는 값을 쉽게 추출할 수 있도록 하는 문법

```JS
//배열 비구조화 할당 X
const array = [1 , 2];
const one = array[0];
const two = array[1];
//배열 비구조화 할당 O
const array = [ 1, 2 ];
const [one , two] = array;
```

함수 호출 -> 배열 반환

- 첫 번째 원소 = 현재 상태
- 두 번째 원소 = 상태를 바꾸어주는 함수 (Setter 함수)
  > useState 함수의 인자에는 상태의 초깃값을 넣는다.

```JS
const [message, setMessage] = useState('');
```

### 주의사항

> state 값을 바꾸어야 할 때는 setstate 혹은 useState를 통해 전달받은 함수를 사용해야 한다.
