// let greet="hello world";
// console.log(greet);

// let myName="PZO"
// console.log(myName);

// // let sayHi=`Hi There ${myName}`
// let sayHi='3 o\'clock'
// console.log(sayHi);

// let myHeight="5\" 8\'"
// console.log(myHeight)

// let myNum=10;
// let myAnotherNum=20.121;
// console.log(myNum+myAnotherNum);

// let myName=Boolean(null)
// console.log(myName);

// let x=null;
// x=21;
// console.log(x)

// let num1;
// let num2=1;
// console.log(num1+num2);

// let a, b, c=10;
// console.log(c);

// let a=5;
// a%=3;
// console.log(a);

// let e = 10 + 6 - 2 * 4/5;
// console.log(e); 


// function shopping(product){
//     console.log("go to shop")
//     console.log("buy a " + product)
//     console.log("bo back home");
// }

// shopping("pen")

// function add(num1, num2){
//     return num1+num2;
// }
// let result=add(1,2)
// console.log(result+1, "PZO")

// Homework
// function calculateAge(birthDate){
//     currentYear=2024;
//     let myAge=currentYear-birthDate;
//     return myAge;
// }

// let age=calculateAge(1998);
// console.log(age);

//Default Parameter
function add(a,b=0){
    console.log(a,b);
}
add(2);

//Rest Parameter
function test(a,b, ...c){
    console.log(a);
    console.log(b)
    console.log(c);
}
test(1,2,3,4,5,6)

//function expression
let sayHi=function(){
    console.log("hi there");
}

sayHi();
 
//Callback Function -------------------------------------------------------------------
function sayMyName(name,fun){
    // console.log(fun);
    fun('Paing Zin Oo');
}

sayMyName('PZO',function(name){
    console.log(`My Name is ${name}`)
})

function sayName(name, fun){
    let result=fun(name);
    console.log(`Hello I'm ${result}`)
}
sayName('Paing Zin Oo',function(name){
    return name;
})

function twice(num, modifier){
    let result=modifier(num)*2;
    console.log(result);
}
twice(7, function(num){
    return num+6;
});

// Arrow Function
let sayGreeting=()=>console.log('hi PZO');
sayGreeting();

let sayHello=word=>word;
let result=sayHello("Hello Paing")
console.log(result)

let twiceNum=num=>num*2;
console.log(twiceNum(10));

// Chapter 5
// Array&Object

// let mixture = new Array('dog',20, 1.3, true); //Old Style
// console.log(mixture.length) //4

// let mixture1 = ['dog',20, 1.3, true];
// console.log(mixture1);

// Insert and retrieve array data and nested array concept -------------------------------------------------
let mixture=['dog',20,1.3,true];
console.log(mixture[0]); //dog

let bobo = mixture[0];

mixture[4]='PZO'; //insert
mixture[3]=false; //override
console.log(mixture);

let fruits=['apple','orange'];
fruits[2]='mango';
console.log(fruits[fruits.length-1]); //mango

//nested array
let arr=[
    ['a','b','c'],[1,2,3]
]
console.log(arr);
console.log(arr[0][1]); //b

arr[0][3]='d';
console.log(arr);

//array spread and array destructuring concepts -------------------------------------------------------------
let data1=[1,2,3];
let data2=[4,5,6];

let resultarr=[...data1, ...data2];
console.log(resultarr);

function addArr(a,b){
    console.log(a+b);
}
// let nums=[1,2]
// addArr(...nums);

//Destructuring
let [name,age,school]=['Mg Mg',20,'Ttu'];
console.log(name,age,school);

function addDe([a,b]){
    console.log(a+b);
}
addDe([1,2]);

//array basic methods --------------------------------------------------------------------
let animals=['cat','dog','lion']
console.log(animals);

animals.push('bird'); //add to the end
// console.log(animals);

animals.pop(); //remove last element
// console.log(animals);

animals.shift(); //remove first element
// console.log(animals);

animals.unshift('bird'); //add to the start
// console.log(animals);

let index=animals.indexOf('lion');//return index number
console.log(index);

