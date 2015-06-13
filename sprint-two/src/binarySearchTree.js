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
      this.right.insert(value)
    }
  }
  else if (value < this.value)  {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value)
    }
  }
}

binaryMethods.contains = function(value){
  if (value === this.value) {
    return true;
  } else if (value > this.value) {
    if (this.right === null) {
        return false;
    } else {
      return this.right.contains(value)
    }
  } else {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value)
    }
  }
}


binaryMethods.depthFirstLog = function(func){
  func(this.value);
  if(this.left !== null) {
    this.left.depthFirstLog(func);
  }
    if(this.right !== null) {
    this.right.depthFirstLog(func);
  }
}

