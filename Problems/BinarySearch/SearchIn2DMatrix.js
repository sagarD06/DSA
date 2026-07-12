/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix (matrix, target) {
    let rowLen = matrix.length - 1, colLen = matrix[0].length - 1;
    let startRow = 0, endRow = rowLen;

    while (startRow <= endRow) {
        const midRow = startRow + Math.floor((endRow - startRow) / 2);
        if (matrix[midRow][0] <= target && matrix[midRow][colLen] >= target) {
            let start = 0, end = colLen;
            while (start <= end) {
                const mid = start + Math.floor((end - start) / 2);
                if (matrix[midRow][mid] === target) return true;

                if (matrix[midRow][mid] > target) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }

        if (matrix[midRow][0] > target && matrix[midRow][colLen] > target) {
            endRow = midRow - 1
        } else {
            startRow = midRow + 1;
        }
    }

    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3)); //true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13)); //false
