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

/*
excutor 함수 인자 중 하나인 reject를 실행하면, rejected(거부) 상태가 됩니다.
*/
new Promise((resolve, reject)=>{
    reject(); //rejected
});

/*
p 라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다.
객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
*/

const p = new Promise((resolve, reject)=>{
    /*pending*/
    setTimeout(()=>{
        resolve(); /*fulfilled*/
    }, 1000);
});

p.then(()=>{
   console.log('1000ms 후에 fulfilled 됩니다.') 
});

/*
then을 실행하는 시점을 정확히하고,
함수의 실행과 동시에 프로미스 객체를 만들면서 pending 이 시작하도록 하기 위해
프로미스 객체를 생성하면서 리턴하는 함수 (p) 를 만들어 함수 (p) 실행과 동시에 then 을 설정합니다.
*/

function p(){
    return new Promise((resolve, reject)=>{
        /*pending*/
        setTimeout(()=>{
            resolve(); /*fulfilled*/
        }, 1000);
    });
}
p().then(()=>{
    console.log('1000ms 후에 fulfilled 됩니다.') 
});

/*
객체가 rejected 되는 시점에 p.catch 안에 설정한 callback함수가 실행됩니다.
*/
function p(){
    return new Promise((resolve, reject)=>{
        /*pending*/
        setTimeout(()=>{
            reject(); /*rejected*/
        }, 1000);
    });
}
p()
    .then(()=>{
        console.log('1000ms 후에 fulfilled 됩니다.') 
    })  
    .catch(()=>{
        console.log('1000ms 후에 rejected 됩니다.') 
    });

/*
excutor 의 resolve 함수를  실행할때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있습니다.
    resolve('Hello');
    then((message) => {...})
*/
function p(){
    return new Promise((resolve, reject)=>{
        /*pending*/
        setTimeout(()=>{
            reject('Hello'); /*rejected*/
        }, 1000);
    });
}
p()
    .then((message)=>{
        console.log('1000ms 후에 fulfilled 됩니다.') 
    })  
    .catch(()=>{
        console.log('1000ms 후에 rejected 됩니다.') 
    });


