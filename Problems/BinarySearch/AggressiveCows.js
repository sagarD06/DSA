function aggressiveCows(arr, k) {

	arr.sort((a, b) => a - b);

	function isValid(mid) {
		let cowsPlaced = 1, lastPosition = 0;
		for (let i = 1; i<arr.length; i++) {
			if (arr[i] - arr[lastPosition] >= mid) {
				cowsPlaced++;
				lastPosition = i;
			}
			if (cowsPlaced >= k) return true;
		} 
		return false;
	}

	let start = 1, end = Math.max(...arr) - Math.min(...arr), ans = -1;

	while (start <= end) {
		const mid = start + Math.floor((end - start)/2);

		if (isValid(mid)) {
			ans = mid;
			start = mid + 1;
		} else {
			end = mid - 1
		}
	}
	return ans;

}

console.log(aggressiveCows([1, 2, 4, 8, 9],3)); //3
console.log(aggressiveCows([10, 1, 2, 7, 5],3)); //4
