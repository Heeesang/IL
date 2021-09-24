/*비동기적인 상황에서 코드를 더 명확히 표현하고 실행하도록 만들 수 있음*/

/*
생성자를 통해서 프로미스 객체를 만들 수 있습니다.
생성자의 인자로 excutor 함수를 사용합니다.
*/

console.log(Promise);

/*
excutor 함수는 resolve 와 reject 를 인자로 가집니다.
    (resolve,reject) => {...}
resolve 와 reject 는 함수입니다.
    resolve(), reject()
*/
new Promise(/*excutor*/(resolve, reject)=>{});

/*
생성자를 통해서 프로미스 객체를 만드는 순간 pending (대기) 상태라고 합니다.
*/

new Promise(/*excutor*/(resolve, reject)=>{});//pending


/*
excutor 함수 인자 중 하나인 resolve를 실행하면 fulfilled (이행) 상태가 됩니다.
*/

new Promise(/*excutor*/(resolve, reject)=>{
    //
    //...
    resolve(); //fulfilled
});



