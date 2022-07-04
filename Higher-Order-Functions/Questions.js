let arr = [
{name: "A", age: 14, gender: "M"},
{name: "B", age: 34, gender: "M"},
{name: "C", age: 24, gender: "F"},
{name: "D", age: 44, gender: "F"},
{name: "E", age: 44, gender: "M"},
{name: "I", age: 28, gender: "F"},
{name: "G", age: 36, gender: "M"},
{name: "H", age: 47, gender: "F"}
]
//we have to create a new array in which we only have age of all females

let ans=arr.filter(function(obj){
    return obj.gender=="F";
})
ans=ans.map(function(obj){
    return obj.age;
})
console.log(ans);

//we can combine above both method together , this process is called chaining .
let ladiesAge=arr.filter(function(obj){
    return obj.gender=="F";
}).map(n =>{
    return n.age;
})
console.log(ladiesAge);