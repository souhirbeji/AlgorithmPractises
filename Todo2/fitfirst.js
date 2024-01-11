function fitTheFirstValue(arr) {
    const firstValue = arr[2];
    const arrayLength = arr.length;
  
    if (firstValue > arrayLength) {
      console.log("Too big!");
    } else if (firstValue < arrayLength) {
      console.log("Too small!");
    } else {
      console.log("Just right!");
    }
  }
  fitTheFirstValue([8, 9, 3]); 