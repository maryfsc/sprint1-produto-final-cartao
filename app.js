var stringCardNumber = prompt('Digite o número do cartão de crédito:');

function isValidCard(stringCardNumber) {
  var reversedStringArray = stringCardNumber.split('').reverse();
  
  var numberToValidate = [];

  for (i = 0; i < reversedStringArray.length; i++) {
    var stringToNumber = parseInt(reversedStringArray[i]);
    numberToValidate.push(stringToNumber);
  }

  var multiplyingElement;

  for (j = 1; j < numberToValidate.length; j = j + 2){
    multiplyingElement = numberToValidate[j] * 2;
    
    if (multiplyingElement > 9) {
      multiplyingElement -= 9;
    }

    if (multiplyingElement != numberToValidate[j]) {
       numberToValidate[j] = multiplyingElement;
      }      
  }  
 
  

  return numberToValidate;
}