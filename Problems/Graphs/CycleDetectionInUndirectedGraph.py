class Solution:
	def isCycle(self, V, edges):
		#Code here
		graph = [[] for _ in range(V)]

		for edge in edges:
		    u = edge[0]
		    v = edge[1]
		    graph[u].append(v)
		    graph[v].append(u)
		    
		visited = [False] * V
		    
		def dfs(node, parent):
		    visited[node] = True
		    
		    for nei in graph[node]:
		        if not visited[nei]:
		            if dfs(nei, node):
		                return True
		        else:
		            if nei != parent:
		                return True
		            
		    return False
		    
		for i in range(V):
		    if not visited[i] and dfs(i, -1):
		        return True
		        
		return False

