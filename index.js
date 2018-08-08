// first Js lesson
// console.log('Hello Javascript');

// let name = 'Mosh';
// let first_name = 'Mesh';
// let firstName = 'Master', LastName = 'mo';
// console.log(LastName);

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// primitives/value-type: string, number, undefined, boolean and null
// Refencee-type: object, array and function

// let name = 'Mosh'; //string literal
// let age = 30; //number literal
// let isApproved = true; //boolean literal
// let lastName;
// let selectedColour = null;

// console.log(lastName);

// let person = {
//     name: 'Mosh',
//     age: 30
// };

// dot notation
// person.name = 'John';
// bracket notation
// person['name'] = 'mary';

// console.log(person);



// let selectedColours = ['red', 'blue'];
// selectedColours[2] = 34;

// console.log(selectedColours.length);

// functions
//  perfoming a task
// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('Mayowa', 'Smith');

// function to cal a value

// function square(number){
//     return number * number;
// }

// let number = square(2);

// console.log(square(2));

// 4 pillars of JS: encapsulation(allow us to group related obj/functions together which can be reused later), abstraction(hide details and complexity and show only the essentials), inheritance(eliminate redundant codes), polymorphism(refactor ugly switch/case statement)

// let employee = {
//     baseSalary = 20_000,
//     overTime = 10,
//     rate = 20,

//     getWage: function(){
//         return this.baseSalary +  (this.overTime * this.rate);
//     }
// };

// employee.getWage();
 

// const circle = {
//     radius: 1,
//     location:{
//         x:1,
//         y:1,
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };

// circle.draw();


// Factory Function
// function createCircle(){
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();

// Constructor Function
// function Circle(radius) {
//     // console.log('this', this);
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
//     // console.log('this', this);
// }


// const circle = new Circle(12);

// for (let key in circle ){
//     if (typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle){
//     console.log('Circle has a radius ');
// }else{
//     console.log('he didn\'t dey');
// }
    


// let x = {};

//  let x = 20;
//  let y = x;

//  x = 50;


//  let number = { value: 10 };

//  function increase(number) {
//      number.value++;
//  }
//  increase(number);
//  console.log(number);

// function Stopwatch() {
//     let startTime, endTime, running, duration = 0;

//     this.start = function () {
//         if (running)
//             throw new Error('Stopwatch has already started.');

//         running = true;

//         startTime = new Date();

//         // console.log(start);
//     };

//     this.stop = function () {
//         if (!running)
//             throw new Error('Stopwatch is not started.');
        
//         running = false;

//         endTime = new Date();

//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

//         duration+=seconds;
        
//     };

//     this.reset = function () {
//         startTime = null;
//         endTime = null;
//         running = flase;
//         duration = 0;
//     };

//     Object.defineProperty(this, 'duration', {
//         get:function() {
//             return duration;
//         }
//     });
// }

// console.log(start);



// let userName = '';
// let knowsJavaScript = true;

// if (knowsJavaScript && userName) {
//   console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
// } else if (knowsJavaScript) {
//   console.log('Great! Get ready to practice your JavaScript!');
// } else if (userName) {
//   console.log('Great, ' + userName + '! Get ready to learn something new!');
// } else {
//   console.log('Great! Get ready to learn something new!');
// }



// let stopLight = 'green';

// if (stopLight === 'red') {
//   console.log('Stop');
// } else if (stopLight === 'yellow') {
//   console.log('Slow down');
// } else if (stopLight === 'green') {
//   console.log('Go!');
// } else {
//   console.log('Caution, unknown!');
// }


// let orderCount = 0;

// const takeOrder = (topping, crustType) => {
//   orderCount ++;
//   console.log('Order: ' + crustType + ' pizza topped with ' + topping);
// };

// takeOrder('mushroom', 'thin crust');
// takeOrder('spinach', 'whole wheat');
// takeOrder('pepperoni', 'brooklyn style');

// const getSubTotal = (itemCount) => {
//   return itemCount * 7.5;
// };

// console.log(getSubTotal(orderCount));


// const visibleLightWaves = () => {
//     let lightWaves = 'Moonlight';
//     let region = 'The Arctic';
//     if (region === 'The Arctic') {
//       let lightWaves = 'Northern Lights';
//       console.log(lightWaves);  
//     }
//     console.log(lightWaves);
//   };
  
//   visibleLightWaves();



