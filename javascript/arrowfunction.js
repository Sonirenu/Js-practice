//this keyword
// this keyword global execution context hota h->{}

const user={
    username:"renu",
    price:999,
    welcomeMessage:function(){
        //console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
//console.log(this);

const chai=function(){
    let username="hitesh"
    //console.log(this);
    //console.log(this.username);//undefined

}

// const chai=()=>{
//     let username="hitesh"
//     //console.log(this);
//     console.log(this.username);//undefined

// }
chai()

//ARROW FUNCTION
// const addtwo=(num1,num2) => {
//     return num1+num2
// }

//implicit return
const addtwo=(num1,num2) =>  num1+num2
const addthree=(num1,num2) =>  (num1+num2)
const addfour=(num1,num2) => ({username:"hitesh"})
console.log(addtwo(3,4));
console.log(addthree(6,9));
console.log(addfour());

//Note:-