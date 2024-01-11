function printMultiplesInRange(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i -= mult) {
      console.log(i);
    }
  }
  
  
  printMultiplesInRange(4, 2, 1);
  