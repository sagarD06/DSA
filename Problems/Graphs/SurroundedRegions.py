class Solution:
    def solve(self, board: list[list[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        rows: int = len(board)
        cols: int = len(board[0])
        vis = [[False] * cols for _ in range(rows)]

        def dfs(row, col):
            if row < 0 or row >= rows or col < 0 or col >= cols or vis[row][col] or board[row][col] == "X":
                return

            vis[row][col] = True

            dfs(row+1, col)
            dfs(row-1, col)
            dfs(row, col+1)
            dfs(row, col-1)
            

        for i in range(rows):
            if board[i][0] == "O" and not vis[i][0]:
                dfs(i,0)

            if board[i][cols-1] == "O" and not vis[i][cols-1]:
                dfs(i, cols-1)

        for j in range(cols):
            if board[0][j] == "O" and not vis[0][j]:
                dfs(0, j)
            
            if board[rows-1][j] == "O" and not vis[rows-1][j]:
                dfs(rows-1, j)

        for i in range(rows):
            for j in range(cols):
                if board[i][j] == "O" and not vis[i][j]:
                    board[i][j] = "X"  
