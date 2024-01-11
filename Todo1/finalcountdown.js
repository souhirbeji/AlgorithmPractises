function printMultiplesInRange(param1, param2, param3, param4) {
    let current = param2;
  
    while (current <= param3) {
      if (current % param1 === 0 && current !== param4) {
        console.log(current);
      }
      current++;
    }
  }
  
  // Example usage:
  printMultiplesInRange(3, 5, 17, 9);
  