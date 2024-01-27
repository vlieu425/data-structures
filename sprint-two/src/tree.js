var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  //extend treeMethods onto newTree
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create variable assign to new child node
  var child = Tree(value);
  //push new node to children array
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //if current value === target
  if (this.value === target) {
    //return true
    return true;
  }

  //loop through children array
  for (var i = 0; i < this.children.length; i++) {
    //if children array contains our target
    // debugger;
    if (this.children[i].contains(target)) {
      //return true
      return true;
    }
  }

  treeMethods.reassignCurrentChildValue = function(value, targetValue) {
    //iterate through children array
    for (var i = 0; i < this.children.length; i++) {
      //if child.vaue = value
      if (this.children[i].value === value) {
        //child.value = targetValue
        this.children[i].value = targetValue;
      }
    }
  };



  //return false
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
