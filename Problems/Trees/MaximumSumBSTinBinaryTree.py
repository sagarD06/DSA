# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxSumBST(self, root: TreeNode | None) -> int:
        self.max_sum: int = 0

        def solve(root: TreeNode | None) -> list[int]:
            if root is None:
                return [True,float('inf'), float('-inf'),0]

            left: list[int] = solve(root.left)
            right: list[int] = solve(root.right)

            if left[0] and right[0] and left[2] < root.val < right[1]:
                sum = left[3] + right[3]+ root.val
                self.max_sum = max(self.max_sum,sum)

                min_num = min(left[1],root.val)
                max_num = max(right[2], root.val)

                return [True, min_num, max_num, sum]

            return [False, 0, 0, 0]

        solve(root)
        return self.max_sum

