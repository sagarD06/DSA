# Best memory safe way to represent a graph is to use adjacency list

class Graph:
    def __init__(self):
        self.adjList = {}
        
    def add_vertex(self,vertex):
        if( vertex not in self.adjList):
            self.adjList[vertex] = []
            
    def addEdge(self,src,dest):
        self.add_vertex(src)
        self.add_vertex(dest)
        self.adjList[src].append(dest)
        self.adjList[dest].append(src)
        
    def printGraph(self):
        for vertex in self.adjList:
            print(vertex, "->", self.adjList[vertex], end="\n")
            
graph = Graph()
graph.addEdge(1,2)
graph.addEdge(2,3)
graph.addEdge(1,4)
graph.addEdge(4,3)
graph.addEdge(2,4)
graph.addEdge(3,5)
graph.addEdge(5,4)

graph.printGraph()