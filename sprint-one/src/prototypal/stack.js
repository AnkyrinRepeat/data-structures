var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {
    counter : 0
  }
  _.extend(stack, stackMethods);
  return Object.create(stack);
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


