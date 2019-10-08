/*
var firstNmae = 'Aaditya';
console.log(firstNmae);

var lastNmae = 'Sharma';
console.log(lastNmae);

var age = 28;
console.log(age);

var fullage = true;
console.log(fullage);

var job;
console.log(job);
job = 'Teacher';
console.log(job);
*/
/*
var firstName = 'jhon';
var age = 28;

// Type coercion
console.log(firstName +' '+ age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + 'is a ' + age + ' ' + 'year old '+ job +' '+'is he married' +' '+ isMarried);

// Variable mutation
age = 'twenty eight';
job = 'dirver';
alert(firstName + 'is a ' + age + ' ' + 'year old '+ job +' '+'is he married' +' '+ isMarried);


var lastName = prompt("what is his lst name?");
console.log(firstName + ' '+ lastName);
*/

/******************************************
Basic operators
 */
/*
var yera, yearJohn , yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now +2);
console.log(now * 2);
console.log(now / 10);

// logical operators

var johnOlder = ageJohn < ageMark
console.log(johnOlder);

// type of operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof ' Mark is older the john');
var x;
console.log(typeof x);
*/

/***************************************
** operator precedence
*/
/*
var now = 2018;
var yearJohn = 2018;
var fullage = 18;
var isFullAge = now - yearJohn >= fullage; //false
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = ageJohn + ageMark / 2;
console.log(average);
//document.write(average);

//multiple assignment

var x, y;
x = y = (3+5) * 4 - 6;
console.log(x);

*/
/***************************
** Coding Chalange
*/

/* Question
 */
/* solution----
var massMark = 78;//kg
var heightMark = 1.69;//meters
var massJohn = 92;
var heightJohn = 1.95;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHeigherBMi = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s '+' '+markHeigherBMi);
*/

// if else statements
/*
var firstName = 'Aadi';
var civilStatus = 'single';

if (civilStatus === 'married'){
  console.log(firstName +' '+ 'is married!');
}else {
  console.log(firstName + ' '+ 'will hopefully marry soon :');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' ' + 'is married');
} else {
  console.log(firstName + ' ' + ' will hopefully marry soon');
}
*/

// boolean logic
/*
var firstName = 'Aadi';
var age = 16;
if (age < 11) {
  console.log(firstName + ' ' + 'is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName +' '+ ' is a teenager');
} else if (age >= 20 && age < 30) {
  console.log(firstName +' '+'is a young men');
} else
  {
    console.log(firstName + ' ' + 'is a men');
  }
  */

  // The ternary operator and swithch statements
// ternary operator
/*
var firstName = 'Aadi';
var age = 16;

age >= 18 ? console.log(firstName +' '+' drinks beer.');
 console.log(firstName + ' '+ ' drinks juice');
var drink = age>= 18 ? 'beer' : 'juice';
console.log(drink);
*/
// Switch statements
/*
var firstName = ' Aaditya '
var job = 'Aadi';
switch (job) {
  case 'Aadi':
    console.log(firstName + ' '+ 'teacher kids how to code');
    break;
  case 'driver':
    console.log(firstName + ' '+'drives in uber');
    break;
  default:
    console.log(firstName +' '+ ' does something');
} */

/* trutly and falsy values and equality ooperators */

