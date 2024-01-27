var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create new node variable and assign a call the Node class
    var newNode = Node(value); //{3, null}
    //if the linked list is empty
    if (!list.head) {
      //directly assign newNode to both head and tail
      list.head = newNode;
      list.tail = newNode;
    //else
    } else {
      //current tail's next value needs to be reassigned to new nodes current value
      list.tail.next = newNode;
      //assign new node to list.tail
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    //if the linked list is empty
    if (!list.head) {
      //return null
      return null;
      //else
    } else {
      //create variable assign to current head
      var currentHead = list.head;
      //assign the head to next value
      list.head = list.head.next;
      //return current head variable
      return currentHead.value;
    }
  };


  // list.removeTail = function() {
  //   //if the linked list is empty
  //   if (!list.head) {
  //     //return null
  //     return null;
  //     //else
  //   } else {
  //     //create variable assign to current tail
  //     var currentHead = list.head;
  //     //assign the head to next value
  //     list.head = list.head.next;
  //     //return current head variable
  //     return currentHead.value;
  //   }
  // };


  list.addToHead = function(value) {
    //create new node variable and assign a call the Node class
    var newNode = Node(value); //{3, null}
    //if the linked list is empty
    if (!list.head) {
      //directly assign newNode to both head and tail
      list.head = newNode;
      list.tail = newNode;
    //else
    } else {
      //current tail's next value needs to be reassigned to new nodes current value
      newNode.next = list.head;
      //assign new node to list.tail
      list.head = newNode;

    }
  };






  list.contains = function(target) {
    //create tracker variable, "increment" by assigning to the "next" value\
    var currentNode = list.head;
    //loop through linkedlist with while currentNode is not null
    while (currentNode !== null) {
      //if target equals currentnode's value
      if (currentNode.value === target) {
        // return true
        return true;
      }
      //assign next node to currentNode
      currentNode = currentNode.next;
    }
    //return false
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;// {3}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
