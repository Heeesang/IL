//Object
//object = {key: value};

//1.Literials and properties
const obj1 = {};// 'object literal'
const obj2 = new Object()// 'object constructor

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const Hee = {name: 'Hee', age: 5};
//2. Computed properties
console.log(Hee.name);
console.log(Hee['name']);
Hee['hasjob'] = true;
console.log(Hee.hasjob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(Hee, 'name');
printValue(Hee, 'age');

//3.Property value shorthand
const person1 = { name : 'bob', age: 5};
const person2 = { name : 'Heesang', age: 1};
const person3 = { name : 'Sang', age: 2};
const person4 = new Person('Heee',7);
console.log(person4);

//Constructor function
function Person(name, age){
    //this = {}
    this.name = name;
    this.age = age;
}

//4. in operator
console.log('name' in Hee);
console.log('age' in Hee);
console.log('random' in Hee);
console.log(Hee.random);

//5. for..in vs for..of
console.clear();
for(key in Hee){
    console.log(key);
}

const array = [1, 2, 3, 4, 5];
for(value of array){
    console.log(value);
}

//6.Fun cloning
const user = {name: 'Hee', age: '7'};
const user2 = user;
user2.name = 'corder';
console.log(user);

//old way
const user3 = {};
for(key in user){
    user3[key] =user[key];
}
console.log(user3);

const user4 =Object.assign({}, user);
console.log(user4);

const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({},fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);




