var BinarySearchTree = function(value){
  var binaryTree = Object.create(binaryMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;

};

var binaryMethods = {};

binaryMethods.insert = function(value){
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    }
    else {
      //this.right.insert(value);
    }
  }
  else {
    //go left
  };
}
binaryMethods.contains = function(value){}
binaryMethods.depthFirstLog = function(func){}
// binaryMethods.search = function (value) {}

/*
 * Complexity: What is the time complexity of the above functions?
 */
