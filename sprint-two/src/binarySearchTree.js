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

binaryMethods.breadthFirstLog = function(func) {
  var breadth = [];
  var evenChildStorage = [];
  var oddChildStorage = [];
  var even = true;

  var buildBreadth = function (node, evenTest){
    breadth.push(node);
    if(evenTest){
      if (node.left) {
        evenChildStorage.push(node.left);
      };
      if (node.right){
        evenChildStorage.push(node.right);
      }
    }
    else {
      if (node.left) {
        oddChildStorage.push(node.left);
      };
      if (node.right){
        oddChildStorage.push(node.right);
      }
    }
  }

  var goDeeper = true;
  buildBreadth(this, even);
  while (goDeeper) {
    for (var j = 0; j < evenChildStorage.length; j++){
      buildBreadth(evenChildStorage[j], !even);
    };
    even = !even;
    evenChildStorage = [];
    if (oddChildStorage.length === 0) {
      goDeeper = false;
    };
    if (goDeeper) {
      for (var l = 0; l < oddChildStorage.length; l++) {
        buildBreadth(oddChildStorage[l], !even);
      }
      even = !even;
    };
    oddChildStorage = [];
    if (evenChildStorage.length === 0) {
      goDeeper = false;
    }
  }
  for (var i = 0; i < breadth.length; i++) {
    func(breadth[i]);
  }
}

