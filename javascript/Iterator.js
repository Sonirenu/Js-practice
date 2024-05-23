for (let i = 0; i < 11; i++) {
   const element = i;
    //console.log(element);
}
const age=18;
if(age<=18){
    //console.log(`eligible for vote.`);
}
else{
    //console.log(`not eligible `);
}

const coding=["js","ruby","java","python","php"]
const values=coding.forEach((item)=>{
    //console.log(item);
})
//console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=> num>4)
//console.log(newNums);
//if we are using scope it is necessary to use return keyword 
const newNums1=myNums.filter((num)=>{
    return num>4
})
//console.log(newNums1);
const newNums2=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums2.push(num)
    }
})
//console.log(newNums2);

const books=[
    {title:`Book One`, genre:`Fiction`, publish:1981, edition:2004
    },
    {title:`Book Two`, genre:`Non-Fiction`, publish:1981, edition:2004
    },
    {title:`Book Three`, genre:`History`, publish:1982, edition:2005
    },
    {title:`Book Four`, genre:`Non-Fiction`, publish:1983, edition:2006
    },
    {title:`Book Five`, genre:`Science`, publish:1984, edition:2007
    },
    {title:`Book Six`, genre:`Fiction`, publish:1985, edition:2008
    },
    {title:`Book Seven`, genre:`History`, publish:1986, edition:2009
    },
    {title:`Book Eight`, genre:`Fiction`, publish:1987, edition:2001
    },
]
let useBooks=books.filter((bk)=>bk.genre===`History`)
//console.log(usebooks);
useBooks=books.filter((bk)=>{
    return bk.publish>=1985 && bk.genre==='History'
})
//console.log(useBooks);

const newNums3=myNums.map( (num)=> num+10)//ise scope me bhi declare kr skte h
//console.log(newNums3);
//chaining
const newNums4=myNums
                  .map( (num)=>num*10)
                  .map( (num)=>num+1)
                  .filter((num)=>num>=40)
//console.log(newNums4);

//reduce

// const myTotal=myNums.reduce( function(acc, curValue){
//     console.log(`acc:${acc} and curValur: ${curValue}`);
//         return acc+curValue
// },0)

const myTotal=myNums.reduce( (acc, curr)=>acc+curr,0)
console.log(myTotal);

const myItems=[{
    itemName:"java",
    price:2999
},
{
    itemName:"jQuery",
    price:3999
},
{
    itemName:"python",
    price:4999
},
{
    itemName:"javaScript",
    price:5999
},]

const Total=myItems.reduce( (acc, item)=> acc+item.price,0)
console.log(Total);