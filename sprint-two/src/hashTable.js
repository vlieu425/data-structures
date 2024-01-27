

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create a variable bucket to store the keys and values or default as empty array;
  var bucket = this._storage.get(index) || [];
  //iterate through the bucket to find the key
  for (var i = 0; i < bucket.length; i++) {
    //if key exists, overwrite the value
    if (bucket[i].key === k) {
      bucket[i].value = v;
    }

  }
  //add the key and the value  into the bucket;
  bucket.push({key: k, value: v});
  //set the bucket to the storage
  this._storage.set(index, bucket);

};
//retrive : to get the value of key
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //interate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    // if (bucket[i][k]){
    if (bucket[i].key === k) {
      //return the value of the k
      return bucket[i].value;
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create a variable bucket to the storage of each index
  var bucket = this._storage.get(index);
  //iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    //check if it has the key k
    if (bucket[i].key === k) {
      //if yes, delete the whole object of key and value use splice
      // delete bucket[i];when use"delete" on array, it will leave the element undefined
      bucket.splice(i, 1);
      this._storage.set(index, bucket);
    }

  }

};

//{}

/*
 * Complexity: What is the time complexity of the above functions?
 */


