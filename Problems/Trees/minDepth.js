var minDepth = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    if (!root.left && root.right) return 1 + minDepth(root.right);
    if (root.left && !root.right) return 1 + minDepth(root.left);
    if (root.left && root.right) return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
