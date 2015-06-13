var DoubleLinkedList = function(){
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
    temp.prev = list.tail;
    list.tail = temp;
    }
  };

  list.addToHead = function(value){
    var temp = new Node(value);
    if (list.head === null) {
      list.tail = temp;
      list.head = temp;
    } else {
      list.head.prev = temp;
      temp.next = list.head;
      list.head = temp;
    }
  }

  list.removeHead = function(){
    if (list.head === null) {
      return null;
    } else {
      var value = list.head.value;
      list.head = list.head.next
      return value;
    }
  };

  list.removeTail = function(){
    if (list.tail === null) {
      return null
    } else {
      var value = list.tail.value;
      list.tail = list.tail.prev;
      return value;
    }
  }

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

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
