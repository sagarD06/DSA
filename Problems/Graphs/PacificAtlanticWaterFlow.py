class Solution:
    def pacificAtlantic(self, heights: list[list[int]]) -> list[list[int]]:
        rows: int = len(heights)
        cols: int = len(heights[0])

        pacific: list[list[bool]] = [[False] * cols for _ in range(rows)]
        atlantic: list[list[bool]] = [[False] * cols for _ in range(rows)]

        def dfs(r,c,visited, value):
            if r < 0 or r >= rows or c < 0 or c >= cols or visited[r][c] or heights[r][c] < value:
                return

            visited[r][c] = True

            dfs(r+1,c,visited,heights[r][c])
            dfs(r-1,c,visited,heights[r][c])
            dfs(r,c+1,visited,heights[r][c])
            dfs(r,c-1,visited,heights[r][c])

        for i in range(rows):
            dfs(i, 0, pacific, heights[i][0])
            dfs(i, cols-1, atlantic, heights[i][cols-1])

        for i in range(cols):
            dfs(0, i, pacific, heights[0][i])
            dfs(rows-1, i, atlantic, heights[rows-1][i])

        result = []

        for i in range(rows):
            for j in range(cols):
                if pacific[i][j] and atlantic[i][j]:
                    result.append([i,j])

        return result


