const P = new Promise((resolve,reject)=>{
    const crealelistingMAX = 6
    if (crealelistingMAX>6)
        {resolve("you can create 6 listing")
        }
     else(reject("you can not create 6 listing"))   
})
P.then((msg)=>{
    console.log(" message"+msg)
})
.catch((msg)=>{
    console.log("message "+msg)
})