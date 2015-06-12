var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  newTree.children = [];

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var result = false;
  var search = function(node) {
    if (node.value === target) {
      result = true;
      return;
    } else {
      if (node.children.length > 0) {
        for (var i=0; i< node.children.length; i++) {
          var child = node.children[i];
          search(child);
        }
      }
    }
  }

  search(this);
  return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
