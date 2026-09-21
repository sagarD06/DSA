class Solution:
    def floodFill(self, image: list[list[int]], sr: int, sc: int, color: int) -> list[list[int]]:
        original_color: int = image[sr][sc]

        if original_color == color: return image

        self.dfs(image, sr, sc, original_color, color)

        return image

    def dfs(self, image, row, col, original_color, color):
        if row < 0 or row >= len(image) or col < 0 or col >= len(image[0]) or image[row][col] != original_color:
            return

        image[row][col] = color

        self.dfs(image, row-1, col, original_color,color)
        self.dfs(image, row+1, col, original_color,color)
        self.dfs(image, row, col-1, original_color,color)
        self.dfs(image, row, col+1, original_color,color)
        
