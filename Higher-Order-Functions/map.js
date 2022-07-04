//functions which operates on another functions are called higher order functions
//they recieves a  function as a input and operate on them return a function as a output

//examples are map,filter, reduce,find , findIndex, some & every

// 1. Map 
//Map is itslef a function.
//map takes a callback function as an arg
//map will call the callback functions as many times as the elements in the array
//map will process every value and will apply the instruction that is inside the callback function
//map returns a new array

let arr=[2,5,9,10,11]

let squaredArr= arr.map(function(n){
    return n*n;
})

console.log(squaredArr); //[ 4, 25, 81, 100, 121 ]

let nameArr = ["Aniket Raj", "Nayan Jha", "Prashant Pandey"];
//use map method and separated every element according to firstName and lastName
let separatedFirstNdLast= nameArr.map(function(name){
    let partsofName=name.split(' '); //it split the element everytime it encounters space and add it to new array and return it
    return partsofName;
})

console.log(separatedFirstNdLast); //[ [ 'Aniket', 'Raj' ], [ 'Nayan', 'Jha' ], [ 'Prashant', 'Pandey' ] ]

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;
//convert the transactions amount to dollar
convertedValue= transactions.map(function(n){
    return (n/inrtToUsd).toFixed(2);
})
console.log(convertedValue);