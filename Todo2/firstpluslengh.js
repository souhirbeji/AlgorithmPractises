function firstPlusLength(arr) {
    if (typeof arr[0] === 'number') {
      return arr[0] + arr.length;
    } else {
      console.log("The first value is not a number.");
      return null; // Handle the case when the first value is not a number
    }
  }
  
  // Example usage:
  const sum = firstPlusLength([5, 2, 8]);
  console.log(sum); // Output: 6
  