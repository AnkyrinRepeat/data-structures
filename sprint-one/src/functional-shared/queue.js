var Queue = function(){
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


