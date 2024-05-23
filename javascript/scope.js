var c=300
let b=200
const a=100
if(true){
    var c=30
    let b=20
    const a=10
}
// console.log(a);
// console.log(b);
// console.log(c);

//nested scope
function one(){
    const username="renu"

    function two(){
        const website="youtube"
        console.log(username);
    }
 //console.log(website);//scpoe error
two()
}
one()
//interesting
console.log(addone(5));
function addone(num){
    return num+1
}
//console.log(addone());
//console.log(addtwo(5));//return error
const addtwo=function(num){
    return num+2
}
console.log(addtwo(5));


