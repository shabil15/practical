// Create a function to merge two sorted arrays into a single sorted array

function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0
    let mergedArray = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i])
            i++
        } else {
            mergedArray.push(arr2[j])
            j++
        }
    }
    // Add remaining elements from arr1, if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2, if any
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage
const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
