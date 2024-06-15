function bfs(graph, start) {
	// Create a variable to hold the places you have visited. Soyou can track them
	let visited = new Set();
	let queue = [start]
	visited.add(start)

	// Set a condition for traveling (when to stop etc)
	// As long as there are nodes we will keep going
	while (queue.length > 0) {
		// Shift method will remove the first node from the queue and hen assign it to the variable 'vertex' 
		let vertex = queue.shift()

		//  Iterate over all of the neighbours in the current node.. It is BFS!
		for (let neighbour of graph[vertex]) {
			// Check if that neighbour has been visited yet.
			if (!visited.has(neighbour)) {
				//Make sure to indicate that it has been visited
				visited.add(neighbour)

				// Add the neighbou to the queue to be processed later. 
				queue.push(neighbour)

			}
		}

	}

}

const graph = {
	0: [1,2],
	1: [0, 3, 4],
	2: [0,5,6],
	3: [1],
	4: [1],
	5: [2],
	6: [2]
}
bfs(graph, 0)