/*�񵿱����� ��Ȳ���� �ڵ带 �� ��Ȯ�� ǥ���ϰ� �����ϵ��� ���� �� ����*/

/*
�����ڸ� ���ؼ� ���ι̽� ��ü�� ���� �� �ֽ��ϴ�.
�������� ���ڷ� excutor �Լ��� ����մϴ�.
*/

console.log(Promise);

/*
excutor �Լ��� resolve �� reject �� ���ڷ� �����ϴ�.
    (resolve,reject) => {...}
resolve �� reject �� �Լ��Դϴ�.
    resolve(), reject()
*/
new Promise(/*excutor*/(resolve, reject)=>{});

/*
�����ڸ� ���ؼ� ���ι̽� ��ü�� ����� ���� pending (���) ���¶�� �մϴ�.
*/

new Promise(/*excutor*/(resolve, reject)=>{});//pending


/*
excutor �Լ� ���� �� �ϳ��� resolve�� �����ϸ� fulfilled (����) ���°� �˴ϴ�.
*/

new Promise(/*excutor*/(resolve, reject)=>{
    //
    //...
    resolve(); //fulfilled
});



