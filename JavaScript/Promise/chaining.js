const promise1 = new Promise((res)=>setTimeout(()=>res('one'),1000));
const promise2 = new Promise((res)=>setTimeout(()=>res('two'),1000));
const promise3 = new Promise((res)=>setTimeout(()=>res('three'),1000));

Promise.all([promise1, promise2, promise3]).then(msg=>console.log(msg));

