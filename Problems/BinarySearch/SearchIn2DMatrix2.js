/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix (matrix, target) {
    let rowLen = 0, colLen = matrix[0].length - 1;

    while (colLen >= 0 && rowLen < matrix.length) {
        if (matrix[rowLen][colLen] === target) return true;

        if (matrix[rowLen][colLen] > target) {
            colLen--;
        } else {
            rowLen++;
        }
    }

    return false;

};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5)); //true
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],20)); //false
