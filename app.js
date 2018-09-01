function cardValidator(input){
  let reversedNumber = Array.from(input.toString()).map(Number).reverse();
  let singleDigitNumber = reversedNumber.map(num => findEvenDigits(num, 0));
  
}

function findEvenDigits(digit, index) {
  if (index % 2 === 0){
    return digit;
  } else {
    if (num * 2 <= 9) {
      return num * 2;
    } else {
      return num * 2 - 9;
    }
  }
}



  // if (input === '') {
  //   alert('Digite os números do cartão!');
  // } else { 
  //   var reversedStringArray = input.split('').map(Number);

  //   var numberToValidate = [];

  //   for (i = 0; i < reversedStringArray.length; i++){
  //     var stringToNumber = parseInt(reversedStringArray[i]);
  //     numberToValidate.push(stringToNumber);
  //   }

  //   var multiplyingElement;

  //   for (j = 1; j < numberToValidate.length; j = j + 2){
  //     multiplyingElement = numberToValidate[j] * 2;
  //     if (multiplyingElement > 9) {
  //       multiplyingElement -= 9;
  //     }

  //     if (multiplyingElement != numberToValidate[j]){
  //       numberToValidate[j] = multiplyingElement;
  //     }
  //   } 

  //   var finalCardNumber = 0;

  //   for (t = 0; t < numberToValidate.length; t++){
  //     finalCardNumber += numberToValidate[t];
  //   }

  //   if (finalCardNumber % 10 === 0){
  //     return true; 
  //   } else {
  //     return false;
  //   }
  // }   