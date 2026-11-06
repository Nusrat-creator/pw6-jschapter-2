function validateLuhn(cardNumber) {
  let cardStr = (typeof cardNumber === "number") ? cardNumber.toString() : cardNumber;
  
  let lastIndex = cardStr.length - 1;
  let checkDigitStr = cardStr.substring(lastIndex, cardStr.length);
  let payloadStr = cardStr.substring(0, lastIndex);

  let checkDigit = parseInt(checkDigitStr, 10);
  let payloadArray = payloadStr.split('');
  payloadArray.reverse();

  let sum = 0;
  payloadArray.forEach((char, index) => {
    let digit = parseInt(char, 10);

    if (index % 2 === 0) {
      digit = digit * 2;
      digit = (digit > 9) ? digit - 9 : digit;
    }

    sum += digit;
  });

  let calculatedCheckDigit = (10 - (sum % 10)) % 10;
  let status = (calculatedCheckDigit === checkDigit) ? "Validated" : "Not Validated";

  console.log(`Card Number: ${cardStr}`);
  console.log(`Calculated Check Digit: ${calculatedCheckDigit}`);
  console.log(`Original Check Digit: ${checkDigit}`);
  console.log(`Status: ${status}`);
  console.log("-----------------------------------");
}

console.log("Test 1: Valid Wikipedia Example");
validateLuhn(79927398713); 

console.log("Test 2: Invalid Number (Wrong Check Digit)");
validateLuhn("79927398714"); 

console.log("Test 3: Valid Fictitious Visa");
validateLuhn("4111111111111111"); 

console.log("Test 4: Invalid Fictitious Visa");
validateLuhn(4111111111111112); 