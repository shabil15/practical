const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej('Something went wrong')
    },3000)
})

promise.then(data => console.log(data)).catch(err => console.log(err))