let string=animals.join('-'); //cat-dog-lion
console.log(string);

animals.splice(0,1);
console.log(animals);

//Array map method -----------------------------------------------------------------------
let nums=[1,2,3,4,5]

let newArr=nums.map(num=>{
    return num+100;
})

console.log(newArr);

let names=['John','Chris','Mg Mg']

let newNames=names.map(name=> 'Mrs. ' + name)
console.log(newNames);

//Array filter method ------------------------------------------------------------------
let numsArr=[1,2,3,4,5,6]

//divisible by 3
let filteredNum=numsArr.filter(num=>num%3==0);
let filterdNum3=numsArr.filter(num=> num!==3);
console.log(filterdNum3); //1,2,4,5,6

//Array reduce method ------------------------------------------------------------------
let numss=[1,2,3,4,5]

// let resultArr = 
let resultReduce = numss.reduce((prev,current)=>{
        // console.log(prev,current);
        return prev+current;    
    })
console.log(resultReduce);

// Basic Refactoring Concept
newArr = nums.map(num=>num+10); //Arrow Function
// console.log(newArr);

let filteredNumber = numsArr.filter(num=>num%2==0); //Arrow Function
// console.log(filteredNumber);

result = numsArr.reduce((prev,current)=>prev*current);
// console.log(result);

// Everything is a object -------------------------------------------------------------
let str='hello'
console.log(typeof(str)); //string

str = new String('hello') //low-level
console.log(str); //include property and methods
console.log(typeof(str)); //object

console.log(str.length); // h e l l o //5

str = str.toUpperCase(); //HELLO
// console.log(str);
str = str.toLowerCase(); //hello
// console.log(str);
str = ' hello '
str = str.trim(); //remove space
console.log(str); //'hello'

str = 'hello world again'
let newStr = str.split(' ');
console.log(newStr); //['hello','world','again']

let num = new Number(12); //low level
num = 12.6;
console.log(num.toFixed()); //nearest value 13

let bool = true;
bool = bool.toString();
console.log(typeof(bool));

//How to create object 101 ---------------------------------------------------------------
let person = {
    name:'john',
    age:20,
    // eat: function(){
    //     console.log('person is eating');
    // }
    eat(){
        console.log('person is eating');
    }
}

console.log(person.name); //dot notation
console.log(person['age']); //bracket notation

let propName = 'age';
console.log(person[propName]);

person.name="John Doe"; //Override
console.log(person);

person.hairColor = "black"; //add new property
console.log(person);

person.eat();
person.drink = function(){
    console.log('person is drinking');
}
console.log(person);

//Scary this keyword in JavaScript
//default window object
console.log(window);

// setTimeout(()=>{
//     console.log('I\'m callback')
// },3000)

let personObj = {
    name: 'PZO',
    age: 20,
    // eat(){
    //     setTimeout(function(){
    //         console.log(this); //this = window
    //     },3000)
    // }
    // eat: ()=>{
    //     setTimeout(()=>{
    //         console.log(this); //this = window (because of Parent)
    //     },3000)        
    // }
    // eat(){
    //     // console.log(this); //personObj
    //     setTimeout(()=>{
    //         console.log(this); // personObj
    //     },3000)
    // }
    
    
}

// personObj.eat();

// function test(){
//     console.log(this);
// }

// Object spread and object destructuring and property-shorthand -----------------------------------------------------
let obj1 = {
    myName: 'PZO',
    myAge: 20
}

let obj2 = {
    myHairColor: 'black'
}

let obj3 = {...obj1, ...obj2}; // ... object spread
console.log(obj3); 

//object destructuring
let {myName, myAge} = { //must be the same properties
    myName: 'PZO',
    myAge: 20
}
console.log(myName, myAge);

//property shorthand
name='Mg Mg';
age=26;
let person1 = {
    name, // name: name
    age // age:age 
}
console.log(person1);

//JavaScript data structure ------------------------------------------------------------------------------------------
personObj.gender = 'male'
console.log(personObj)

let people=[
    {
        name: 'Shine Aung',
        age: 26,
        gender: 'male'
    },
    {
        name: 'Aung Aung',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Su Su Aung',
        age: 28,
        gender: 'female'
    }
]

