function cardValidator(input){
  let reversedNumber = Array.from(input.toString()).map(Number).reverse();
  
  let singleDigitNumber = reversedNumber.map(num => multiplyEvenPositions(num, 0));
  
  let finalCardNumber = parseInt(singleDigitNumber.toString().split(',').join(''));


  return finalCardNumber % 2 ? true : false;
}

function multiplyEvenPositions(digit, index) {
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