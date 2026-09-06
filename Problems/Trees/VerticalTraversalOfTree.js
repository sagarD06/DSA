/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//DFS Approach------------------------------------
function verticalTraversal (root) {
    const store = [];
    function dfs(col, level, node) {
        if (!node) return;
        store.push([col, level, node])
        dfs(col - 1, level + 1, node.left);
        dfs(col + 1, level + 1, node.right);
    }

    dfs(0, 0, root);
    store.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];

        return a[2].val - b[2].val;
    })

    const ans = [];
    let prev = -Infinity;
    store.forEach(item => {
        if(item[0] != prev){
            prev = item[0];
            ans.push([]);
        }
        ans.at(-1).push(item[2].val)
    })

    return ans;
};
//BFS Approach----------------------------------------------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    if (!root) return [];

    const store = [];
    const ans = [];
    const queue = [[0, 0, root]];

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            let [col, level, node] = queue.shift();
            store.push([col, level, node.val])

            if (node.left) queue.push([col - 1, level + 1, node.left]);
            if (node.right) queue.push([col + 1, level + 1, node.right]);
        }
    }

    store.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

    let prev = null;
    for (let [col, level, value] of store) {
        if (col !== prev) {
            ans.push([]);
            prev = col;
        }
        ans[ans.length - 1].push(value);
    }

    return ans;
};
