/*
Basic operations that we can perform on a GRAPH:

1. Create a graph
2. Display graph vertices
3. Display graph edges
4. Add a vertex
5. Add an edge

*/

/*
1. Create a graph

   Example of a graph that we want to build
       a________b
       |        |
       |        |
      c|________|d
                |
                |
                |e 

*/

// Dict represent graph,
// where key is the name of a graph nodes/vertices and
// values are graph edges

const graphElements = {
    a: ['b', 'c'],
    b: ['a', 'd'],
    c: ['a', 'd'],
    d: ['c', 'e'],
    e: ['d'],
};

console.log(graphElements);
class Graph {
    constructor(gObj = []) {
        this.gObj = gObj;
    }

    // GETTER
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    get vertices() {
        /*
		2. Display graph vertices
	
		- we need to get keys of the graph dict,
		  because they represent vertices
		*/
        return Object.keys(this.gObj);
    }

    get edges() {
        /*
		3. Display graph edges
	
		- we have to find each of the pairs of vertices which have an edge in between them.
		- create an empty list of edges
		- iterate through the edge values associated with each of the vertices
		- build a list containing the distinct group of edges found from the vertices
		*/
        const edgeNames = [];
        this.vertices.forEach((vertex) => {
            this.gObj[vertex].forEach((nextVertex) => {
                if (!edgeNames.includes(new Set(nextVertex, vertex))) {
                    edgeNames.push(new Set(nextVertex, vertex));
                }
            });
        });
        return edgeNames;
    }

    // SETTER
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
    set vertex(vertex) {
        /*
		4. Add a vertex
		- we need to add another additional key to the graph dictionary.
		*/
        //    This is setting a new vertex to the graph if it doesn't already exist
        if (!this.vertices.includes(vertex)) {
            this.gObj[vertex] = [];
        }
    }

    set edge(edge) {
        /*
		5. Adding an edge
		- treat the new vertex as a tuple
		- validate if the edge is already present
		- if not then add the edge
		*/
        edge = new Set(edge);
        const [vrtx1, vrtx2] = Array.from(edge);
        //  adding a new edge to the graph, connecting two vertices.
        if (this.vertices.includes(vrtx1)) {
            this.gObj[vrtx1].push(vrtx2);
        } else {
            this.gObj[vrtx1] = [vrtx2];
        }
    }
}

const g = new Graph(graphElements);
console.log(g.vertices);
console.log(g.edges);

g.vertex = 'f';
console.log(g.vertices);

g.edge = ['a', 'e'];
g.edge = ['f', 'x'];
console.log(g.edges);

console.log(g.gObj);