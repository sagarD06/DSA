// A function that calls itself;

//BASE CASE: the case for which we know the answer what shoykd we return

//Factorial of a number n is the product of all positive integers less than or equal to n
function factorial(n){
    if(n===0) return 1;
    return n * factorial(n-1);
}

// console.log(factorial(5)); // 120

//Fibonacci sequence: each number is the sum of the two preceding ones, starting from 0 and 1
function fibonacci(n){
    if(n===0) return 0;
    if(n===1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

// console.log(fibonacci(6)); // 8

//Binary search: search a sorted array by repeatedly dividing the search interval in half

function binarySearch(arr,tar,st,en){
    if(st<=en){
        let mid = st + Math.floor((en-st)/2);
        if(arr[mid]===tar) return mid;
        if(arr[mid]>tar) return binarySearch(arr,tar,st,mid-1);
        return binarySearch(arr,tar,mid+1,en);
    }
}
function search(arr,target){
    let st = 0, n = arr.length, en = n-1;
    return binarySearch(arr,target,st,en);
}

console.log(search([1,2,3,4,5,6,7,8,9],5)); // 4