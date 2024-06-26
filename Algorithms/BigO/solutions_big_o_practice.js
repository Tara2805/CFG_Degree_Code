/*
This function runs in O(1) time (or "constant time") relative to its input.
The input list could be 1 item or 1,000 items, but this function would still just require one "step."
*/

// Python
// def print_first_item(items):
//     print(items[0])

// JavaScript
const print_first_item = (items) => {
	console.log(items[0])
  }
  
  // TEST CASES
  // print_first_item([1,2,3,4,5])
  
  /*
  This function runs in O(n) time (or "linear time"), where n is the number of items in the list.
  If the list has 10 items, we have to print 10 times.
  If it has 1,000 items, we have to print 1,000 times.
  */
  
  // Python
  // def print_all_items(items):
  //     for item in items:
  //         print(item)
  
  // JavaScript
  const print_all_items = (items) => {
	items.forEach((item) => {
	  console.log(item)
	});
  }
  
  // TEST CASES
  // print_all_items([1,2,3,4,5])
  
  /*
  Thus this function runs in O(n^2) time (or "quadratic time").
  If the list has 10 items, we have to print 100 times.
  */
  
  // Python
  // def print_all_possible_ordered_pairs(items):
  //     for first_item in items:
  //         for second_item in items:
  //             print(first_item, second_item)
  
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
  
  /*
  This is O(2n), which we just call O(n).
  When you're calculating the big O complexity of something, you just throw out the constants.
  */
  
  // Python
  // def print_all_items_twice(items):
  //     for item in items:
  //         print(item)
  
  //     # Again
  //     for item in items:
  //         print(item)
  
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
  
  /*
  This is O(1 + n/2 + 100), which we just call O(n).
  for big O notation we're looking at what happens as n gets arbitrarily large.
  As n gets really big, adding 100 or dividing by 2 has a decreasingly significant effect.
  */
  
  // Python
  // def print_first_item_then_first_half_then_say_hi_100_times(items):
  //     print(items[0])
  
  //     middle_index = len(items) // 2
  //     index = 0
  //     while index < middle_index:
  //         print(items[index])
  //         index += 1
  
  //     for time in range(100):
  //         print("hi")
  
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
  
  
  // ##########################################################
  
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
  
  
  // SOLUTION 1
  // O(n^2) time | O(1) space --> n is the length of input array
  
  
  // Python
  // def first_dupe_value1(array):
  //     min_second_idx = len(array)
  
  //     for i in range(len(array)):
  //         value = array[i]
  //         for j in range(i + 1, len(array)):
  //             val_to_compare = array[j]
  //             if value == val_to_compare:
  //                 min_second_idx = min(min_second_idx, j)
  
  //     if min_second_idx == len(array):
  //         return -1
  
  //     return array[min_second_idx]
  
  // Javascript
  const first_dupe_value1 = (array) => {
	minSecondIdx = array.length
  
	for (let i = 0; i < array.length; i++) {
	  const value = array[i]
	  for (let j = i + 1; j < array.length; j++) {
		const valToCompare = array[j]
		if (value === valToCompare) {
		  minSecondIdx = Math.min(minSecondIdx, j)
		}
	  }
  
	  if (minSecondIdx === array.length) {
		return -1
	  }
	}
  
	return array[minSecondIdx]
  }
  
  // TEST CASES
  // console.log(first_dupe_value1([2,1,5,3,3,2,4])) // answer 3
  // console.log(first_dupe_value1([2,1,5,2,3,3,4])) // answer 2
  
  
  // SOLUTION 2
  // O(n) time | O(n) space --> n is the length of input array
  
  // Python
  // def first_dupe_value2(array):
  //     seen = set()
  //     for val in array:
  //         if val in seen:
  //             return val
  //         seen.add(val)
  //     return -1
  
  // JavaScript
  const first_dupe_value2 = (array) => {
	let seen = []
	for (let i = 0; i < array.length; i++) {
	  const val = array[i]
	  if (seen.includes(val)) {
		return val
	  }
	  seen.push(val)
	}
	return -1
  }
  
  // TEST CASES
  // console.log(first_dupe_value2([2,1,5,3,3,2,4])) // answer 3
  // console.log(first_dupe_value2([2,1,5,2,3,3,4])) // answer 2
  
  
  // SOLUTION 3
  
  // O(n) time | O(1) space --> n is the length of input array
  // this is the most optimal, but also quite challenging solution.
  
  /*
  this is for very attentive codes who might have noticed that all numbers in the array are between
  0 and n, this means that we can map all numbers in the array to indexes
  
  E.g.
  
  NUMS [5 ,1, 3, 2, 5, 3]
  ------------------
  IDX   0, 1, 2, 3, 4, 5
  
  All numbers in the array have value smaller or equal to the max index.
  
  High lever explanation:
  ----------------------
  as we traverse through the array, we check each item and if we have seen it already,
  then we make it negative. As we come to our next element, we make it negative and if
  we see that we have already seen it in the array, then we found our match.
  
  NB: 3rd solution is quite complex, you don't need to fully understand
  this solution, but just to see how time-space complexity changes with different approaches.
  */
  
  // Python
  // def first_dupe_value3(array):
  //     for val in array:
  //         abs_val = abs(val)
  //         if array[abs_val - 1] < 0:
  //             return abs_val
  //         # make that value negative by multiplying to -1
  //         array[abs_val - 1] *= -1
  //     return -1
  
  // JavaScript
  const first_dupe_value3 = (array) => {
	for (let i = 0; i < array.length; i++) {
	  const absVal = Math.abs(array[i])
	  if (array[absVal - 1] < 0) {
		return absVal
	  }
	  // make that value negative by multiplying to -1
	  array[absVal - 1] = (-1) * array[absVal - 1]
	}
	return -1
  }
  
  // TEST CASES
  // console.log(first_dupe_value3([2,1,5,3,3,2,4])) // answer 3
  // console.log(first_dupe_value3([2,1,5,2,3,3,4])) // answer 2
  