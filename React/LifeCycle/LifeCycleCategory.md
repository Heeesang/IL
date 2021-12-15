# 마운트

DOM이 생성되고 웹 브라우저상에 나타나는 것을 mount라고 한다.

## 마운트 호출 메서드

1. 컴포넌트 만들기
2. constructor
3. getDerivedStateFromProps
4. render
5. componentDidMount

# 업데이트

> 업데이트 하는 경우

1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. this.forceUpdate로 강제로 렌더링을 트리거할 때

## 업데이트 호출 메서드

1. 업데이트 발생시키는 요인
2. getDerivedStateFromProps
   > 마운트 과정
3. shouldComponentUpdate
   > true == render 호출, false == 작업 취소
4. render
5. getSnapshotBeforeUpdate
   > 웹 브라우저상의 실제 DOM 변화
6. componentiDidUpdate

# 언마운트

> 컴포넌트를 DOM에서 제거하는것

## 언마운트 호출 메서드

1. 언마운트 하기
2. componentWollUnmount
