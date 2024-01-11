function thisLengthThatValue(num1, num2) {
    if (num1 === num2) {
      console.log("Jinx!");
    }
    return Array(num1).fill(num2);
  }
  
  const resultArray = thisLengthThatValue(7, 5);
  console.log(resultArray); 
  