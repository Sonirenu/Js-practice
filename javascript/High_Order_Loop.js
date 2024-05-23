const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}
const greetings="Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet} `);
}
//Maps

const map = new Map()
map.set('IN', "india")
map.set('UK',"Uttrakhand")
map.set('USA',"United State Of America")
map.set('IN', "india")

//console.log(map);
//for (const key of map) {
    for (const [key,value] of map) {
        //console.log(key,':-',value);
    }
   // console.log(key);

   const myObject={
    game1:'NFS',
    game2:'Spiderman',
   }
//    for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// } error it is not iterable
for (const key in myObject) {
    //console.log(key,':-',value);
    //console.log(key);
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming=["js","cpp","css","html"]
for (const key in programming) {
   // console.log(key);
    //console.log(programming);
        
    }
//}
// programming.forEach( function (item) {
//         console.log(item);
// } )
//  programming.forEach((item)=>{
//     console.log(item);
//  })
function printMe(item){
    //console.log(item);
}
programming.forEach(printMe)

programming.forEach( (item, index, arr)=> {
    //console.log( item, index, arr );
}  )

const myCoding=[{
    langName:"js",
    fileName:"javascript"
},
{
langName:"css",
    fileName:"cascadind style sheet"
},
{
    langName:"html",
        fileName:"hyper html"
    }
]
myCoding.forEach(  (item)=>{
   // console.log(item);
   console.log(item.fileName);
}  )