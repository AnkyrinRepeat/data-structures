var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[someInstance.size() + 1] = value;
  };

  someInstance.pop = function(){
    var temp = storage[someInstance.size()];
    delete storage[someInstance.size()];
    return temp;
  };

  someInstance.size = function() {
    var counter = 0;
    for (var key in storage) {
      counter += 1;
    }
    return counter;
  };

  return someInstance;
};