// falasy values: undefined , null 0, ''. NaN
// truthy values: not falasy values
/*
var height;
height = 1;
if (height) {
  console.log('variable is defined');
} else {
  console.log('variable is not defined');
}
*/
// Coding Challange
/*
John and mike both play basketball in different team.in the latest 3 games. hohn's team scored 89, 120, and 103
points. while kmike;s team scored 116, 94, and 123 points.
1- calculate the average score for each team .
2- decide which teams win in average (highest average score) and print the winner to the console. also
include the average score in the output
3- then change the scores in show different winners.
don't forget to take into accoutn there might be a draw (the same average score)

4- extra: mary also plays basketball, and her team scored 97, 134 and 105 points. like before, log the average winner to the conlole,
HINT: you will need the && operator to take the decision. If you can't solve the one , just watch the solution. Itis no proble. :)
5- likes before, change the scores to generate different winner keeping in sind there night be draws.
GOOD LUCK;
*/
/*
var scoreJohn = (89 + 120 + 103)/3;
var scoreMike = (116 + 94 + 123)/3;
var scoreMary = (97 + 134 + 105)/3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John\' team wins with ' + scoreJohn +' points');
} else if (scoreMike > scoreMary && scoreMike > scoreJohn) {
  console.log(' Mike\' team wins with '+' '+ scoreMike + 'points');
}else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log('Mary\' team wins with' +' '+ scoreMary +' '+ 'points');
}else {
  console.log('there is a draw');
}
*/
/************************
* Functions
*/
/*

function calculateAge(birthYear){
  return 2018-birthYear;
}
var ageJohn = calculateAge(1999);
var ageMark = calculateAge(1948);
var ageRahul = calculateAge(1999);
console.log(ageJohn, ageMark, ageRahul);


function yearsUntilRetirment(year, firstName){
  var age = calculateAge(year);
  var retirment = 65 - age;
  if (retirment > 0) {
    console.log(firstName +' '+'retires in '+ retirment +' '+ 'years');
  }else {
    console.log(firstName + ' '+'is already retired');
  }
}
yearsUntilRetirment(1998, 'Rahul');

*/


/*************************
* Functions statements and Expression
*/

/*******************************
* Arrays
*/
// initialize nwe array
/*
var names = ['jhon', 'mark', 'jane'];
var years = new Array(1999, 1969, 1948);
console.log(names);
console.log(names.length);
names[1] = 'Ben';
names[names.length] = 'mary';
console.log(names);
 // Different data types


 var john = ['john', 'saith', 1998, 'Teacher', 'designer'];
 john.push('blue');
 john.unshift('mr.');
 console.log(john);

 john.pop();
 john.pop();
 john.shift();
 console.log(john);
 console.log(john.indexof(23));

 var isdesigner = john.indexof('designer') === -1 ? 'john is nat a designer' : 'john is a designer';
 console.log(isdesigner);
 */

/************
  coding Challange

-- john and his family want on a holiday and went to 3 different restaurants.
The bills wee $148 $48 and $268.
to tip the waiter a fair amount, john created a simple tip calculator (as a function).
he likes to tip 20% of the bill when the bill is less than $50
15% when the bill is between $50 and $200, and 20% if the bill is more than $200.
in the end, john would like to have 2 arrays:
1- containing all three tips (one for each bill)
2- containing all three final paid amounts (bill +tip).
note:
to calculate 20% of avalue , simply multiply if with 20/100 = 0.2 )

*/
/*
function tipCalculator(bill){
  var percentage;
  if( bill < 50){
    percentage = 0.2;
  }else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  }else {
    percentage = 0.1;
  }
  return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalvalues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, finalvalues);
*/

/*******************8
* object and properties
*/
// object litral
/*
var john = {
  firstName: 'john',
  lastName:'sharma',
  birthYear: 1998,
  family:['john', 'bob', 'enily'],
  jog:'teacher',
  esmerried: false
};
console.log(john);
console.log(john.firstName);
var x = 'birthYear'
console.log(john['lastName']);
john.job = 'designer'
john['isMarried'] = true;
console.log(john);
// new object syntax
var jane = new Object();
jane.firstName = 'jane';
jane.birthYear = 1969;
jane['lastName'] = 'yadav'
*/
/********************
* object and method
*/
/*
var john = {
  firstName: 'john',
  lastName:'sharma',
  birthYear: 1998,
  family:['john', 'bob', 'enily'],
  jog:'teacher',
  esmerried: false,
  calcAge: function(birthYear){ // or calcAge function() { this.age = 2016 - this.birthYear};
    return 2018 - birthYear;
  }
};
console.log(john.calcAge(1998)); // john.calcAge(); console.log(john);
*/
//coding Challange
/***************
* let's remember the first codeing callange where mark and hohn compared their
BMIs. let's now implement the same functionality with objects and method.
1- for each of them, create and object with properties for their full name, mass, and height.
2- then, add a method to each object to calculate the BMI.save the BMI to the
object they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height ). (mass in kg and height in meter).
*/
/*
var john = {
  fullName: 'John Sharma',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMi;
  }

}

var mark = {
  fullName: 'Mark Sharma',
  mass: 78,
  height: 1.69,
  calcBMI: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMi;
  }

}

//john.calcBMI();
//mark.calcBMI();
//console.log(john, mark);

if (john.calcBMI() > mark.calcBMI()){
  console.log(john.fullName + ' ' + ' has a higher BMi of' + john.BMi);
}else if (mark.BMI > john.BMI) {
  console.log(mark.fullName + ' ' + 'has a higher BmI of ' + mark.BMI);
}else {
  console.log('they have the same BMI');
}

*/

