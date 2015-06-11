var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;

  this.push = function(value){
    this.counter++;
    this[this.counter] = value;
  }

  this.pop = function(){
    var temp = this[this.counter];
    delete this[this.counter]
    if (this.counter > 0) {
      this.counter--;
    }
  }

  this.size = function(){
    return this.counter
  }
};

// var stack = new Stack();


