var functionalQueue = function(){
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

var functionalStack = function(){
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
var functionalSharedQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {
    counter: 0
  };
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.counter += 1;
  this[this.counter] = value;
};

queueMethods.dequeue = function(){
  var temp = this[1];
  for(var i = 1; i < this.counter; i++) {
    this[i] = this[i+1];
  }
  delete this[this.counter];
  if (this.counter > 0) {
    this.counter -= 1;
  }
  return temp;
};

queueMethods.size = function(){
  return this.counter;
};

var functionalSharedStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  _.extend(stack, stackMethods);
  return stack;


};

var stackMethods = {};

stackMethods.push = function(value){
  this[this.size()+ 1] = value;
};
stackMethods.pop = function(){
  var temp = this[this.size()];
  delete  this[this.size()];
  return temp;
};
stackMethods.size = function(){
  var counter = 0;
  for ( var key in this) {
    if (typeof this[key] !== 'function'){
      counter +=1;
    }
  };
  return counter;
};
var prototypalQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.counter = 0;
  // _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.counter += 1;
  this[this.counter] = value;
}

queueMethods.dequeue = function(){
  var temp = this[1];
  for(var i = 1; i < this.counter; i++) {
    this[i] = this[i+1];
  }
  delete this[this.counter];
  if (this.counter > 0) {
    this.counter--;
  }
  return temp;
}

queueMethods.size = function(){
  return this.counter;
}
var prototypalStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.counter = 0
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.counter++;
  this[this.counter] = value;

}
stackMethods.pop = function(){
  var temp = this[this.counter];
  delete this[this.counter];
  if (this.counter > 0) {
    this.counter--;
  }
  return temp;
}
stackMethods.size = function(){
  return this.counter;
}
var pseudoclassicalQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
};

pseudoclassicalQueue.prototype.enqueue = function(value){
  this.counter++;
  this[this.counter] = value;
}
pseudoclassicalQueue.prototype.dequeue = function(){
  var temp = this[1];
  for (var i = 1; i < this.counter; i++) {
    this[i] = this[i+1];
  }
  delete this[this.counter];
  if (this.counter > 0) {
    this.counter--;
  }
  return temp;
}
pseudoclassicalQueue.prototype.size = function(){
  return this.counter;
}
var pseudoclassicalStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
}

pseudoclassicalStack.prototype.push = function(value){
  this.counter++;
  this[this.counter] = value;
}

pseudoclassicalStack.prototype.pop = function(){
  this.temp = this[this.counter];
  delete this[this.counter]
  if (this.counter > 0) {
    this.counter--;
  }
  return this.temp;
}

pseudoclassicalStack.prototype.size = function(){
  return this.counter
}














