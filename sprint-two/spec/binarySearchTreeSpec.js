describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert a single node', function() {
    binarySearchTree.insert(7);
    expect(binarySearchTree.right.value).to.equal(7);
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(-4);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
    expect(binarySearchTree.left.left.value).to.equal(-4);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

    it('should not insert duplicate values', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.depthFirstLog(func);
    expect(array.length).to.eql(4);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3,6]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function(){
    var array = [];
    var func = function(obj){ array.push(obj.value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5,2,6,1,3,8,4,7,9]);
  });
});
