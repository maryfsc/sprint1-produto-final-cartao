var stringCardNumber = prompt('Digite o número do cartão de crédito:');

function isValidCard(stringCardNumber) {
  var reversedStringArray = stringCardNumber.split('').reverse();
  var numberToValidate = [];

  for (i = 0; i < reversedStringArray.length; i++) {
    var stringToNumber = parseInt(reversedStringArray[i]);
    numberToValidate.push(stringToNumber);
  }

}