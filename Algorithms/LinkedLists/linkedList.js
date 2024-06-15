// Needed for the runner later on
// -- in Python you'd simply do input() or in a browser you can run prompt()
// Annoyingly in Node.js we need an external package to do this simply
//
// NOTE: make sure you run "npm install" before running this script

// Import the prompt-sync package to enable prompt input in Node.js
const prompt = require("prompt-sync")()

/*
TASK

Find the length of a linked list.
A user should enter the elements of the linked list to create and then displays its length.

Steps:
1. Create a class Node.
2. Create a class LinkedList.
3. Define method append inside the class LinkedList to append data to the linked list.
4. Define method length.
5. The method length uses a loop to iterate over the nodes of the list to calculate its length.
6. Create an instance of LinkedList and prompt the user for its elements.
7. Display the length of the list by calling the method length.
*/

class Node {
  // Constructor to create a new Node
  constructor(data) {
    // Store the data in the node
    this.data = data
    // Initialize the next pointer to null, indicating the end of the list
    this.next = null
  }
}

class LinkedList {
  // Constructor to create a new LinkedList
  constructor() {
    // Initialize the head of the list to null (empty list)
    this.head = null
    // Initialize the lastNode to null to keep track of the end of the list
    this.lastNode = null
  }

  // Method to append a new node with the given data to the list
  append(data) {
    // Check if the list is empty
    if (this.lastNode === null) {
      // Create a new node and set it as the head and lastNode
      this.head = new Node(data)
      this.lastNode = this.head
    } else {
      // Create a new node and attach it to the end of the list
      this.lastNode.next = new Node(data)
      // Update the lastNode to the newly created node
      this.lastNode = this.lastNode.next
    }
  }

  // Method to calculate the length of the list
  length() {
    // Start with the head of the list
    let current = this.head
    // Initialize length counter to 0
    let length = 0
    // Traverse the list until the end
    while (current) {
      // Increment the length counter for each node
      length = length + 1
      // Move to the next node
      current = current.next
    }
    // Return the total length of the list
    return length
  }
}

// ###############################

// ## RUNNER

/*
Case 1:
Please enter the elements in the linked list: 5 10
The length of the linked list is 2.
  
Case 2:
Please enter the elements in the linked list: 11 4 100 5
The length of the linked list is 4.
*/

// Create a new instance of LinkedList
llist = new LinkedList()

// Prompt the user to enter elements for the linked list, separated by commas
const data_list = prompt('Please enter the elements in the linked list: ').split(',')

// Iterate over each element in the data_list
data_list.forEach((data) => {
  // Append the element to the linked list, converting the string to a number
  llist.append(+data)
})

// Output the length of the linked list by calling the length method
console.log(`The length of the linked list is ${llist.length()}.`)

/*
NODE
The node is where data is stored in the linked list.
Each node also holds a pointer, which is a reference to the next node in the list.
*/

class Node {
    constructor(data=null, nextNode=null) {
      // Constructor initializes a new node with the given data and a reference to the next node.
      // If no data or next node is provided, they default to null.
      this.data = data; // The data stored in the node
      this.nextNode = nextNode; // A reference (pointer) to the next node in the list
    }
  
    getData() {
      // Method to get the data stored in this node
      return this.data;
    }
  
    getNext() {
      // Method to get the next node that this node points to
      return this.nextNode;
    }
  
