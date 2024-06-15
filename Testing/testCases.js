// Practice Cases

const print_first_item = (items) => {
	console.log(items[0])
  }
  
  // TEST CASES
  // print_first_item([1,2,3,4,5])
  


  
// JavaScript
const print_all_items = (items) => {
	items.forEach((item) => {
	  console.log(item)
	});
  }
  
  // TEST CASES
  // print_all_items([1,2,3,4,5])

// JavaScript
const print_all_possible_ordered_pairs = (items) => {
	items.forEach((firstItem) => {
	  items.forEach((secondItem) => {
		console.log(firstItem, secondItem)
	  });
	});
  }
  
  // TEST CASES
  // print_all_possible_ordered_pairs([1,2,3,4,5])


  // JavaScript
const print_all_items_twice = (items) => {
	items.forEach((item) => {
	  console.log(item)
	});
	
	// Again
	items.forEach((item) => {
	  console.log(item)
	});
  }
  
  // TEST CASES
  // print_all_items_twice([1,2,3,4,5])



  // JavaScript
const print_first_item_then_first_half_then_say_hi_100_times = (items) => {
	console.log(items[0])
  
	const middleIndex = Math.floor(items.length / 2)
	for (let index = 0; index < middleIndex; index++) {
	  console.log(items[index])
	}
  
	for (let time = 0; time < 100; time++) {
	  console.log("hi")
	}
  }
  
  // TEST CASES
  // print_first_item_then_first_half_then_say_hi_100_times([1,2,3,4,5])

  
/*
We are going to solve one problem in 3 different ways to see how Time-Space complexity is affected.

TASK: Find first duplicate value
--------------------------------

Given an array of int between 1 and n, where n is the length of array, write a function that returns
the first int that appears more than once (when we read array left to right)
If no integer appears more than once, then we return -1.

Example 1
---------
input = [2,1,5,2,3,3,4]
output = 2

2 is the first integer that appears more than once. 3 also appears more than once, but
second 3 appears after second 2.


Example 2
---------
input = [2,1,5,3,3,2,4]
output = 3

3 is the first integer that appears more than once. 2 also appears more than once, but
second 2 appears after second 3.

*/