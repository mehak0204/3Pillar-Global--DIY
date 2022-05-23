//LEVEL-1

var challenge;
challenge = "30 Days Of JavaScript\n";
var company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
var sentence = "You cannot end a sentence with because because because is a conjunction";
let a = "30 Days Of";
let b = "JavaScript";


window.alert(challenge);
 
console.log(challenge);
 
window.alert(challenge.toUpperCase());
 
window.alert(challenge.toLowerCase());
 
window.alert(challenge.substring(2, 21));
 
window.alert(challenge.includes('Script'));
 
window.alert(challenge.substring(0, 2));

window.alert(challenge.split(''));
 
window.alert(challenge.split(' '));
 
console.log(company.split(','));
 
window.alert(challenge.replace("JavaScript", "Python"));
 
console.log(challenge.charAt(15));
 
console.log(challenge.charCodeAt("J"));
 
console.log(challenge.indexOf('a'));
 
console.log(challenge.lastIndexOf('a'));
 
console.log(sentence.indexOf('because'));
 
console.log(sentence.lastIndexOf('because'));
 
console.log(sentence.search('because'));
 
console.log(challenge.trim());
 
console.log(challenge.startsWith('30'));
 
console.log(challenge.endsWith('JavaScript'));

console.log(challenge.match('a'));
 
console.log(a.concat(" ", b));
 
console.log(challenge.repeat(2));

//LEVEL -2 


console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
 
console.log('"'+"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."+'"')


x = typeof(10);
console.log(x == 10)
x = 10;
console.log(x)

x = parseFloat(9.8);
console.log(x);
console.log(Math.ceil(x));


x = ["python", "jargon"];
for(let i = 0 ; i < x.length ; i++){
    if(x[i].match("on")) console.log(true);
    else console.log(false);
}

x = "I hope this course is not full of jargon."
if(x.match("jargon")) console.log(true);
else console.log(false);

function random(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min;
}

console.log(random(0,100));

console.log(random(50,100));

console.log(random(0,255));

 
str = 'JavaScript';
console.log(Math.random(str).toString(5).slice(2));
 
console.log(" 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125");

 
str = "You cannot end a sentence with because because because is a conjunction"
arr = str.split(" ");
list = arr.slice(6,9);
console.log(list.join(" "));

//LEVEL-3

 
str = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(str.split('love').length);


str = 'You cannot end a sentence with because because because is a conjunction.';
console.log((str.match(/because/g) || []).length);


const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
str = sentence.replace("&", "");
console.log(str);

 
const str = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const arr  = str.match(/\d+/g);
const income = (+arr[0] + +arr[2]) * 12 + +arr[1];
console.log(income);