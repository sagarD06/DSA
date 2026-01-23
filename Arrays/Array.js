//creating an array
const array = [1, 2, 3, 4, 5];
const arr2 = new Array(5).fill(0); // [0, 0, 0, 0, 0]
const arr3 = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5] index array starting from 1
const arr4 = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

//accessing elements
console.log(array[0]); // 1
console.log(array[1]); // 2
console.log(array.at(1)); // 2

//adding elements
array.push(6); // adds 6 to the end of the array
array.unshift(0); // adds 0 to the beginning of the array
console.log(array); // [1, 2, 3, 4, 5, 6]

//insert at index
array.splice(2, 0, 10); // inserts 10 at index 2
console.log(array); // [2, 3, 10, 4, 5]

//removing elements
array.pop(); // removes the last element
array.shift(); // removes the first element
// console.log(array); // [2, 3, 4, 5]

// updating array
array[0] = 7; // updates index 0 to 7
array[2] = 8; // updates index 2 to 8
//if all elemnets need an update use map.

//remove at index
array.splice(2, 1); // removes 1 element at index 2
console.log(array); // [2, 3, 4, 5]

//iterating over an array
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // 2, 3, 4, 5
}

for(const value of array){
  console.log("Value is ", value); // 2, 3, 4, 5
}

//sorting an array
array.sort((a,b)=>a-b); // sorts the array in ascending order
console.log(array); // [2, 3, 4, 5]
array.sort((a,b)=>b-a); // sorts the array in descending order
console.log(array); // [5, 4, 3, 2]