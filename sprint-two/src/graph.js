

var Graph = function(){
  this.nodeList = {};
};

Graph.prototype.addNode = function(node){
  var newNode = {};
  newNode.value = node;
  newNode.edgeList = [];
  this.nodeList[node] = newNode;
};

Graph.prototype.contains = function(node){
  for (var key in this.nodeList) {
    if (node === key) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodeList[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var edges = this.nodeList[fromNode].edgeList
  for (var i = 0; i < edges.length; i++) {
    if(edges[i] === toNode) {
      return true;
    }
  }
  return false;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodeList[fromNode].edgeList.push(toNode);
  this.nodeList[toNode].edgeList.push(fromNode);

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var edges = this.nodeList[fromNode].edgeList
  var index = edges.indexOf(toNode)
  edges.splice(index, 1);

  edges = this.nodeList[toNode].edgeList;
  index = edges.indexOf(fromNode)
  edges.splice(index, 1);



};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodeList) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



