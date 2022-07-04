// Filter----->
// * Filter returns a new array containing array elements that matches a specified condition
// if the condition stands true it will filter out those elements and will presemt them in a new Array


let arr=[2,4,5,6,3,8,7,9]

let evenNo=arr.filter(function(n){
        return n%2==0;
})
console.log(evenNo);

