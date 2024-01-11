function valuesGreaterThanSecond(arr) {
    const secondValue = arr[1];
    const filteredValues = arr.filter(value => value > secondValue);
  
    console.log(filteredValues);

    return filteredValues.length;
  }

  