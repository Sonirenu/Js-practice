//singleton object

//object literals
const mySym=Symbol("key1")
const jsUser={
    name:"Renu",
    "full name":"Renu Soni",
    [mySym]:"Rewa",
    age:18,
    location:"jaipur",
    email:"Renu@123"
}
//two ways of access value of identifier
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
jsUser.email="Renu@chatgpt123"
//Object.freeze(jsUser)
jsUser.email="Renu@123.com"//can'nt change bcz value is freeze
//console.log(jsUser);
jsUser.greeting=function(){
   // console.log("Hello js user");
}
jsUser.greeting2=function(){
    //console.log(`Hello js user, ${this.name}`);
}
//console.log(jsUser.greeting());
//console.log(jsUser.greeting2());

//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="samy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));

const regularUser={
    email:"soni@123.com",
    fullname:{
        userName:{
            firstname:"renu",
            lastname:"soni",
        }
    }
}
//console.log(regularUser.fullname.userName.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a",4:"b"}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3);

const course={
    name:"js in hindi",
    price:"999",
    courseInstructor: "Renu"
}
const{courseInstructor}=course
//console.log(courseInstructor);
const{courseInstructor:Instructor}=course
//console.log(Instructor);

//API