console.log(people);

let peopleNames = people.map((person)=>{ //extract names using map
    // console.log(person.name);
    return person.name;
}); // (or) person=> person.name;
console.log(peopleNames);

let filtered = people.filter(person=>{
    return person.gender==='male';
})
console.log(filtered); //PZO, Aung Aung

//Search in Real World
// let searchKeyword = prompt('search person :');

// let filteredArray = people.filter(person=>{
//     return person.name.includes(searchKeyword) //find searchKeyword
// })
// console.log(filteredArray);

//Json 101 ------------------------------------------------------------------------------
//javascript object notation
person = '{"name":"PZO", "age":20}' 
console.log(person);

let obj = JSON.parse(person) // JSON to Object
console.log(obj)
console.log(obj.name);

console.log(JSON.stringify(personObj)); // Object to JSON


//Ch-6 Control Flows & Looping & Scoping -----------------------------------------------------------------------------------------------
//if else from scratch
let tired = 'yes' //prompt('are u tired? "yes/no" : ')
if(tired=='no'){
    console.log('go back to work')
}
else if(tired=='yes'){
    console.log('rest well')
}
else{
    console.log('please enter yes or no')
}

//if else examples --------------------------------------------------------------------------------------------------------------------
let product_prices=[100,500,100,300,700,200,100]

product_prices = product_prices.map(price=>{
    if(price==100){
        price-=30
    }
    return price
})
console.log(product_prices)

let people_list=[
    {name:'john', age:25},
    {name:'jane', age:20, gender: 'f'},
    {name:'jack', age:40, gender: 'm'}
]

people_list = people_list.map(person=>{
    if(person.gender==='m')
        person.gender='male'    
    else if(person.gender==='f')
        person.gender='female'
    else
        person.gender='unknown'    
    return person
})

console.log(people_list)

//Ternary Operator ----------------------------------------------------------------------------------------------------------------
age=20;
let permission;

if(age > 18)
    permission='authorized'
else
    permission='unauthorized'

console.log(permission); //childish

permission = age > 18? 'authorized': 'unauthorized';
console.log(permission); //recommendation

//switch statement ------------------------------------------------------------------------------------------------------------------
let peop = [
    {name:"PZO", age: 26, gender: 'm'},
    {name:"mgmg", age: 23},
    {name:"susu", age:18, gender: 'f'}
]

peop = peop.map((person=>{
    switch(person.gender){
        case 'm':
            person.gender='male'; break;
        case 'f':
            person.gender='female'; break;
        default:
            person.gender='unknown';
    }
    return person;
}))

console.log(peop)

//while loop ------------------------------------------------------------------------------------------------------------------
let x = 0
while(x < 10){
    console.log('hi' + x)
    x++
}

let y=0
let peopleList = ['mgmg','aungaung','kyawkyaw','susu','koko']
while(y < peopleList.length){
    console.log(peopleList[y])
    y++
}

//do while and for loop --------------------------------------------------------------------------------------
let i=0
do{
    console.log('work' + i)
    i++
}while(i < 5)

//for loop
for(let i=0; i < 5; i++){
    console.log('hello ' + i)
}

people = ['agag','kk','susu','mgmg']
for(let x=0; x < people.length; x++){
    console.log(people[x])
}

//for of and for in -----------------------------------------------------------------------------------
people=['agag','mgmg','kk']
for(person of people){
    console.log(person)
}

for(person in people){
    console.log(`${person} is ${people[person]}`)
}

person = {
    name: 'pzo',
    age: 20
}

for(key in person){
    console.log(`${key} is ${person[key]}`)
}

//scoping ------------------------------------------------------------------------------------------------
x = 100; //global scope variable
{
    //local scope
    let y=10; //can't call from outside
    console.log(y);
}

{
    console.log(x); //can call from anywhere
}

let idx = 1000;

function callVar(){
    let p=10; //local scope variable
    console.log(p);
    console.log(idx); //global scope variable
}
//console.log(p); //reference error
callVar();