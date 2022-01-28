# 비동기 작업

> 특정 코드가 끝날때 까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 것을 의미한다.

API를 사용 할 때 응답을 받을 때까지 기다렸다가 전달받은 응답 데이터를 처리하는 작업을 비동기적으로 하게 된다.

```JS
// 3초 후에 printMe 함수를 호출
function printMe(){
    console.log('Hello World');
}
setTimeout(printMe, 3000);
console.log('대기 중...');
```

코드가 위부터 아래까지 다 호출되고 3초 뒤에 우리가 지정해 준 printMe가 호출 된다.

### 콜백 함수

> 파라미터로 함수를 전달 받아, 함수 내부에서 실행하는 함수

```js
function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

increase(0, (result) => {
  console.log(result);
});
```

콜백 안에 콜백을 넣어서 구현할 수 있는데 여러번 중접되면 코드의 가독성이 나빠져 '콜백 지옥'이라고 부른다.

### Promise

> 콜백 지옥 같은 코드가 형성되지 않게 하는 방안으로 ES6에 도입된 비동기 처리에 사용되는 객체이다. 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용 한다.

```js
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    //resolve : 성공 , reject: 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        //50보다 높으면 에러
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result); // number 값에 + 10 후 성공 처리
    }, 1000);
  });
}

increase(0)
  .then((number) => {
    //Promise에서 resolve된 값은 .then을 통해 받아 올 수 있다.
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  });
  .
  .
  .
  .catch(e => {
      //에러 확인
      console.log(e);
  })
```

### async/await

> 기존의 비동기 처리 방식인 콜백 함수와 Promise 의 단점을 보안하고 가독성을 더 좋게 할 수 있도록 하는 문법.

```js
async function runTasks() {
  try {
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
  } catch (e) {
    console.log(e);
  }
}
```
