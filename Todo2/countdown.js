function countdownArray(number) {
    let countdown = [];
    for (let i = number; i >= 0; i--) {
      countdown.push(i);
    }
  
    return countdown;
  }
  
  // Example usage:
  const resultArray = countdownArray(5);
  console.log(resultArray); // Output: [5, 4, 3, 2, 1, 0]
  console.log(resultArray.length); // Output: 6
  