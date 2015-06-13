var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tempToAdd = [];
  var alreadyThere = this._storage.get(i);
  if (alreadyThere === undefined) {
    tempToAdd = [k,v];
  } else {
    tempToAdd.push(alreadyThere);
    tempToAdd.push([k,v]);
  }


  // if alreadyThere == undefined, then tempToAdd = [k,v]
  this._storage.set(i, tempToAdd);
};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (typeof bucket[0] === 'string') {
    return bucket[1];
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return null;

};

HashTable.prototype.remove = function(k){
  var j = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(j);
  var index;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      index = i;
    }
  };
  if (typeof bucket[0] === 'string') {
    bucket = bucket.splice(0,2);
  } else {
    bucket = bucket.splice(index, 1);
  }
  this._storage.set(i, bucket);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
