const reverseNumber = (number) => {
    let reversedNumber = 0;
    while (number !== 0) {
      reversedNumber = reversedNumber * 10 + (number % 10);
      number = number / 10 | 0;
    }
    return reversedNumber;
  };
  
  // Example usage:
  const number = 12345;
  const reversedNumber = reverseNumber(number);
  console.log(`The reverse of ${number} is: ${reversedNumber}`);
  