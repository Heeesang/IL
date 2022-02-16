# Redux란 무엇일까나
리액트의 상태관리 라이브러리이다.  
리덕스를 사용하면 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리 시켜서 더 효율적으로 관리할 수 있다. 또한 컴포넌트끼리 똑같은 상태를 공유해야 할 때도 손쉽게 상태 값을 전달하거나 업데이트를 할 수 있다. 
## 액션
상태에 어떠한 변화가 필요하면 하나의 객체로 표현되는 **액션** 이란 것이 발생한다.
```
{
    type: 'TOGGLE_VALUE'
}
```
> 액션 객체는 타입 필드를 반드시 가지고 있어야 한다. (이름이라고 생각)
## 리듀서
리듀서는 변화를 일으키는 함수이다.  
액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아 온다.  
-> 그리고 두 값을 참고하여 새로운 상태를 만들어 반환 한다.   
```Js
const initialState = {
  counter: 1
};
function reducer(state = initialState, action) {
switch (action.type) {
  case INCREMENT:
    return {
        counter: state.counter + 1
    };
  default:
    return state;
}
}
```
## 스토어 
프로젝트에 리덕스를 적용하기 위해 **스토어**를 만든다. (한 개의 프로젝트는 하나의 스토어만 가질 수 있다.)  
스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어가 있으며, 몇가지 내장 함수를 지닌다. 

### 내장함수 
- dispatch : 액션을 발생시키는 함수 이다.  이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 준다.
```Js
dispatch(action);
```
> 파라미터에 액션 객체를 넣어 호출한다.
- subscribe: 함수안에 리스너 함수를 파라미터로 넣어서 호출 하면, 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때 마다 호출된다.
```js
const listener = () => {
console.log(‘상태가 업데이트됨‘);

}
const unsubscribe = store.subscribe(listener);


unsubscribe(); // 구독을 비활성화할 때 사용
```
즁말
