//some of all the numbers from 1 to 10;

let arr=[1,2,3,4,5,6,7,8,9,10];

let ans=arr.reduce(function(previousValue,currentValue){
    return previousValue+currentValue;
},0) // this reduce takes second parameter as initial value of previous value parameter in callback function
console.log(ans);