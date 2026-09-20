'''
Structure of a Binary Search Tree node
class Node:
    def __init__(self, val):
        self.data = val
        self.right = self.left = None
        
'''
class Solution:
    def minDiff(self, root: 'Node', k: int) -> int:
        # code here
        self.min_diff = float('inf')
        def dfs(root):
            if root is None:
                return None
            
            diff = abs(k - root.data)
            self.min_diff = min(self.min_diff, diff)
            dfs(root.left)
            dfs(root.right)
            
            return root
            
        dfs(root)
        return self.min_diff
