const myPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Hello, Promise!')
    },2000)
})

myPromise.then(data => {
    console.log(data)
})