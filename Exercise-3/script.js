// LEVEL-1


var empty = [];
console.log(empty);

var array = [0,1,2,3,4,5,6,7];
console.log(array.length);

var array1 = [0,1,2,3,4,5,6];
console.log(array1[0], array1[Math.floor((array1.length)/2)], array1[array1.length-1]);

var mixedDataTypes = [1, 'Raj', '2', 55, 'seven', 0];
console.log(mixedDataTypes.length);

var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(itCompanies[0], itCompanies[Math.floor((itCompanies.length)/2)], itCompanies[itCompanies.length-1]);


for(let i = 0 ; i < itCompanies.length ; i++) {
    console.log(itCompanies[i]+"\n");
}


for(let i = 0 ; i < itCompanies.length ; i++) {
        console.log(itCompanies[i].toUpperCase());
    }

console.log(itCompanies.join(", ")+" are big IT companies.");

var company = window.prompt("Enter the name of the company :");
if(itCompanies.includes(company)) console.log(company);
else console.log(company+' is Not found.');

console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(3,itCompanies.length));

console.log(itCompanies.slice(0,itCompanies.length-3));

console.log(itCompanies.slice(Math.floor(itCompanies.length/2), (Math.floor(itCompanies.length/2))+1));
 
itCompanies.shift();
console.log(itCompanies);

delete itCompanies[Math.floor(itCompanies.length/2)];
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

// LEVEL-2


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
var newt = text.replace(/[.,]/g, "");
console.log(newt.split(" "));
console.log(newt.split(" ").length);


const shoppingCart1 = ['Milk', 'Coffee', 'Tea', 'Honey']
if(shoppingCart1.includes('Meat')) {
    console.log(shoppingCart1);
}
else {
    shoppingCart1.unshift('Meat');
    console.log(shoppingCart1);
}


const shoppingCart2 = ['Milk', 'Coffee', 'Tea', 'Honey']
if(shoppingCart2.includes('Sugar')) {
    console.log(shoppingCart2);
}
else {
    shoppingCart2.push('Sugar');
    console.log(shoppingCart2);
}


const shoppingCart3 = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart3.pop();
console.log(shoppingCart3);


const shoppingCart4 = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart4[2] = "Green Tea";
console.log(shoppingCart4);


var countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
if(countries.includes('Ethiopia')) console.log('ETHIOPIA');
else countries.push('Ethiopia'); console.log(countries);


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  if(webTechs.includes('Sass')) console.log('Sass is CSS preprocess.');
  else webTechs.push('Sass'); console.log(webTechs);


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// LEVEL-3


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

sortAges = ages.sort();
console.log(sortAges);
console.log("Min Age: "+sortAges[0]+"\n"+"Max Age: "+sortAges[sortAges.length-1]);

var n = ages.length;
let sorted = ages.sort();
if(n % 2 != 0) {
    console.log(sorted[Math.floor(n/2)]);
}
else if(n % 2 == 0) {
    console.log(sorted[Math.floor(n/2)], sorted[Math.floor(n/2)+1]);
}

let sum = 0;
for(let i = 0 ; i < ages.length ; i++) {
    sum = sum + ages[i];
}
let average = sum / ages.length;
console.log(average);

let range = sortAges[sortAges.length-1] - sortAges[0];
console.log(range);


var countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
console.log(countries.slice(0,10));


var n = countries.length;
if(n % 2 != 0) {
    console.log(countries[Math.floor(n/2)]);
}
else if(n % 2 == 0) {
    console.log(countries[Math.floor(n/2)], countries[Math.floor(n/2)+1]);
}


let len = countries.length;
if(len % 2 == 0) {
    let first = countries.slice(0, len/2 );
    console.log(first);
    let second = countries.slice(len/2 , len);
    console.log(second);
}
else if(len % 2 != 0) {
    let first = countries.slice(0, len/2 + 1);
    console.log(first);
    let second = countries.slice(len/2 + 1, len);
    console.log(second);
}