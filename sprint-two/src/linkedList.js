var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var temp = new Node(value);
    if (list.tail === null) {
      list.tail = temp;
      list.head = temp;
    } else {
    list.tail.next = temp;
    list.tail = temp;
    }
  };

  list.removeHead = function(){
    if (list.head === null) {
      return null;
    } else {
      var value = list.head.value;
      list.head = list.head.next
      return value;
    }
  };

  list.contains = function(target){
    var search = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return search (node.next);
      }
    }
    return search(list.head);
  };

  return list;
};

//Inserts a node after a target node, incomplete
  // list.insertAfter = function(target, value) {
  //   var temp = new Node(value);
  //   var search = function(node) {
  //     if (node.value === target) {
  //       temp.next = node.next;
  //       node.next = temp;
  //     } else if (node.next === null) {
  //       list.addToTail(value);
  //     } else {
  //       search (node.next);
  //     }
  //   }
  //   search(list.head);
  // }

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

