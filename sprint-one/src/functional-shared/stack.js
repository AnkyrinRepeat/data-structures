var Stack = function() {
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


