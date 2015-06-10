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
    var temp = this['1'];
    delete this['1'];
    for (var key in this) {
      if (typeof this[key] !== 'function') {
        this[key-1] = this[key];
      }
    }
    delete this[this.size()];
  };

  someInstance.size = function(){
    var counter = 0;
    for (var key in this) {
      if (typeof this[key] !== 'function') {
        counter += 1;
        console.log(key);
      }
    }
    return counter;
  };

  return someInstance;
};
