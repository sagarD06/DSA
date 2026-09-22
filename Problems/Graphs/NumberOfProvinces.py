class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n: int = len(isConnected)
        is_visited: List[bool] = [False] * n
        provinces: int = 0

        for i in range(n):
            if not is_visited[i]:
                self.dfs(i, isConnected, is_visited)
                provinces += 1

        return provinces
    
    def dfs(self, node: int, isConnected: List[List[int]], is_visited: List[bool]) -> None:
        is_visited[node] = True

        for i in range(len(isConnected)):
            if isConnected[node][i] == 1 and not is_visited[i]:
                self.dfs(i, isConnected, is_visited)