    setNext(newNext) {
      // Method to set the next node reference
      this.nextNode = newNext;
    }
  }
  
  // TEST DATA
  // Uncomment the following lines to create and link nodes for testing.
  // const n1 = new Node('a');
  // const n2 = new Node('b');
  // n1.setNext(n2);
  
  // console.log(n1.getData());  // Should print 'a'
  // console.log(n1.getNext().getData());  // Should print 'b'
  
  /*
  LINKED LIST
  
  This implementation includes the following methods:
  - Insert: inserts a new node into the list
  - Size: returns size of list
  - Search: searches list for a node containing the requested data and returns that node if found.
  - Delete: searches list for a node containing the requested data and removes it from list if found.
  */
  
  class LinkedList {
    constructor(head=null) {
      // Constructor initializes the linked list with an optional head node.
      // If no head node is provided, it defaults to null.
      this.head = head;
    }
  
    toString() {
      // Method to get a string representation of the list
      let node = this.head; // Start with the head node
      const nodes = []; // Array to hold the string representation of each node
      while (node != null) {
        nodes.push(String(node.data)); // Add the data of the current node to the nodes array
        node = node.getNext(); // Move to the next node
      }
      nodes.push('null'); // Represent the end of the list with 'null'
      return nodes.join(' -> '); // Join all elements in the array with ' -> ' to form a string
    }
  
    insert(data) {
      // Method to insert a new node with the given data at the end of the list
      const newNode = new Node(data); // Create a new node with the given data
      if (this.head === null) {
        // If the list is empty, set the new node as the head
        this.head = newNode;
      } else {
        // Otherwise, find the last node and set its next reference to the new node
        let current = this.head; // Start with the head node
        while (current.getNext() !== null) {
          // Traverse the list until the last node
          current = current.getNext(); // Move to the next node
        }
        current.setNext(newNode); // Set the next reference of the last node to the new node
      }
    }
  
    size() {
      // Method to return the number of nodes in the list
      let current = this.head; // Start with the head node
      let count = 0; // Initialize a counter
      while (current) {
        // Traverse the list
        count += 1; // Increment the counter for each node
        current = current.getNext(); // Move to the next node
      }
      return count; // Return the total count of nodes
    }
  
    search(data) {
      // Method to search for a node with the given data
      let current = this.head; // Start with the head node
      let found = false; // Initialize a flag to indicate if the data is found
      while (current && !found) {
        // Traverse the list until the data is found or the end is reached
        if (current.getData() === data) {
          // Check if the current node's data matches the given data
          found = true; // Set the flag to true if data matches
        } else {
          current = current.getNext(); // Move to the next node
        }
      }
      if (current === null) {
        // If no node with the given data is found, throw an error
        throw new Error("Data not in list");
      }
      return current; // Return the node with the matching data
    }
  
    delete(data) {
      // Method to delete the first node with the given data
      let current = this.head; // Start with the head node
      let previous = null; // Initialize a variable to keep track of the previous node
      let found = false; // Initialize a flag to indicate if the data is found
      while (current && !found) {
        // Traverse the list until the data is found or the end is reached
        if (current.getData() === data) {
          // Check if the current node's data matches the given data
          found = true; // Set the flag to true if data matches
        } else {
          previous = current; // Update the previous node
          current = current.getNext(); // Move to the next node
        }
      }
      if (current === null) {
        // If no node with the given data is found, throw an error
        throw new Error("Data not in list");
      }
      if (previous === null) {
        // If the node to delete is the head, update the head
        this.head = current.getNext();
      } else {
        // If the node to delete is not the head, update the previous node's next reference
        previous.setNext(current.getNext());
      }
    }
  }
  
  /*
  IMPLEMENTATION
  */
  
  // Create a new linked list
  const llist = new LinkedList();
  console.log(llist.toString());  // Should print 'null'
  
  llist.insert('a');  // Insert a node with data 'a'
  console.log(llist.toString());  // Should print 'a -> null'
  
  llist.insert('b');  // Insert a node with data 'b'
  llist.insert('c');  // Insert a node with data 'c'
  console.log(llist.toString());  // Should print 'a -> b -> c -> null'
  
  console.log(llist.size());  // Should print 3, the number of nodes in the list
  
  const node = llist.search('b');  // Search for a node with data 'b'
  console.log(node.getData());  // Should print 'b', the data of the found node
  
  llist.delete('b');  // Delete the node with data 'b'
  console.log(llist.toString());  // Should print 'a -> c -> null'
  console.log(llist.size());  // Should print 2, the updated number of nodes in the list
  