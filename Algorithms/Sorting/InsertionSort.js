Insertion Sort Algorithm

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