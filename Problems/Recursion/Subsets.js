/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function findSubsets(nums, store, ans, idx) {
    if (idx === nums.length) {
        ans.push([...store]);
        return;
    }

    store.push(nums[idx]);
    findSubsets(nums, store, ans, idx + 1);

    store.pop();
    findSubsets(nums, store, ans, idx + 1);

}
function subsets(nums) {
    const store = [];
    const ans = [];

    findSubsets(nums, store, ans, 0)
    return ans;
};

console.log(subsets([1,2,3])); //[[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]]
