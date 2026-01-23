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
    # def add_edge_direction(self, src, dest):
    #     if(0<= src < self.size and 0<= dest < self.size):
    #         self.mat[src][dest] = 1

    # def add_edge_weighted(self, src, dest, weight):
    #     if(0<= src < self.size and 0<= dest < self.size):
    #         self.mat[src][dest] = weight
    #         self.mat[dest][src] = weight
    
    def printGraph(self):
        for row in self.mat:
            print(' '.join(map(str, row)))
            
            
graph = Graph(5)
graph.add_edge_undirection(0,1)
graph.add_edge_undirection(0,2)
graph.add_edge_undirection(1,3)
graph.add_edge_undirection(2,4)
graph.add_edge_undirection(3,4)
graph.add_edge_undirection(2,3)
graph.printGraph()