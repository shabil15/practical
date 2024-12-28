function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const midd = Math.floor(arr.length / 2);
    const left = arr.slice(0,midd)
    const right = arr.slice(midd);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let sortedArr=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift());
        }else{
            sortedArr.push(right.shift());
        }
        }
        return [...sortedArr, ...left, ...right];
    }

     const arr = [-4,7,1,-2,10,0]
console.log(mergeSort(arr));