//types of datatypes on basis of how data is accessed and stored in memory 
// Primitive and Non- Primitive

//Primitive - call by value (means copy is passed, it doesn't change actual value)
// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
// id and anotherId  are not same because we used symbol keyword here it is used for uniqueness
//checking
console.log(id==anotherId); // false

const bigInt = 1223454657653n


// Reference (Non primitive)

// Array, Objects, Functions

//Array:
const heros = ['shaktiman','naagraj','doga']

// Objects:
let myObj = {
    name : 'Reenu',
    age : 20

}
const myFunction = function(){
    console.log("hlo world");
    
}
console.log(typeof myFunction); //function (it is called object function)
console.log(typeof heros); //object

console.log(typeof myObj); //object

// every non-primitiva ka we got object as type
 
// revise below for interviews

// javascript is dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

// Primitive Datatypes:
 /*           Type                                 typeof

i)            Number                               number
ii)           String                               string
iii)          Boolean                              boolean
iv)           Bigint                               bigint
v)            Symbol                               symbol
vi)           Null                                 object
vii)          Undefined                            undefined */

// Non- Primitive or Reference or Object datatype
/*               Type                                  typeof

i)               Object                                object
ii)              Array                                 object
iii)             Function                              function(object)
*/