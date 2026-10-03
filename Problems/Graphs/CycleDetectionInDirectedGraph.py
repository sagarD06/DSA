class Solution:
    def isCyclic(self, V: int, edges: list[list[int]]) -> bool:
        graph = [[] for _ in range(V)]
        
        for u, v in edges:
            graph[u].append(v)
            
        visited = [0]*V
        
        def dfs(node):
            visited[node] = 1
            
            for nei in graph[node]:
                if visited[nei] == 0:
                    if dfs(nei):
                        return True
                elif visited[nei] == 1:
                    return True
            
            visited[node] = 2
            return False
        
        for i in range(V):
            if visited[i] == 0:
                if dfs(i):
                    return True
            
        return False
