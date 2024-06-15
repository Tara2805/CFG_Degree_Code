//Bubble Sort Algorithm

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
  
  console.log(bubbleSort([8,4,2,6,7,5,3,1]));