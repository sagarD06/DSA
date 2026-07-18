/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalRectangle (matrix) {
    if (matrix.length < 1) return 0;
    const res = new Array(matrix[0].length).fill(0);

    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '1') res[j]++
            else res[j] = 0
        }
        const stack = [];
        for (let k = 0; k <= res.length; k++) {
            let h = k < res.length ? res[k] : 0;
            while (stack.length && res[stack.at(-1)] >= h) {
                let height = res[stack.pop()];
                let left = stack.length ? stack.at(-1) : -1;
                let area = height * (k - left - 1);

                if (area > max) max = area;
            }
            stack.push(k);
        }

    }

    return max;
};

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])); //6
console.log(maximalRectangle([["0"]])); //0
