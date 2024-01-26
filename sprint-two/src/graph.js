

// Instantiate a new graph
var Graph = function() {
  //create variable nodes to store objects as property of this
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //create key in this.nodes using node and assign it an object containing the edges
  this.nodes[node] = {};

  //this.nodes[node] = {edges:{1:blah, 2:blah, 3:blah}}
  //hasEdge --> this.nodes[node][edge][edgevalue]
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //if node exist
  if (this.nodes[node]) {
    //return true
    return true;
  //else
  } else {
    //return false
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //if node exists (contain)
  if (this.contains(node)) {
    for (var connectedNode in this.nodes[node]){
      // if (this.hasEdge(node)) {
        //   //removeEdge (node)
      this.removeEdge(connectedNode,node)
    }
    //delete node
    delete this.nodes[node];
  }
  // //if node hasEdge (node)
  //   this.removeEdge(node);
  // }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //if fromNode exists
  if (this.nodes[fromNode][toNode] && this.nodes[toNode][fromNode]) {
    //add toNode to object
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //if this.node contains fromNode and toNode
  if (this.contains(fromNode) && this.contains(toNode)) {
    //add fromNode to toNode's edge
    this.nodes[toNode][fromNode] = 'exist';
    //add toNode to fromNode's edge
    this.nodes[fromNode][toNode] = 'exist';
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //if fromNode exists
  if (this.nodes[fromNode][toNode] && this.nodes[toNode][fromNode]) {
    //add toNode to object
    delete this.nodes[fromNode][toNode];
    delete this.nodes[toNode][fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate through node to call
  for (var node in this.nodes){
    cb(node);
  }
  // the function
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


