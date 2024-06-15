/*
Below are examples of implementing different sort techniques adopted from various sources.
Manage your time and if necessary drop Merge and Quick sort examples.

We are also going to do a performance profiling experiment to see which technique is the fastest.

At the end of this experiment discuss your results with the group.
Note that Selection and Quick sorts are going to be very slow in comparison -- be patient.
*/


// ######## BUBBLE SORT ##########


const bubbleSort = (arr) => {
  // This defines a function named `bubbleSort` that takes an array `arr` as an argument.
  
  const swap = (i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]
  // Inside `bubbleSort`, another function `swap` is defined.
  // The `swap` function takes two indices `i` and `j` and swaps the elements at those positions in the array `arr`.
  // This line uses array destructuring to swap the elements.

  const n = arr.length
  // The variable `n` is assigned the length of the array `arr`.
  // This is the total number of elements in the array.

  var swapped = true
  // A variable `swapped` is declared and initialized to `true`.
  // This variable will be used to keep track of whether any elements were swapped in the last pass through the array.

  var x = -1
  // A variable `x` is declared and initialized to `-1`.
  // This will be used to keep track of the number of complete passes through the array.

  while (swapped) {
    // A `while` loop starts that will continue as long as `swapped` is `true`.
    
    swapped = false
    // At the start of each pass, `swapped` is set to `false`.
    // If no elements are swapped in this pass, the loop will end.

    x = x + 1
    // Increment `x` by 1 to indicate another pass through the array.

    for (let i = 1; i < n - x; i++) {
      // A `for` loop starts with `i` initialized to 1.
      // The loop will run as long as `i` is less than `n - x`.
      // `i` is incremented by 1 after each iteration.
      // This ensures we don't compare already sorted elements.

      if (arr[i - 1] > arr[i]) {
        // Inside the `for` loop, there is an `if` statement.
        // It checks if the element at index `i-1` is greater than the element at index `i`.
        
        swap(i - 1, i)
        // If the condition is true, the `swap` function is called to swap the two elements.
        
        swapped = true
        // `swapped` is set to `true` to indicate that a swap has occurred.
      }
    }
  }
  return arr
  // After the `while` loop finishes (when no swaps have been made in a pass),
  // the sorted array `arr` is returned.
}



// ######## SELECTION SORT ##########


const selectionSort = (arr) => {
  // This defines a function named `selectionSort` that takes an array `arr` as an argument.
  
  for (let i = 0; i < arr.length; i++) {
    // This starts a `for` loop that iterates over each element in the array `arr`.
    // `i` is initialized to 0 and increases by 1 after each iteration.
    // The loop runs as long as `i` is less than the length of the array.

    var minimum = i
    // A variable `minimum` is declared and set to the current value of `i`.
    // This variable keeps track of the index of the smallest element found in the unsorted part of the array.

    for (let j = i + 1; j < arr.length; j++) {
      // This starts another `for` loop that iterates over the unsorted part of the array.
      // `j` is initialized to `i + 1` and increases by 1 after each iteration.
      // The loop runs as long as `j` is less than the length of the array.

      // Select the smallest value
      if (arr[j] < arr[minimum]) {
        // This checks if the current element `arr[j]` is smaller than the element at index `minimum`.
        
        minimum = j
        // If `arr[j]` is smaller, `minimum` is updated to the value of `j`.
        // Now `minimum` points to the index of the new smallest element found so far.
      }
    }

    // Place it at the front of the sorted end of the array
    [arr[minimum], arr[i]] = [arr[i], arr[minimum]]
    // After finding the smallest element in the unsorted part of the array,
    // swap it with the element at index `i` to place it at the beginning of the unsorted part.
    // This uses array destructuring to swap `arr[minimum]` and `arr[i]`.
  }

  return arr
  // After the outer `for` loop has finished, the array `arr` is sorted.
  // Return the sorted array.
}


// ######## INSERTION SORT ##########

