class Solution:
    def allPathsSourceTarget(self, graph: list[list[int]]) -> list[list[int]]:
        n: int = len(graph)
        res: list[list[int]] = []

        def dfs(path:list[int]) -> None:
            node = path[-1]
            if node == n - 1: 
                res.append(path[:])
                return

            for i in graph[node]:
                path.append(i)
                dfs(path)
                path.pop()

        dfs([0])
        return res
        
