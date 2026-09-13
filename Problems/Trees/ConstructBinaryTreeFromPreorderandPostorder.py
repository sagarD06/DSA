# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def constructFromPrePost(self, preorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        self.hash_map = {val:i for i,val in enumerate(postorder)}
        self.preorder_idx = 0
        return self.dfs(preorder,postorder, self.preorder_idx, len(preorder)-1, 0, len(postorder)-1)

    def dfs(self, preorder, postorder, preidx_start, preidx_end, postidx_start, postidx_end):
        if(preidx_start > preidx_end):
            return None

        root = TreeNode(preorder[preidx_start])
        if(preidx_start == preidx_end):
            return root
        left_val = preorder[preidx_start + 1]

        idx = self.hash_map[left_val]
        size = idx - postidx_start + 1

        root.left = self.dfs(preorder, postorder,preidx_start+1, preidx_start+size, postidx_start, idx)
        root.right = self.dfs(preorder, postorder,preidx_start+size+1, preidx_end, idx+1, postidx_end-1)
        return root

        

