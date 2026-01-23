from collections import deque

class Graph:
    def __init__(self, vertex):
        self.mat = [[0]*vertex for _ in range(vertex)]
        self.size = vertex
        
    def add_edge_undirection(self, src, dest):
        if(0<= src < self.size and 0<= dest < self.size):
            self.mat[src][dest] = 1
            self.mat[dest][src] = 1
        else:
            print("Invalid src or dest")
    
    def printGraph(self):
        for row in self.mat:
            print(' '.join(map(str, row)))
            
    def BFS(self,src):
        visited = [False]* self.size
        queue = deque([src])
        visited[src] = True
        
        while(queue):
            vertex = queue.popleft()
            print(vertex, end="->")
            
            for i in range(self.size):
                if(self.mat[vertex][i] and not visited[i]):
                    visited[i] = True
                    queue.append(i)
                    
    def BFS_Recursive(self, src, visited=None):
    # Initialize visited array on first call
        if visited is None:
            visited = [False] * self.size
        
        # Mark current vertex as visited and print it
        visited[src] = True
        print(src, end="->")
        
        # Recursively visit all adjacent unvisited vertices
        for i in range(self.size):
            if self.mat[src][i] and not visited[i]:
                self.BFS_Recursive(i, visited)
                    
graph = Graph(8)
graph.add_edge_undirection(0,1)
graph.add_edge_undirection(0,3)
graph.add_edge_undirection(1,3)
graph.add_edge_undirection(3,4)
graph.add_edge_undirection(3,5)
graph.add_edge_undirection(4,5)
graph.add_edge_undirection(4,6)
graph.add_edge_undirection(6,2)
graph.add_edge_undirection(6,7)
graph.BFS(0)
print()
graph.BFS_Recursive(0)