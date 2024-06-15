Selection Sort Algorithm

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