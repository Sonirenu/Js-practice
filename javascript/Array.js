const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","naagraj"]

const myArr1=new Array(1,2,3,4)
//console.log(myArr[1]);
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift("yes")
myArr.shift()
const newArr=myArr.join()//to change type arr to string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);
 
const myAr=myArr.slice(1, 3)
// console.log(myAr);
// console.log("b", myArr);

const myAr1=myArr.splice(1, 3)
// console.log(myAr);
// console.log("c", myArr);

//Array Function

const dc_heros=["superman", "flash","batman"]
const marvel_heros=["thor","ironman","spiderman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
const allheros=marvel_heros.concat(dc_heros)
//console.log(allheros);
const all_new_heros=[...marvel_heros,...dc_heros]
//console.log(all_new_heros);
const another_arr=[1,2,3,4,[5,6],7,[3,6,[4,5]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr);
//important method
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Renu"));//convert string to array
console.log(Array.from({name: "renu"}));//op empty string. it cant convert directly 
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));