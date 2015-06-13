var HashTable = function(){
  this._limit = 8;
  this._length = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for ( var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j][1] = v;
      this._storage.set(i, bucket);
      return;
    }
  }
  this._length++;
  bucket.push([k,v]);
  this._storage.set(i, bucket);

  if (this._length > (this._limit*0.75)) {
    var allBuckets = [];
    this._storage.each(function(arr){
      if (arr) {
        for (var h = 0; h < arr.length; h++) {
          allBuckets.push(arr[h]);
        }
      }
    });

    this._limit = this._limit*2;
    this._length = 0;
    this._storage = LimitedArray(this._limit);

    for (var q = 0; q < allBuckets.length; q++) {
      this.insert(allBuckets[q][0], allBuckets[q][1]);
    };
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j=0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j, 1);
      this._length--;
    }
  }
  this._storage.set(i, bucket);

  if (this._length < (this._limit*0.25)) {
    var allBuckets = [];
    this._storage.each(function(arr){
      if (arr) {
        for (var h = 0; h < arr.length; h++) {
          allBuckets.push(arr[h]);
        }
      }
    });

    this._limit = this._limit * 0.5;
    this._length = 0;
    this._storage = LimitedArray(this._limit);

    for (var q = 0; q < allBuckets.length; q++) {
      this.insert(allBuckets[q][0], allBuckets[q][1]);
    };
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
