var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // create an object to storage;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
//check if the storage has the item
  if (!this._storage[item]) {
    this._storage[item] = true;
  }
};

setPrototype.contains = function(item) {
  return !!this._storage[item];
//check if the storage has the item
//   if (this._storage[item]) {
//   //if yes, return true
//     return true;
//   } else {
//     return false;
// }
//if no, return false
};

setPrototype.remove = function(item) {
//check if the storage has the item
// //if yes, delete it
//   if(this.storage[item]) {
  delete this._storage[item];

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
