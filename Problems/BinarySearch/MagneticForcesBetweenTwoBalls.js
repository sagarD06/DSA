/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
function maxDistance (position, m) {
    position.sort((a, b) => a - b);

    function isValid(mid) {
        let ballCount = 1, lastPlaced = 0;
        for (let i = 1; i < position.length; i++) {
            if (position[i] - position[lastPlaced] >= mid) {
                ballCount++;
                lastPlaced = i;
            }

            if (ballCount >= m) return true;
        }

        return false;
    }

    let start = 1, end = Math.max(...position) - Math.min(...position), ans = -1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (isValid(mid)) {
            ans = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return ans;
};

console.log(maxDistance([1,2,3,4,7],3)); //3
console.log(maxDistance([5,4,3,2,1,1000000000],2)); //999999999
