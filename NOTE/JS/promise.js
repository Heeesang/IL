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
    console.log('1000ms 후에 fulfilled 됩니다.'); 
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
excutor 의 resolve, reject 함수를  실행할때 인자를 넣어 실행하면, then, catch의 callback 함수의 인자로 받을 수 있습니다.
    resolve('Hello');
    then((message) => {...})
*/
function p(){
    return new Promise((resolve, reject)=>{
        /*pending*/
        setTimeout(()=>{
            resolve('Hello'); /*resolved*/ 
        }, 1000);
    });
}

function p(){
    return new Promise((resolve, reject)=>{
        /*pending*/
        setTimeout(()=>{
            reject('error'); /*rejected*/ 
        }, 1000);
    });
}

p()
    .then(message =>{
        console.log('1000ms 후에 fulfilled 됩니다.', message); 
    })  
    .catch(reason =>{
        console.log('1000ms 후에 rejected 됩니다.', error); 
    });

function p(){
    return new Promise((resolve,reject)=>{
        /*padding*/
        setTimeout(()=>{
            reject(new Error('bad')); /*resolved*/ 
        }, 1000);
    });
}    

p()
    .then(message =>{
        console.log('1000ms 후에 fulfilled 됩니다.', message); 
    })  
    .catch(error =>{
        console.log('1000ms 후에 rejected 됩니다.', error); 
    });

/*
fulfilled 되거나 rejected 된  후에 최종적으로 실행할 것이 있다면, .finally() 를 설정하고, 함수를 인자로 넣습니다.
*/
function p(){
    return new Promise((resolve,reject)=>{
        /*padding*/
        setTimeout(()=>{
            reject(new Error('bad')); /*resolved*/ 
        }, 1000);
    });
}    

p()
    .then(message =>{
        console.log('1000ms 후에 fulfilled 됩니다.', message); 
    })  
    .catch(error =>{
        console.log('1000ms 후에 rejected 됩니다.', error); 
    })
    .finally(() =>{
        console.log('end');
    });

/*
보통 비동기 작업을 할떄, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출 합니다.
이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다.
*/

function c(callback){
    setTimeout(()=>{
        callback();
    },1000);
}

c(()=>{
    console.log('1000ms 후에 callback 함수가 실행 됩니다.');
});

c(()=>{
    c(()=>{
        c(()=>{
            console.log('1000ms 후에 callback 함수가 실행 됩니다.');
        });        
    });    
});

/*
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현할 수 있습니다.
then 에 함수를 넣는 여러 방법
*/

function p(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve();
        },1000);
    })
} 

p().then(()=>{
    return p();
}) 
.then(()=> p())
.then(p)
.then(()=>{
    console.log('4000ms 후에 fulfilled');
});

/*
value 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다.
    value 가 프로미스 객체면, resolve 된 then 메서드를 실행 합니다.
    value 가 프로미스 객체가 아니면, value 를 인자로 보내면서 then 메서드를 실행합니다.
*/

Promise.resolve(/* value */);

Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    },1000);
})).then((data)=>{
    console.log(
        '프로미스 객체인 경우, resolve된 결과를 받아서 then 이 실행됩니다.',
    data,
    );
});

Promise.resolve('bar').then(data =>{
    console.log('then 메서드가 없는 경우, fulfilled 됩니다.',data);
});

/*
Promise.reject 를 사용하면, catch 로 연결된 rejected 상태로 변경됩니다.
*/

Promise.reject(/*value*/);

Promise.reject(new Error('reason'))
    .then(error => {})
    .catch(error => {
        console.log(error);
    });

/*
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.all 을 실행하면,
배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then 의 함수가 실행됩니다.
then 의 함수의 인자로 프로미스 객체들이 resolve 인자값을 배열로 돌려줍니다.
*/

//Promise.all([프로미스 객체들]);

function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(ms);
        }, ms);
    })
}

Promise.all([p(1000),p(2000),p(3000)]).then(messages=>{
    console.log('모두 fulfilled 된 이후에 실행됩니다.', messages);
})

/*
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.race 를 실행하면,
배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled된 것으로, then 의 함수가 실행됩니다.
then의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 돌려줍니다.
*/

//Promise.race([프로미스 객체들]);

function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(ms);
        }, ms);
    })
}

Promise.race([p(1000),p(2000),p(3000)]).then(message=>{
    console.log('가장 빠른 하나가 fulfilled 된 이후에 실행됩니다.', message);
})




