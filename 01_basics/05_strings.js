const name = "Reenu"
const repoCount = 5

//console.log(name + repoCount+ " Value"); //Reenu5 Value (this is outdated method)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //output is : Hello my name is Reenu and my repo count is 5

// Another way to define string
const gameName = new String('reenu-bishnoi')//here new keyword is used as it is an object in string and String() is the constructor
//
console.log(gameName[0]); //r
//console.log(gameName.__proto__);//output : {}
//console.log(gameName.length); //12
//console.log(gameName.toUpperCase()); // REENUBISHNOI

console.log(gameName.charAt(2)); //e
console.log(gameName.indexOf('u')); // 4

const newstring = gameName.substring(0,3)
console.log(newstring); // ree

const anotherString = gameName.slice(-5,10)
console.log(anotherString); //shn

const newStringOne = "    Reenu"
console.log(newStringOne); // output :    Reenu
console.log(newStringOne.trim());//output :Reenu

// read documentation :  trim javascript mdn
// also read documentation :  string javascript mdn
// i can check all string methods on google console

const url = "https://Reenu.com/Reenu%20bishnoi"
console.log(url.replace('%20','-')); //output : https://Reenu.com/Reenu-bishnoi

console.log(url.includes('hello')); //false

console.log(gameName.split('-'));//[ 'reenu', 'bishnoi' ]
