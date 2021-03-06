const arr=[1,2,3,4,5];
//length property
console.log(arr.length);
//Array.isArray()
console.log(Array.isArray(arr));
//instanceof
console.log(arr instanceof Array);
//toString()
console.log(arr.toString());
//join()
console.log(arr.join(""));
//pop()
console.log(arr.pop());
console.log(arr);
arr.push(7);
console.log(arr);
//shift()
console.log(arr.shift());
//unshift
arr.unshift(7);
console.log(arr);
//delete
delete arr[0];
console.log(arr);
console.log(arr[0]);

const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];
//concat()
console.log(arr1.concat(arr2));
//splice()
console.log(arr);
arr.splice(0,0,1);
console.log(arr);
arr.splice(1,1);
console.log(arr);
arr.splice(4,1,5,6);
console.log(arr);
//slice()
console.log(arr.slice(1));
console.log(arr.slice(2,4));
//Sorting an Array
const numArr=[6,1,8,3,7,2,5,4];
//sort()
console.log(numArr.sort());
console.log(numArr);
console.log(numArr.reverse());
console.log(numArr);
const numArr1=[6,1,8,3,7,2,5,4];
console.log(
    numArr1.sort(function(a,b){
        return a-b;
    })
);
console.log(numArr1);
console.log(
    numArr1.sort(function(a,b){
        return b-a;
    })
);
//Math.max.apply
var a = function maxOfArr(arrr){
    return Math.max.apply(null, arrr);
}
console.log(a(numArr1));
//Math.min.apply
var b = function maxOfArr(arrr){
    return Math.min.apply(null, arrr);
}
console.log(b(numArr1));
//forEach()
let samArr=[1,2,3,4,5];
samArr.forEach((element,index)=>{
    return console.log(element);
})
//map()
console.log(
    samArr.map((element,index)=>{
        return element*2;
    })
)
//filter()
console.log(
    samArr.filter((element,index)=>{
        return element>3;
    })
)
//reduce()
console.log(
    samArr.reduce((acc,element)=>{
        return acc+element;
    })
)
//reduceRight()
console.log(
    samArr.reduceRight((acc,element)=>{
        return acc+element;
    })
)
//every()
console.log(
    samArr.every((element,index)=>{
        return element<=5;
    })
)
//some()
console.log(
    samArr.some((element,index)=>{
        return element>=5;
    })
)
let samArr1=[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];
//indexOf()
console.log(
    samArr1.indexOf(5)
)
//lastIndexOf()
console.log(
    samArr1.lastIndexOf(5)
)
//find()
console.log(
    samArr.find((element,index)=>{
        return element>3;
    })
)
//findIndex()
console.log(
    samArr.findIndex((element,index)=>{
        return element>3;
    })
)
//Array.from()
console.log(
    Array.from("kameswari")
)
//includes()
console.log(
    samArr.includes(5)
)