function isValidCard(){
  var stringCardNumber = document.getElementById('card-number').value;

  if (stringCardNumber === '') {
    alert('Digite os números do cartão!');
  } else { 
    var reversedStringArray = stringCardNumber.split('').reverse();

    var numberToValidate = [];

    for (i = 0; i < reversedStringArray.length; i++){
      var stringToNumber = parseInt(reversedStringArray[i]);
      numberToValidate.push(stringToNumber);
    }

    var multiplyingElement;

    for (j = 1; j < numberToValidate.length; j = j + 2){
      multiplyingElement = numberToValidate[j] * 2;
      if (multiplyingElement > 9) {
        multiplyingElement -= 9;
      }

      if (multiplyingElement != numberToValidate[j]){
        numberToValidate[j] = multiplyingElement;
      }
    } 

    var finalCardNumber = 0;

    for (t = 0; t < numberToValidate.length; t++){
      finalCardNumber += numberToValidate[t];
    }

    if (finalCardNumber % 10 === 0){
      return alert('Tudo ok! Seu cartão de crédito é válido!'); 
    } else {
      return alert('Seu cartão de crédito não é válido! Tente outro número.');
    }
  }   
}