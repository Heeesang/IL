'use strict';

//1. class 선언
class Person{
    //constructor
    constructor(name,age){
        //fields
        this.name = name;
        this.age = age;
    };

    //methods
    speak(){
        console.log(`${this.name}: hello`);
    };
};

const Hee = new Person('Hee', 17);
console.log(Hee.name);
console.log(Hee.age);
Hee.speak;

//2. Getter and setter
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    };

    set age(){
        this._age = value < 0 ? 0 : value;
    };
};

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//3.Static
//object 상관 없이 공통적으로 클래스에서 쓸 수 있을때 
class Article {
    static publisher = 'coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    };

    static printPublisher(){
        console.log(Article.publisher);
    };
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//4. 상속
class Shape {
    constructor(width, height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return width * this.height;
    }
}

class Rectangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'blue');
