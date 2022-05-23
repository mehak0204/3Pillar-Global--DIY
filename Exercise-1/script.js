//LEVEL-1

var challenge;
challenge = "30 Days Of JavaScript\n";
var company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
var sentence = "You cannot end a sentence with because because because is a conjunction";
let a = "30 Days Of";
let b = "JavaScript";

//1.
window.alert(challenge);
//2. 
console.log(challenge);
//3. 
console.log(challenge.length);
//4. 
window.alert(challenge.toUpperCase());
//5. 
window.alert(challenge.toLowerCase());
//6. 
window.alert(challenge.substring(2, 21));
//7. 
window.alert(challenge.includes('Script'));
//8. 
window.alert(challenge.substring(0, 2));
//9. 
window.alert(challenge.split(''));
//10. 
window.alert(challenge.split(' '));
//11. 
console.log(company.split(','));
//12. 
window.alert(challenge.replace("JavaScript", "Python"));
//13. 
console.log(challenge.charAt(15));
//14. 
console.log(challenge.charCodeAt("J"));
//15. 
console.log(challenge.indexOf('a'));
//16. 
console.log(challenge.lastIndexOf('a'));
//17. 
console.log(sentence.indexOf('because'));
//18. 
console.log(sentence.lastIndexOf('because'));
//19. 
console.log(sentence.search('because'));
//20. 
console.log(challenge.trim());
//21. 
console.log(challenge.startsWith('30'));
//22. 
console.log(challenge.endsWith('JavaScript'));
//23. 
console.log(challenge.match('a'));
//24. 
console.log(a.concat(" ", b));
//25. 
console.log(challenge.repeat(2));

//LEVEL -2 

// 1. 
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2.  
console.log('"'+"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."+'"')

// 3. 
x = typeof(10);
console.log(x == 10)
x = 10;
console.log(x)

// 4. 
x = parseFloat(9.8);
console.log(x);
console.log(Math.ceil(x));

// 5. 
x = ["python", "jargon"];
for(let i = 0 ; i < x.length ; i++){
    if(x[i].match("on")) console.log(true);
    else console.log(false);
}

// 6. 
x = "I hope this course is not full of jargon."
if(x.match("jargon")) console.log(true);
else console.log(false);

function random(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min;
}
// 7. 
console.log(random(0,100));
// 8. 
console.log(random(50,100));
// 9. 
console.log(random(0,255));

// 10. 
str = 'JavaScript';
console.log(Math.random(str).toString(5).slice(2));

// 11. 
console.log(" 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125");

// 12. 
str = "You cannot end a sentence with because because because is a conjunction"
arr = str.split(" ");
list = arr.slice(6,9);
console.log(list.join(" "));

//LEVEL-3

// 1. 
str = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(str.split('love').length);

// 2. 
str = 'You cannot end a sentence with because because because is a conjunction.';
console.log((str.match(/because/g) || []).length);

// 3.
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
str = sentence.replace("&", "");
console.log(str);

// 4. 
const str = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const arr  = str.match(/\d+/g);
const income = (+arr[0] + +arr[2]) * 12 + +arr[1];
console.log(income);