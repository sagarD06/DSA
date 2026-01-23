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
            
    def DFS(self,src):
        visited = [False]* self.size
        stack = [src]
        
        while(stack):
            vertex = stack.pop()
            
            if(not visited[vertex]):
                print(vertex, end=" -> ")
                visited[vertex] = True
                
            for i in range(self.size):
                if(self.mat[vertex][i] and not visited[i]):
                    stack.append(i)
                    
    def DFS_Recursive(self, src, visited=None):
    # Initialize visited array on first call
        if visited is None:
            visited = [False] * self.size
        
        # Mark current vertex as visited and print it
        visited[src] = True
        print(src, end=" -> ")
        
        # Recursively visit all adjacent unvisited vertices
        for i in range(self.size):
            if self.mat[src][i] and not visited[i]:
                self.DFS_Recursive(i, visited)
                    
graph = Graph(6)
graph.add_edge_undirection(0,1)
graph.add_edge_undirection(0,2)
graph.add_edge_undirection(2,3)
graph.add_edge_undirection(2,4)
graph.add_edge_undirection(3,5)
graph.add_edge_undirection(4,5)

graph.DFS(0)
print()
graph.DFS_Recursive(0)