/*************************8
* loop and iteration
*/
/*
for (var i = 1; i <= 20; i+=2) {
  console.log(i);
  }

// i=0, 0<10 true, log i to console , i++
// i=1, 1<10 true, log i to the console, i++
//i=10 true, log i  to the console, i++
// i=10 . 10<10 false, exit the loop!
var john = ['john', 'sharma', 1998, 'engineering', false, 'blue'];
for(var i = 0; i < john.length; i++){
  console.log(john[i]);
}

// while loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/
/*
// continue and break statements
var john = ['John', 'Sharma', 1998, 'engineering', false, 'blue'];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}


// looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}

*/

/*******************************8
*  codding Challange
*/
/*

var john = {
  fullName: 'John Sharrma',
  bills: [124, 48, 268, 168, 42],
  calcTips: function() {
    this.tips = [];
    this.finalvalues = [];
    for (var i = 0; i < this.bills.length; i++) {
    // determine paecentage bassed on tipping rules
    var percentage;
    var bills = this.bills[i];
    if (bills < 50) {
      percentage = .2;
    } else if (bills >= 50 && bills < 200) {
      percentage = .15;
    } else {
      percentage = .1;
    }


    // add results to the corresponing array
    this.tips[i] = bills * percentage;
    this.finalvalues[i] = bills + bills * percentage;
    }
  }
}

var mark = {
  fullName: 'mark Sharrma',
  bills: [77, 475, 118, 45],
  calcTips: function() {
    this.tips = [];
    this.finalvalues = [];
    for (var i = 0; i < this.bills.length; i++) {
    // determine paecentage bassed on tipping rules
    var percentage;
    var bills = this.bills[i];
    if (bills < 100) {
      percentage = .2;
    } else if (bills >= 100 && bills < 300) {
      percentage = .1;
    } else {
      percentage = .25;
    }


    // add results to the corresponing array
    this.tips[i] = bills * percentage;
    this.finalvalues[i] = bills + bills * percentage;
    }
  }
}

function calcAverage(tips){
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(john.tips);
console.log(john, mark);

if (john.average > mark.average){
  console.log(john.fullName + '\'s family pays higher tips, with an average of s' + john.average);
}else if (mark.average > john.average) {
  console.log(mark.fullName + '\'s faluly pays higher tips with an average of s' + mark.average);
}
*/

/* *******************************8
* Lacture: HOisting

*/

/*
calculateAge(1965);

function calculateAge(year){
  console.log(2016-1965);
}

//retirement(1956);
var retirement = function(year){
  console.log(65-(2016 - year));
}

console.log(age);
var age = 23;

function foo(age){
  console.log(age);
  var age = 65;
  console.log(age);
}
foo();
console.log(age);

*/

/************************
* Scoping and scope chain

*/
/*
var a = 'Hello';
first();

function first(){
  var b = 'Hii';
  second();

  function second(){
    var c = 'Hey';
    third();
  }
}

function third(){
  var d = 'jhon';
  //console.log(c);
  console.log(a+d);
}*/

/***************************
* This keyword

*/
/*
calculateAge(1985);

function calculateAge(year){
  console.log(2016- year);
  console.log(this);
}

var john = {
  name: 'john',
  yearofBirth: 1998,
  calculateAge: function(){
    console.log(this);
    function innerfunction(){
      console.log(this);
    }
    innerfunction();
  }
}
john.calculateAge();

*/
