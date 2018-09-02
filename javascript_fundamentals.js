// let vs const vs var 

//var is for variable ,we can assign/reassign it when ever we like 

var name = 'prashant';
console.log(name);
 name = 'rawal';
console.log(name);

//we can name the variable with letters,numbers,_,$..only this four 
//and naming not allowed with numerical value
// let works same as var but will behave different in block scope

let name = 'prashant';
console.log(name);
 name = 'rawal';
console.log(name);


// const is different its full name is constant .i.e it can only be assign at once

const person = {
    name:'prashant',
    age:23
}

console.log(person);

//but we can modify the content of it with methods

person.name = "Rawal";
person.age = 24;

console.log(person);

//similarly

const array = [1,2,3,4];

console.log(array);

//we can do operation

array.push(5);

console.log(array);

//we we cannot reassign it with new array like this


array = [1,2,3,4,5,6];


//==================================================================

//datatypes

//primitive data types

//stored directly in the location the variable accesses
//stored on the stack



//referenced datatypes

//accessed by reference
//objects that are stored in heap
//a pointer to a location in memory


 
//in javascript we have six primitive datatypes 

// 1.String
// 2.numbers
// 3.Boolean
// 4.Undefined
// 5.Symbols(es6)
// 6.Null



//Referenced types/objects

// 1.Array
// 2.Object Literals
// 3.Functions
// 4.Dates
// 5.Anything Else....

//javascript is dynamically typed language 
//that is we dont have to specify types


// so what if we want to know what type of data we stored in the particular variable?

const name ='prashant';

console.log(typeof name);

//output will be string 

const car = null;

console.log(typeof car);

//output will be object ,actually its a bug in javascript ,null is actually primitive data types not an object .Read the below para to understand completely. 


// In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value, with the type tag for objects being 0 , and null was represented as the NULL pointer ( 0x00 on most platforms). As a result, null had 0 as a type tag, hence the bogus typeof return value (reference)


const sym = symbol();
console.log(typeof sym);

//output will be symbol



//==================================================================

//type conversion

let val;

//number to string 

val = 5;


//output

console.log(val); //5
console.log( typeof val);  //number
console.log(val.length);  //undefined, .length is a property which only work for string .
//if we want to convert number to string we use string wrapper

let val;

val = string(5);


console.log(val); //5
console.log( typeof val);  //string
console.log(val.length);   //1

// boolean to string 

val = string(true);


console.log(val); //true
console.log( typeof val);  //string
console.log(val.length);   //4


//we can also use .toString() method to convert into string


val = (5).toString();


console.log(val); //5
console.log( typeof val);  //string
console.log(val.length);   //1


//string to number 

val = Number('5');
val = Number(true);//1
val = Number(false);//0
val = Number(null);//0
val = Number('hello');//NaN(not a number);

console.log(val); //5
console.log( typeof val);  //Number
console.log(val.toFixed());//toFixed is a method used for numbers which allow us to choose upto how many decimal to want to show along with your number. if we do this -> toFixed(2) will show o/p-> 5.00

val = parseInt('100.50');//o/p will be 100,it does'nt allow decimals
//for decimal we use
val = parseFloat('100.50'); //o/p will be 100.5 by default it will give one decimal ,but if we want to see 2 decimal we specify with toFixed(2);


//==================================================================

const num1 = 100;
const num2 = 50;

let val;
//simple math with number
val = num1 + num2;//150
val = num1 - num2;//50
val = num1 * num2;//5000
val = num1 / num2;//2
val = num1 % num2;//0 , its modulus/remainder operator

console.log(val);

// lets see Math object, its an object means it can have properties/methods

val = Math.PI //3.14.....
val = Math.E //2.17

//some more useful
val = Math.round(2.4);//2
val = Math.round(2.8);//3
val = Math.ceil(2.4);//3
val = Math.floor(2.8);//2
val = Math.sqrt(16);//4
val = Math.abs(-3);//3 gives absolute version
val = Math.pow(8,2);//64  8 to the power 2
val = Math.min(2,4,7,12,1,0);//0 returns min vice versa we have max too
val = Math.random(); //provides random no from 0 - 0.99
//what if we want constant no?

val = Math.floor(random() * 20);// between 0 to 19


//==================================================================

//String methods

const firstName = 'Prashant';
const lastName  = 'Rawal';

let val;

//concatenation
val = firstName +  ' ' + lastName;

console.log(val); //Prashant Rawal

//append

val = 'Prashant';
val += 'Rawal';

console.log(val); // Prashant Rawal

//escaping

//val = 'that's awesome ,i cant't wait ;

