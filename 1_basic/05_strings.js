const name = "Akshay"
const repoCount = 50;
// console.log(name + repoCount + "Value");
console.log(`Hello my Name is ${name.toLowerCase()} and my repo count is ${repoCount}`);

const gName = new String('Kapse');
//console.log(gName[3]);
//console.log(gName.__proto__);
//console.log(gName.charAt(2));
//console.log(gName.indexOf('p'));
//const newString = gName.substring(1,4);
//console.log(newString);

const anotherString = gName.slice(-5,3);
console.log(anotherString);

const newStringOne = "   Akshay   ";
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://akshay.com/akshay%20kapse";
console.log(url.replace('%20','_'));

console.log(url.includes('kapse'))
console.log(url.includes('20%'))

const newStringTwo = new String('Akshay-Tanaji-Kapse');
console.log((newStringTwo.split('-'))[1])