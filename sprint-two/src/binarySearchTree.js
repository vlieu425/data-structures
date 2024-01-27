var BinarySearchTree = function(value) {
  //test cases are for non prototypal styles. We will use functional-shared

  //create storage
  var binarySearchTree = {};
  //define the node value variable
  binarySearchTree.value = value;
  //define left property
  binarySearchTree.left = null;
  //define right property
  binarySearchTree.right = null;

  //extend binarySearchTreeMethods onto instance
  _.extend(binarySearchTree, binarySearchTreeMethods);
  //return instance
  return binarySearchTree;

};

//create methods object
var binarySearchTreeMethods = {};

//create insert method assigned to BST's prototype
binarySearchTreeMethods.insert = function(value) {
  //create tracker variable for currentNode
  var currentNode = this.value;
  //if argument is less than current nodeValue
  if (value < currentNode) {
    //reassign the currentNode variable to .left
    // currentNode = this.left;
    //check if currentNode is null
    if (this.left === null) {
      //use new binarySearchTree assign argument to left property
      this.left = BinarySearchTree(value);
    //else
    } else {
      //rescursively call insert
      this.left.insert(value);
    }
  //else if argument is greater than current nodeValue
  } else if (value > currentNode) {
    //reassign the currentNode variable to .right
    // currentNode = this.right;
    //check if currentNode is null
    if (this.right === null) {
      //assign argument to the .right
      this.right = BinarySearchTree(value);
      //else
    } else {
      //recursively call insert function
      this.right.insert(value);
    }
  }

};



//create contains method assigned to BST's prototype
binarySearchTreeMethods.contains = function (value) {
  //if value = currentNode's value
  if (value === this.value) {
    //return true
    return true;
  }

  //recursively call contains on next node
  if (value < this.value && this.left ) {
    return this.left.contains(value);
  } else {
    if (value > this.value && this.right) {
      return this.right.contains(value);
    }
  }

  //return false
  return false;

};

//create depthFirstLog method assigned to BST's prototype
binarySearchTreeMethods.depthFirstLog = function (cb) {
  //if this.value !== null {}
  if (this.value !== null) {
    //callback function passing this.value
    cb(this.value);
  }

  //recursivly call depthFirstLog on this.left
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  //recursively call depthFirstLog on this.right
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
