function sayMyName(){
    // console.log("r");
    // console.log("e");
    // console.log("n");
    // console.log("u");
}
sayMyName()

function addNumbers(num1,num2){
    //console.log(num1+num2);
}
 const result=addNumbers(10,50)
 //console.log(result);
 function addNum(n1,n2){
     //let res=n1+n2
     //console.log();
     //return res
     return n1+n2
 }
 const res=addNum(16,19)
 //console.log("Result: ",res);

    function loginUserMessage(username="sam"){

      //function loginUserMessage(username){
    //if(!undefined)
    if(username===undefined){
        console.log("Please enter the name ");
        return
    }
    return `${username} just logged in`
 }
 console.log(loginUserMessage());
 //console.log(loginUserMessage("renu"));

 //function calculatePrice(num1){
    //function calculatePrice(...num1){//rest operator
    function calculatePrice(val1,val2,...num1){


    return num1
 }
 console.log(calculatePrice(200,300,400,500,600));


const user={
    username:"Renu",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"sam",
    price:300
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));