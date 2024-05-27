const promise = new Promise((resolve, reject)=>{
    const sum = 1+4;
    if (sum==2)
      resolve("yes")
    else
    reject("no")

})

promise.then((msg)=>{
    console.log("message "+msg)
})
.catch((msg)=>{
    console.log("message "+msg)
})