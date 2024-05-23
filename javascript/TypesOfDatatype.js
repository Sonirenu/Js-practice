//Primitive

//7 types : String, Number, Boolean, null, undefined, Symbol,BigInt

//nonPrimitive(Refference) directly allocate memory

// array,object,function

const score=100
const scoreValue=100.00
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anothetId=Symbol('123')
//console.log(id===anotherid);
const bigNumber=128789430437368335n
console.log(typeof bigNumber);

//Array, Object, Function  

const heros=["shaktiman", "naagraj","doga"];
let myObj={
    name:"renu",
    age:22,
}
const myFunction=function(){
    console.log("hello world");
}