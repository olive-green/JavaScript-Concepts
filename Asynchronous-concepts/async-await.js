function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink=="coffee")
            resolve('order placed')
        else
            reject('order rejected')
    });
}

function processOrder(order){
        return new Promise((resolve)=>{
            resolve(`${order} place and served`)
        })
}
//we uses async-await to reduce promise chaining.
//async keyword tells us that this function is asynchronous and is processed later

async function servedOrder(){
    try{//we should use to try and catch block to handle promise rejection 
        let orderStatus= await placeOrder("tea"); //this await keyword waits for this promise output ie. resolved or rejected
        console.log(orderStatus);
        let orderServed=await processOrder(orderStatus);
        console.log(orderServed);
    }
    catch(error){
        console.log(error);
    }
}

servedOrder()
