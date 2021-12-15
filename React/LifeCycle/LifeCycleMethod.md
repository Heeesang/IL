# LifeCycle Method

## 1. render()

> 컴포넌트의 모양새를 정의  
> 메서드 안에서 this.props와 this.state에 접근할 수 있으며, 리액트 요소(태그, 컴포넌트, null, false) 반환

_이벤트 설정이 아닌 곳에서 setState를 사용 X, 브라우저의 DOM에 접근 X_

- DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서 처리

## 2.constructor

```JS
constructor(props){...}
```

> 컴포넌트 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행 되며, 초기 state 설정 가능

## 3. getDerivedStateFromProps

> props로 받아 온 값을 state에 동기화 시키는 용도  
>  마운트될 때와 업데이트될 때 호출

## 4. componentDidMount

```JS
componentDidMount(){ ... }
```

> 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행  
> ( 다른 JS 라이브러리, 프레임워크의 함수 호출, 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리 )

## 5. shouldComponentUpdate

```JS
shouldComponentUpdate(nextProps, nextState) {...}
```

> props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드  
> **true**값 또는 **false** 값 반환 (기본값 true)

- 이 메서드 안에서 현재 props와 state는 this.props와 this.state로 접근  
  새로 설정된 props 또는 state는 nextProps와 nextState로 접근

## 6. getSnapshotBeforeUpdate

> render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됨  
> 반환 값은 componentDidUpdate 파라미터 snapshot값으로 전달받는다.

## 7. componentDidUpdate

```JS
componentDidUpdate(prevProps, prevState, snapshot) {...}
```

> 렌더링 완료 후 실행, DOM 관련 처리 가능  
> prevProps, prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근 가능

## 8. componentWillUnmount

```JS
componentWillUnmount() {...}
```

> 컴포넌트를 DOM에서 삭제할 때 실행

## 9. componentDidCatch

> 컴포넌트 렌더링 도중에 에러가 발생했을 때 오류 UI를 보여준다.

```JS
componentDidCatch(error, info) {
  this.setState({
      error: true
  });
  console.log({ error, info });
}
```

- error: 어떤 에러가 발생 했는지
- info: 어디에 있는 코드에서 오류가 발생 했는지
