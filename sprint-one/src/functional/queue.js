var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var lastKey = someInstance.size();
    var nextKey = 1+lastKey;
    someInstance[nextKey] = value;

  };

  someInstance.dequeue = function(){
    var temp = someInstance['1'];
    delete someInstance['1'];
    for (var key in someInstance) {
      if (typeof someInstance[key] !== 'function') {
        someInstance[key-1] = someInstance[key];
      }
    }
    delete someInstance[someInstance.size()];
    return temp;
  };

  someInstance.size = function(){
    var counter = 0;
    for (var key in someInstance) {
      if (typeof someInstance[key] !== 'function') {
        counter += 1;
      }
    }
    return counter;
  };

  return someInstance;
};
