# Hooks

> 리액트 v16.8에 새로 도입된 기능으로 함수형 컴포넌트에서도 상태 관리를 할 수 있는 다양한 기능을 제공

## useState

> 가변적인 상태를 나타냄

```JS
const [value, setValue] = useState(0);
```

> 파라미터 = 기본값

- 함수가 호출 -> 배열 반환
  > 배열의 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수

## useEffect

> 리액트 컴포넌트가 렌더링될 때 마다 특정 작업을 수행하도록 설정할 수 있는 Hook

- 마운트될 때만 실행

```JS
useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
}, []);
```

- 특정 값이 업데이트될 때만 실행

```JS
useEffect(() => {
    console.log(name);
}, [name]);
```

- 뒷정리

```JS
useEffect(() => {
    console.log('effect');
    console.log(name);
    return() => {
        console.log('cleanup');
        console.log(name);
    };
});
```

## useReducer

- useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트
- 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 받아 새로운 상태를 반환하는 함수. 새로운 상태를 만들 때 _불변성 지키기_

```JS
function reducer(state, action){
    return {...}
}
// 액션값
{
    type: 'INCREMENT',
    ...
}
```

## useMemo

> 함수형 컴포넌트 내부에서 발생하는 연산 최적화

- 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산 실행, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식

## useCallback

> 주로 렌더링 성능을 최적화해야 하는 상화에서 사용  
> 이벤트 헨들러 함수를 필요할 대만 생성할 수 있다.
