// STACK


class StackList {
  /*
  Stack Implementation using a List
  */

  constructor(size) {
    this.container = Array(size)
    this.capacity = size
    this.top = -1
  }

  push(x) {
    /*
    Method to add an element `x` to the stack 
    */
    if (this.is_full()) {
      console.log("Stack is full! Calling exit()…")
      throw "stop execution"
    }
    console.log("Inserting", x, "into the stack…")
    this.top = this.top + 1
    this.container[this.top] = x
  }

  pop() {
    /*
    Method to pop a top element from the stack
    */
    if (this.is_empty()) {
      console.log("Stack is empty! Calling exit()…")
      throw "stop execution"
    }

    console.log("Removing", this.peek(), "from the stack")

    // decrease stack size by 1 and (optionally) return the popped element
    const top = this.container[this.top]
    this.top = this.top - 1
    return top
  }

  peek() {
    /*
    Method to return the top element of the stack 
    */
    if (this.is_empty()) {
      throw "stop execution"
    }
    return this.container[this.top]
  }

  size() {
    /*
    Method to return the size of the stack
    */
    return this.top + 1
  }

  is_empty() {
    return this.size() == 0
  }

  is_full() {
    return this.size() == this.capacity
  }
}

// SHOW EXAMPLES BELOW, then encourage students to try out different methods.
// stack = new StackList(3)

// stack.push(1)
// stack.push(2)

// stack.pop()
// stack.pop()

// stack.push(3)

// console.log("Top element is", stack.peek())
// console.log("The stack size is", stack.size())

// stack.pop()

// if (stack.is_empty()) {
//   console.log("The stack is empty")
// } else {
//   console.log("The stack is not empty")
// }

//####################################################

/*
Stack implementation using deque class in JavaScript

Unfortunately (unlike Python) JavaScript doesn't come with a bunch of data structures
in it's standard library. You'll need to run `npm install` before being able to run this.

Source: https://github.com/datastructures-js/deque
*/

// const { Deque } = require('@datastructures-js/deque')

// // NB: module deque alredy has useful methods, so we don't need to re-implement them
// const stack = new Deque()

// stack.pushFront('1')
// stack.pushFront('2')
// stack.pushFront('3')
// stack.pushFront('4')

// console.log("Top element is", stack.front())  // prints the stack's top (4)

// console.log("Removing", stack.popFront(), "from the stack")  // removing the top element (4)
// console.log("Removing", stack.popFront(), "from the stack")  // removing the next top (3)

// // // returns the total number of elements present in the stack
// console.log("Stack size is", stack.size())

// console.log("Removing", stack.popFront(), "from the stack")  // removing the top element (2)
// console.log("Removing", stack.popFront(), "from the stack")  // removing the next top (1)

// // check if the stack is empty
// if (stack.size() == 0) {
//   console.log("The stack is empty")
// } else {
//   console.log("The stack is not empty")
// }

// //##############################################

// QUEUE

/*
Queue Implementation using a List
*/


class MyQueue {

  constructor(size) {
    this.q = Array(size)  // list to store queue elements
    this.capacity = size  // maximum capacity of the queue
    this.front = 0  // front points to the front element in the queue
    this.rear = -1  // rear points to the last element in the queue
    this.count = 0  // current size of the queue
  }

  pop() {
    if (this.is_empty()) {
      console.log("Queue Underflow!! Terminating process.")
      throw "stop execution"
    }

    console.log("Removing element…", this.q[this.front])

    this.front = (this.front + 1) % this.capacity
    this.count = this.count - 1
  }

  append(value) {
    if (this.is_full()) {
      console.log("Queue is full! Terminating process.")
      throw "stop execution"
    }
    
    console.log("Inserting element…", value)

    this.rear = (this.rear + 1) % this.capacity
    this.q[this.rear] = value
    this.count = this.count + 1
  }

  peek() {
    if (this.is_empty()) {
      console.log("Queue is empty!! Terminating process.")
      throw "stop execution"
    }

    return this.q[this.front]
  }

  size() {
    return this.count
  }

  is_empty() {
    return this.size() == 0
  }

  is_full() {
    return this.size() == this.capacity
  }
}

// SHOW EXAMPLES BELOW, then encourage students to try out different methods.
// q = new MyQueue(5)

// q.append(1)
// q.append(2)
// q.append(3)

// console.log("The queue size is", q.size())
// console.log("The front element is", q.peek())
// q.pop()
// console.log("The front element is", q.peek())

// q.pop()
// q.pop()

// if (q.is_empty()) {
//   console.log("The queue is empty")
// } else {
//   console.log("The queue is not empty")
// }

/*
Queue implementation using deque class in Python
*/

const { Deque } = require('@datastructures-js/deque')

// NB: module deque alredy has useful methods, so we don't need to re-implement them
queue = new Deque()

queue.pushBack(1)
queue.pushBack(2)
queue.pushBack(3)
queue.pushBack(4)

console.log("The front element is", queue.front())  // 1

queue.popFront()  // removing the front element (1)
queue.popFront()  // removing the front element (2)

// Print front item of the queue
console.log("The front element is", queue.front())  // 3

console.log("The queue size is", queue.size())  // 2

// check whether the queue is empty
if (queue.size() == 0) {
  console.log("The queue is empty")
} else {
    console.log("The queue is not empty")
}