// let person = {
//     firstName: 'Scofield',
//     lastName: 'Blue',
//     age: 45,
//     children: ['Meka', 'Nickolas'],
//     address: {
//         street: 'plot 34, 64 cresent Gwarimpa',
//         city: 'Abuja',
//         state: 'FCT'
//     },
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName());


// function fruit(name, colour, shape) {
//     this.name = name;
//     this.colour = colour;
//     this.shape = shape;

//     this.describe = function(params) {
//         return 
//     }
// }
// let apple = new fruit('apple', 'red', 'round');
// console.log(apple);

// let x = 2;
// if (x % 2 == 0)
// {
//   alert('even');
// }
// else
// {
//   alert('odd')
// }



// let users = [
//     {
//         name: 'John Smith',
//         age: 25
//     },
//     {
//         name: 'Mark Smith',
//         age: 51
//     },
//     {
//         name: 'Luke Smith',
//         age: 34
//     },
//     {
//         name: 'Mathew Smith',
//         age: 53
//     },
// ];
// console.log(users[2].age);

// function doClick(){
//     alert('You Clicked');
// };

// // function changeText(){
// //     let heading = document.getElementById('heading');
// //     heading.innerHTML = 'You Clicked';
// // };
// function showDate (){
//     let time = document.getElementById('time');
//     time.innerHTML = Date();
// };
// function clearDate(){
//     let time = document.getElementById('time');
//     time.innerHTML = '';
// };
// function changeBackground(x){
//     console.log(x.value);
//     let heading   = document.getElementById('heading');
//     heading.style.color = x.value;
// };  
// function validateForm() {
//     let firstName = document.forms["myForm"]["firstName"].value;
//     if (firstName == null || firstName == ""){
//         alert("First name is required");
//         return false;
//     }
//     if (firstName.length < 3){
//         alert("First name must be at least 3 character");
//         return false;
//     }
// }

// let stopLight = 'green';

// if (stopLight === 'red') {
//   console.log('Stop');
// } else if (stopLight === 'yellow') {
//   console.log('Slow down');
// } else if (stopLight === 'green') {
//   console.log('Go!');
// } else {
//   console.log('Caution, unknown!');
// }


// var x = 2;
// if (x % 2 == 0)
// {
//   alert('even');
// }
// else
// {
//   alert('odd')
// }




// let game = '30';

// if ((game % 3) === 0){
//     console.log('Fizz!');
// }else if ((game % 5) === 0){
//     console.log("Buzz!");
// }else if ((game % 3) === 0 && (game % 5) === 0){ 
//     console.log('Fizz-Buzz!');
// }else{
//     console.log('You need to enter a number divisible by 3 or 5!');
// }



// let game = 30;
// for (let game=1; game < 50; game++){
//     if (game % 3 === 0 && (game % 5) === 0){ 
//         console.log('Fizz-Buzz!');
//     };
//     if (game % 3 === 0){
//             console.log('Fizz!');
//     }else if (game % 5 === 0){
//         console.log("Buzz!");
//     }else{
//             console.log('You need to enter a number divisible by 3 or 5!');
//      };
// }

// ( condition ) ? run this code : run this code instead;


//  const game = () => {
//      let number = 20;
//       for (let game=1; game < 50; game++) {
//             console.log(game);
//       }
//       console.log(game);
//  }

// let game = 20;
// for (let i = 1; i <= game; i++) {
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz');
//     }else if ( i % 3 === 0){
//         console.log('Fizz');
//     }else if ( i % 5 === 0) {
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
// }

// let game = 20;


// const fuzzGame = (game) => {
//     for (let i = 1; i <= game; i++) {
//     switch (true) {
//         case i % 3 === 0 && i % 5 === 0:
//             console.log('FizzBuzz');
//             break;
//         case i % 3 === 0:
//             console.log('Fizz');
//             break;
//         case i % 5 === 0:
//             console.log('Buzz');
//             break;
//         default:
//             console.log(i);
//     };
// };
    
// };

// fuzzGame(30); 


// for (let i = 1; i <= 100; i++){
//     let game = "";

//     if (i % 3 == 0) { game += "Fizz";}
//     if (i % 5 == 0) { game += "Buzz";}


//     if (game == "") {game = i;}

//     console.log(game);
// };


// BuzzFizz
const fuzzGame = (game) => {
    for (let i = 1; i <= game; i++){
        let game = "";

        if (i % 3 == 0) { game += "Fizz";}
        if (i % 5 == 0) { game += "Buzz";}
        if (game == "") {game = i;}
    
        console.log(game);
    };
    
};

fuzzGame(30); 