const insertionSort = (arr) => {
  // This defines a function named `insertionSort` that takes an array `arr` as an argument.
  
  for (let i = 0; i < arr.length; i++) {
    // This starts a `for` loop that iterates over each element in the array `arr`.
    // `i` is initialized to 0 and increases by 1 after each iteration.
    // The loop runs as long as `i` is less than the length of the array.

    const cursor = arr[i]
    // A constant variable `cursor` is declared and set to the current element `arr[i]`.
    // `cursor` holds the value of the element to be inserted into the sorted part of the array.

    var pos = i
    // A variable `pos` is declared and set to the current value of `i`.
    // `pos` keeps track of the current position of the element being inserted.

    while (pos > 0 && arr[pos - 1] > cursor) {
      // This `while` loop checks two conditions:
      // 1. `pos > 0`: Ensures we don't go out of bounds on the left side of the array.
      // 2. `arr[pos - 1] > cursor`: Checks if the element to the left of `pos` is greater than `cursor`.
      // If both conditions are true, the loop continues.

      // Swap the number down the list
      arr[pos] = arr[pos - 1]
      // Move the element at `arr[pos - 1]` one position to the right (to `arr[pos]`).
      // This effectively shifts the element to the right to make space for the `cursor`.

      pos = pos - 1
      // Decrease `pos` by 1 to continue checking the next element to the left.
    }

    // Break and do the final swap
    arr[pos] = cursor
    // Once the correct position for `cursor` is found (when the `while` loop ends),
    // place `cursor` at the position `pos`.
  }

  return arr
  // After the `for` loop has finished, the array `arr` is sorted.
  // Return the sorted array.
}
// console.log(insertionSort([8,4,1,2,3,6,5,7]));

/*
NB: Both Quick sort and Merge sort practice are 'good to know' rather than must. 
Please judge your time and drop these examples all together if
necessary. They are more complex and involve recursion. You may want to share these after class.

It is MORE IMPORTANT for us to complete our timing experiment! 
*/


// ######## QUICK SORT ##########


// helper function No 1
const partition = (array, begin, end) => {
  var pivotIdx = begin
  for (let i = begin + 1; i < end + 1; i++) {
    if (array[i] <= array[begin]) {
      [array[i], array[pivotIdx]] = [array[pivotIdx], array[i]]
      pivotIdx += 1
    }
  }
  [array[pivotIdx], array[begin]] = [array[begin], array[pivotIdx]]
  return pivotIdx
}

// // helper function No 2
const quickSortRecursion = (array, begin, end) => {
  if (begin >= end) {
    return
  }
  const pivotIdx = partition(array, begin, end)
  quickSortRecursion(array, begin, pivotIdx - 1)
  quickSortRecursion(array, pivotIdx + 1, end)
}

// main function No 1
const quickSort = (array, begin=0, end=null) => {
  if (!end) {
    end = array.length - 1
  }
  return quickSortRecursion(array, begin, end)
}

// ######## MERGE SORT ##########


// main function
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  // splice arr in half so arr ends up being right
  const left = arr.splice(0, mid)
  return merge(mergeSort(left),mergeSort(arr))
}

// helper function
const merge = (left, right) => {
  var arr = []
  // loop until one array is empty
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())  
    } else {
      arr.push(right.shift()) 
    }
  }
  // add all elements to a single array
  return [ ...arr, ...left, ...right ]
}

// // ######################################################################################

// // Timing Experiment

// // ######################################################################################

// generate an array of random numbers. The len of array is 1000 and numbers vary in the range 0 - 10,000
const sample = () => Math.floor(Math.random() * 10000)
// const array = Array.from({length: 1000}, _ => sample())

/*
Let's profile performance of our sorting functions. 
We run all sort functions with the same array sampleSize times each
and see what the average execution time per sorting method is. 

NB: the time return value is  *seconds as float*
*/

const sampleSize = 100

// a pseudo timeit.timeit function
const timeit = (sampleSize, testFunc) => {
  var total = 0;
  for (let i=0; i < sampleSize; i++) {
    const array = Array.from({length: 1000}, _ => sample())
    const start = performance.now();
    testFunc(array);
    const end = performance.now();
    const duration = (end - start) / 1000;
    total += duration;
  }
  return total
}

const bubbleTimeit = timeit(sampleSize, bubbleSort)
console.log(`Bubble sort run ${sampleSize} times in: ${bubbleTimeit} seconds\n`)

// should be quicker than bubble - https://www.geeksforgeeks.org/selection-sort-vs-bubble-sort/
const selectionTimeit = timeit(sampleSize, selectionSort)
console.log(`Selection sort run ${sampleSize} times in: ${selectionTimeit} seconds\n`)

const insertionTimeit = timeit(sampleSize, insertionSort)
console.log(`Insertion sort run ${sampleSize} times in: ${insertionTimeit} seconds\n`)

// ######### PROFILE QUICK AND MERGE SORTS ONLY IF YOU IMPLEMENTED THEM ##############

// const quickTimeit = timeit(sampleSize, quickSort)
// console.log(`Quick sort run ${sampleSize} times in: ${quickTimeit} seconds\n`)

// const mergeTimeit = timeit(sampleSize, mergeSort)
// console.log(`Merge sort run ${sampleSize} times in: ${mergeTimeit} seconds\n`)
