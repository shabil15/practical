function binarySearch(arr,v){
    return search(arr,v,0,arr.length-1)
}

function search(arr,v,left,right){
    if(left>right) return false
    let mid = Math.floor((left+right)/2)
    if(arr[mid]===v) return mid
    if(arr[mid]>v){
        return search(arr,v,left,mid-1)
    }else{
        return search(arr,v,mid+1,right)
    }

}

const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(binarySearch(arr,6));