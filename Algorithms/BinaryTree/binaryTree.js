/*
NODE CLASS IMPLEMENTATION

- INSERT method
compares the value of the node to the parent node
and decides whether to add it as a left node or right node.

NB: if the node is greater than the parent node,
it is inserted as a right node; otherwise,​ it’s inserted left.

- FIND method
while searching for a value in the tree,
we need to traverse the node from left to right and with a parent.

*/

/* 
1. create the root node:
how?: use a class, create a class node set it charateristics:
  - one data/value on the left and another on the right

2. insert a node and its data/value: conditionally check if the value is greater than the parent node, if it is, insert it as a right node, otherwise insert it as left node
*/
class Node {
    constructor(data){
      // left node
      this.left = null;
      // rigth node
      this.right = null;
      // root node data
      this.data = data;
    }
  
    insert(data){
      if (this.data) {
        if (data < this.data) {
          if (!this.left) {
            this.left = new Node(data)
          } else {
            this.left.insert(data)
          }
        } else if (data > this.data) {
          if (!this.right) {
            this.right = new Node(data)
          } else {
            this.right.insert(data)
          }
        }
      } else {
        this.data = data
      }
    }
  
    // find a node
    find_val(val){
      if (val < this.data){
        if(!this.left){
          return `No node with value ${val}`
        }
        return this.left.find_val(val)
      }else if (val > this.data){
        if(!this.right){
          return `No node with value ${val}`
        }
        return this.right.find_val(val)
      }
      else{
        return `${this.data} is found`
      }
    }
  
    // print tree method
  
    print_tree() {
      if (this.left) {
        this.left.print_tree()
      }
      console.log(this.data)
      if (this.right) {
        this.right.print_tree()
      }
    }
  }
  
  root = new Node(17);
  root.insert(16);
  root.insert(6);
  root.insert(46);
  root.insert(28);
  root.insert(5);
  
  root.print_tree();

  /*
TASK:
To find the sum of all *leaf* nodes:

We recursively traverse through the tree.
Check if a node is a leaf node or not.

APPROACH:
- If a node is a leaf node then add its data to total.

EXAMPLE:

        1
      /   \
    2       3
   / \     /  \
 4   5    6    7
           \
            8

sum of leaf node = 4+5+8+7 = 24
*/

class Node {
    constructor(data){
      // left node
      this.left = null;
      // rigth node
      this.right = null;
      // root node data
      this.data = data;
    }
  }
  
  class SumLeafNodes {
    constructor(){
      this.total = 0;
    }
    sumLeafNodes(root){
      if (!root) {
        return
      }else if (!root.left && !root.right) {
        this.total += root.data;
      }else{
        this.sumLeafNodes(root.left);
        this.sumLeafNodes(root.right);
      }
      return this.total
    } 
  }
  
  // create a BT
  
  root = new Node(1);
  root.left = new Node(2);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right = new Node(3);
  root.right.left = new Node(6);
  root.right.left.right = new Node(8);
  root.right.right = new Node(7);
  
  console.log(root)
  
  const obj = new SumLeafNodes();
  const sum = obj.sumLeafNodes(root);
  
  console.log(`the sum of leaf nodes is ${sum}`);