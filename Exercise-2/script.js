// LEVEL -1


let lastName = 'Finnch';
let country = 'Canada';
let age = '24';
let isMarried = true;
let year = 2020;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));


var x = 10;
console.log(Boolean(typeof(x)));


console.log(Boolean(parseInt(9.8) == 10));

var x = 1;
let y = '200012155225';

console.log(Boolean([]));
console.log(Boolean(x));
console.log(Boolean(y));
var a;

console.log(Boolean(a));
console.log(Boolean(false));
console.log(Boolean(0));


var a = 4 > 3;
console.log(a);
var b = 4 >= 3;
console.log(b);
var c = 4 < 3;
console.log(c);
var d = 4 <= 3;
console.log(d);
var e = 4 == 4;
console.log(e);
var f = 4 === 4;
console.log(f);
var g = 4 != 4
console.log(g);
var h = 4 !== 4;
console.log(h);
var i = 4 != '4';
console.log(i);
var j = 4 == '4';
console.log(j);
var k = 4 === '4';
console.log(k);


var x = 4 > 3 && 10 < 12;
console.log(x);
var yx = 4 > 3 && 10 > 12;
console.log(yx);
var z = 4 > 3 || 10 < 12;
console.log(z);
var a = 4 > 3 || 10 > 12;
console.log(a);
var b = !(4 > 3);
console.log(b);
var c = !(4 < 3);
console.log(c);
var d = !(false);
console.log(d);
var e = !(4 > 3 && 10 < 12);
console.log(e);
var f = !(4 > 3 && 10 > 12)
console.log(f);
var g = !(4 === '4');
console.log(g);
var h = ['dragon', 'python'];
for(let i = 0 ; i < h.length ; i++) {
    console.log(Boolean(!(h[i].match('on'))));
}


console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
var date = new Date(1970, 1, 1, 00, 00, 00, 00);
var sec = Math.floor(date/1000);
console.log(sec);

// LEVEL-2


var base = window.prompt("Enter base :");
var height = window.prompt("Enter height :");
var area = 0.5 * base * height;
document.write(area);


var side1 = window.prompt("Enter side 1 :"); 
var side2 = window.prompt("Enter side 2 :");
var side3 = window.prompt("Enter side 3 :");
var perimeter = (parseInt(side1) + parseInt(side2) + parseInt(side3));
console.log(perimeter);


var side1 = window.prompt("Enter side1");
var side2 = window.prompt("Enter side2");
var area = (side1 * side2);
var perimeter = (parseInt(side1) + parseInt(side2));
console.log(area);
console.log(perimeter);


var radius = window.prompt("Enter radius :");
const pi = 3.14;
var area = (pi * radius * radius);
var circumference = (2 * pi * radius);
console.log(area);
console.log(circumference);


var x1 = 2;
var x2 = 6;
var y1 = 2;
var y2 = 10;

var qw = (y2-y1)/(x2-x1);
console.log(m);


var hrs = window.prompt("Enter hours :");
var rate = window.prompt("Enter rates per hours :");
var earning = hrs*rate;
window.alert(earning);


const sname = window.prompt("Enter your name :");
if(sname.length > 7) window.alert("Name too long");
else window.alert("Name is short");


let fname = window.prompt("Enter your first name :");
let lname = window.prompt("Enter your last name :");
if(fname.length > lname.length) window.alert("Your first name, "+fname+" is longer than your family name, "+lname);
else window.alert("Your family name, "+lname+" is longer than your first name, "+fname);


let myAge = "40";
let yourAge = "22";
document.write("I am "+(myAge-yourAge)+" years older than you.")


let years1 = window.prompt("Enter the year of birth :");
let now1 = new Date().getFullYear();
if(now1-years1 >= 18) document.write("You are "+(now1-years1)+" years old. You are old enough to drive.");
else document.write("You are "+(now1-years1)+" years old. You are allowed to drive after "+(18 - (now1-years1))+" years.");


let years = window.prompt("Enter the year you live :");
let sec = years*365*24*60*60;
document.write(sec);


var now = new Date();
const yearss = now.getFullYear() 
const month = now.getMonth() + 1 
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes() 
console.log(`${yearss}-${month}-${date} ${hours}:${minutes}`);


console.log(`${date}-${month}-${yearss} ${hours}:${minutes}`);


console.log(`${date}/${month}/${yearss} ${hours}:${minutes}`);

// LEVEL-3

var now = new Date();
var yearLevel3 = now.getFullYear() // return year
var monthLevel3 = now.getMonth() + 1 // return month(0 - 11)
var date = now.getDate() // return date (1 - 31)
var hoursLevel3 = now.getHours() // return number (0 - 23)
var minutesLevel3 = now.getMinutes() // return number (0 -59)

if(hoursLevel3<10) {hoursLevel3 = '0'+hours};
if(minutesLevel3<10) {minutesLevel3 = '0'+minutesLevel3};
console.log(`${date}-${monthLevel3}-${yearLevel3} ${hoursLevel3}:${minutesLevel3}`);
