function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink=="coffee")
            resolve('order placed')
        else
            reject('order rejected')
    });
}

// placeOrder("coffee").then(function(order){
//     console.log(order);
// }).catch(function(error){
//     console.log(error);
// })

function processOrder(order){
        return new Promise((resolve)=>{
            resolve(`${order} place and served`)
        })
}


placeOrder("coffee").then(function(orderStatus){
    console.log(orderStatus);
    let orderIsProcessed=processOrder(orderStatus);
    return orderIsProcessed;

}).then(function(servedOrder){
    console.log(servedOrder);
}).catch(function(error){
    console.log(error)
})