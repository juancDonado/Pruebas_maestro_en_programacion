class Graph {
  constructor(numOfVertices){
    this.numOfVertices = numOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v){
    this.AdjList.set(v, []);
  }

  addEdge(v,w){
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph(){
    let getKeys = this.AdjList.keys();

    for(let i of getKeys){
      let getValues = this.AdjList.get(i);
      let conc = '';

      for(let j of getValues){
        conc += j + ' ';
      }

      console.log(i + ' -> '+conc);
    }
  }
}

var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
g.printGraph();
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}
g.printGraph();

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('F', 'C');
g.addEdge('C', 'F');

g.printGraph();