//see its pretty messed up above ..so we use backslash to fix this also called escaping character

val = 'that\'s awesome ,i can\'t wait' ;

//now lets see some properties related to string 

//length

val = firstnmae.length; // counts no. of character in string 

//concat 
 val = firstName.concat(' ',lastName); //Prashant Rawal

//change case

val = firstName.toUpperCase();//PRASHANT
val = lastName.toLowerCase();//rawal


//there are some more charAt(),indexOf();lastIndexOf();

//substring()

val = firstName.substring(0,4);// Pras

//slice()

val = firstName.slice(0,3);//Pra

//slice is similar to substring but its widely used for arrays and slice can accept negative no.

val = firstName.slice(-3); tna

//split()

var str = 'hi my name is Prashant';

val = str.split(' '); //outputs the array based on spacees in the sentence .very handy .

//replace()

val = str.replace('Prashant','king');

//includes()

val = str.includes('king'); //true its check something is inside or not

// template literals/strings(es6)
//tip: in most of the cases template literals are used to grab the available variable and use that variable 
//lets start with old way 

const name = 'Prashant';
const age = '24';
const city = 'Korba';
const job = 'web developer';

let html;

html = '<ul>' +

        '<li> Name: '+ ' ' +name +'</li>' +
        '<li> Age: '+ ' ' +age +'</li>' + 
        '<li> Job: '+ ' ' +job +'</li>' + 
        '<li> city: '+ ' ' +city +'</li>' + 
        
        '</ul>';

document.body.innerHTML =html;

//new way ..the es6 way

//we can also include function,ternary operator.expression etc in  in es6 way

function hello(){
    return 'hello man'
};


html = <ul>

        <li>Name : ${name}</li>
        <li>Age : ${age}</li>
        <li>Job : ${job}</li>
        <li>City : ${city}</li>
        <li>greetings : ${hello()}</li>
        <li>${2+2}</li>
        <li>${age >30 ? 'over 30' : 'under 30'}</li>

        </ul>

document.body.innerHTML =html;

//==================================================================

//Arrays and array methods

//ways to defined array

const numbers = [43,56,33,44,36,5];

const numbers2 = new array(22,45,67,98,25);

const fruit = ['apple','mango','banana'];

const mixed = [22,56,'hello',null,undefined,true,new Date()];

//get array length

val = numbers.length;

//check if is array ?

val = Array.isArray(fruit);//true


//getting single value 

val = numbers[4]; // 36


//insert into array

 numbers[6] = 100;//insert 100 in 6th place ...actually 7th coz array are zero(0) based.(i.e) starts with 0;

//find index of value 

val = numbers.indexOf(36);//4


//Mutating arrays

numbers.push(120); //pushing 120 at end of array.

numbers.unshift(7); //pushing 7 at start of array.

//taking out from end

numbers.pop(); //last one will be gone 

numbers.shift();//first one will be gone

//splice values

numbers.splice(1,3); //splice takes two para from where to start and upto where.[44,36,5] will be remain.chops out first three.

//reverse the array

numbers.reverse();


//concatenate array

val = numbers.concat(numbers2);


//sorting order


val = fruit.sort(); // will sort in alphabet order

val = numbers.sort();//it will only sort by most significant bit..


//using compare function(sort ascending)
val = numbers.sort(function(x,y){
    return x-y;
});

//sort descending
val = numbers.sort(function(x,y){
    return y-x;
});

//internally compare function do this;

// function compare(a,b) {
//     return a - b;
// }
// Simply subtracting b from a will always return greater than zero if a is larger than b, 0 if they are equal, or less than zero if a is less than b. So it meets the requirements for a compare function.

// Now lets suppose this is our list of numbers to sort:

// var numbers = [1,5,3.14];
// When you call numbers.sort(compare), internally it will actually execute:

// compare(1,5);     // Returns -4, a is less than b
// compare(1,3.14);  // Return -2.14, a is less than b
// compare(5,3.14);  // returns 1.86, a is greater than b


//find function

function under50(num){
return num<50;
}

val = numbers.find(under50); //will give first no less than 50.in our case 43 will be answer.

//==================================================================
//objects literals


const person = {
    name:'Prashant',
    lastname:'Rawal',
    age:24,
    city:korba,
    hobbies:[music,coding,sports]
}

val = person.firstName; //Prashant
val = person.lastname; // Rawal
val = person.city;//korba
val = person.hobbies;//it will print whole array music ,coding ,sports

console.log(val);


const person1 = [
    {name:Prashant,age:24},
    {name:Aashish,age:24},
    {name:Arvind,age:26},
    {name:Shravan,age:24}
];

