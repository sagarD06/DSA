class Solution:
    def isBipartite(self, graph: list[list[int]]) -> bool:
        n = len(graph)
        visited = [0] * n

        def dfs(node, col):
            visited[node] = col

            for i in graph[node]:
                if visited[i] == 0:
                    if not dfs(i, -col):
                        return False
                elif visited[i] == col:
                    return False

            return True

        for i in range(n):
            if visited[i] == 0:
                if not dfs(i, 1):
                    return False

        return True
        
