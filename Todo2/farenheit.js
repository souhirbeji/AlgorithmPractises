function celsiusToFahrenheit(cDegrees) {
    const fDegrees = (cDegrees * 9/5) + 32;
    return fDegrees;
  }
  
  const celsiusValue = 50;
  
  const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
  console.log(`Celsius: ${celsiusValue}, Fahrenheit: ${fahrenheitValue}`);

  for (let celsius = 50; celsius >= -100; celsius--) {
    const fahrenheit = celsiusToFahrenheit(celsius);
    if (celsius === Math.round(fahrenheit)) {
      console.log(`At Celsius: ${celsius}, Fahrenheit and Celsius values are approximately equal.`);
    }
  }
  