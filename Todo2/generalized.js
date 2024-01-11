function valuesGreaterThanSecondGeneralized(arr) {
    if (arr.length < 2) {
      console.log("Array must have at least two elements.");
      return null;
    }
  
    const secondValue = arr[1];
    const filteredValues = arr.filter(value => value > secondValue);
  
    // Print the values greater than the second value
    console.log(filteredValues);
  
    // Return the count of values
    return filteredValues.length;
  }
  
  // Example usage:
  const countGeneralized = valuesGreaterThanSecondGeneralized([1, 3, 5, 7, 9, 13]);
  console.log(countGeneralized); // Output: 4
  