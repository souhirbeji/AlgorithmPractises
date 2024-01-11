// Replace these values with your birth month and day
const birthMonth = 5; // Example: May
const birthDay = 23;  // Example: 23rd

// Replace these values with the numbers to check
const checkMonth = 5; // Example: May
const checkDay = 23;  // Example: 23rd

if ((birthMonth === checkMonth && birthDay === checkDay) || (birthMonth === checkDay && birthDay === checkMonth)) {
  console.log("How did you know?");
} else {
  console.log("Just another day....");
}