for(let i=0;i<person1.length;i++){
    console.log(person1.name[i]);
}

//it will print 
// 1.Prashant
// 2.Aashish
// 3.Arvind
// 4.Shravan

//==================================================================

//dates and times

let val;

const today = new Date();

val = today;

console.log(val);//prints todays date by default
console.log(typeof val);//object

//we can also specify date

let birthday = new Date('8-31-1995 11:25:00' ); //month day year format

birthday = new Date('september 10 1995');

//we can read about  date object at mdn


//==================================================================
//conditionals statements

// if(something){
//     do something
// }else{
//     do something else
// }


//== vs === ,we use == to check just value while === checks for datatype and value. 


//to check something is defined or not ?

if (typeof id !== 'undefined'){
    console.log(`the id is ${id}`);
}else{
    console.log('no id');
 }

//working with switch 
const color = 'red';


 switch(color){
  case 'red':
  console.log('its red');
  break;
  case 'yellow':
  console.log('its yellow');
  break;
  default:
  console.log('its neither red nor yellow');
    break;
 }


//==================================================================

//functions

//function declaration

function greet(){
    console.log('hello');
    return 'hello'
}

//calling function 

console.log(greet()); // o/p will be hello.



//es6 way  we declared defaults in the function parameter only if we dont pass anything it will take that as a default.

function greet (firstName='Lionel',lastName='Messi'){
    return 'hello '+ firstName + ' ' + lastName;
}

console.log(greet('Cristiano','Ronaldo')); // Cristiano Ronaldo

//function expression

const square = function(x = 3){
    return x * x;
}

console.log(square()); // 9 will be output



//Immediately Invokable Function Expression --IIFEs

(function (){
    console.log('IIFEs is running..')
})();
//declare the function within a braket then to run it append brakets after the statements.

//passing paramter with iifes
(function (name){
    console.log('hello' + name);
})('Prashant');//hello Prashant

//iifes helpful for module pattern


//property methods
//function inside a object is called methods

const todo ={
    add : function(){
        console.log('hi there!!!')
    },
    edit : function(id){
        console.log(`editing function ${id}`);

    }
}

todo.add();
todo.edit(22);

//==================================================================
//loops and iterators

//for loop

//for(initialization;condition;increments)

//while loop


let i = 0;
while(i<10){
    console.log(i);
    i++;
}

//do while

// we use do statement first so it will always execute once rest is depend on while statement. 

//===============================================================
//forEach

const cars =['ford','lamborgini','bmw','audi'];

cars.forEach(function(car,index,array){
    console.log(` ${index} : ${car}`);
     console.log(array);//it will print whole array 4 times 

});
//foreach function takes three parameter 1.element of array(one by one ),2.index,3.whole array
//================================================================
//Map

const users = [
    {id:1,name:'prashant'},
    {id:2,name:'Aashish'},
    {id:3,name:'Shravan'}
]

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);//this shows the array of ids.

//==================================================================

//for in loops

const user ={
    firstName:Prashant,
    lastName:Rawal,
    age:24
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);

}

//==================================================================

//window object /methods/properties

//Alert

window.alert('hi there'); /*or*/ alert('hi there');


//prompt

const input = prompt();
alert(input);


//confirm
if(confirm('are you sure?')){
console.log('yes');
}


let val ;

//outter height and width  (takes the whole window)

val =  window.outerHeight;
console.log(val);

val =  window.outerWidth;
console.log(val);

//innerheight and inner width takes the exact page you see (excluding tabs and other things)

//scroll points

val = window.scrollY;//for verticall y axis
val = window.scrollX;//for horizontal x axis


//LOCATION OBJECT

val = window.location
console.log(val);//we get host,hostname,href,origin,port,protocol etc

//history object 

window.history.go();//it takes a parameter -1,for one back ,-2 for 2 back etc.

//navigator object 

val= window.navigator;//show you complete info about browser
//there many methods inside navigator 


//==================================================================

//let vs const vs var  block scope and function scope 

var a   = 1;
let b   = 2;
const c =3;

function fscope(){
var a = 4;
let b = 5;
const c = 6;
console.log('function scope',a,b,c);//prints 4,5,6

}
fscope();
//var is stable at function scope.
console.log('global scope' ,a , b,c);//prints 1,2,3

//now lets see block scope ...i.e if statement/loops/anything between a curly braces except functions

if(true){
    var a = 4;
    let b=5;
    const c= 6;
    console.log('if scope',a,b,c);//4,5,6
}

console.log('global scope' ,a , b,c);//prints 4,2,3
//see here var changes.....let and const are safe.
//if we use for loop and changes var a inside it it also changes the global var a.



























































