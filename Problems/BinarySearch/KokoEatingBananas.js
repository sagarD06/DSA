/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function minEatingSpeed (piles, h) {
    if (h < piles.length) return -1;

    let start = 1, end = Math.max(...piles);

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        let hoursCount = 0;
        for (let pile of piles) {
            hoursCount += Math.ceil(pile / mid);
        }

        if (hoursCount <= h) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start;
};

console.log(minEatingSpeed([3,6,7,11],8)); //4
console.log(minEatingSpeed([30,11,23,4,20],5)); //30
