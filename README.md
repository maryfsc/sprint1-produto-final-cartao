# sprint1-produto-final-cartao
Um dos produtos finais do Sprint 1 da Laboratória SP 2018-1: Validador de Cartão de Crédito usando o algoritmo de Luhn.

No evento de clique no botão do formulário HTML, após input do usuário com o número do cartão, executa a função JavaScript isValidCard().

Variável stringCardNumber recebe o input do usuário, coletado do formulário HTML, como string.

Variável reversedStringArray recebe o número em string de stringCardNumber, transforma em array separando os elementos e retorna uma array dos números do cartão em ordem inversa, ainda em string.

Cria-se uma array vazia chamada numberToValidate.

reversedStringArray é percorrida por meio de um for, iniciado no index 0 e recebendo incremento de 1:
  
  Variável stringToNumber recebe o elemento do index atual em reversedStringArray a cada iteração e transforma o elemento string em number.
  
  numberToValidate recebe stringToNumber por meio do método push() a cada iteração -- o elemento novo e parseado é adicionado à array vazia numberToValidate em sua última posição. 
  
  Loop é finalizado após percorrer toda reversedStringArray, executando os passos acima.

Cria-se a variável indefinida multiplyingElement.

numberToValidate é percorrida por meio de um for, iniciado no index 1 e recebendo o incremento de index atual mais 2, seguindo o algoritmo de Luhn para selecionar as posições pares de numberToValidate:

  Variável multiplyingElement recebe o elemento que está no index atual de numberToValidate e o multiplica por dois, seguindo o algoritmo de Luhn. 
  
  Na primeira estrutura condicional, se o valor contido em multiplyingElement for maior que nove, subtrai-se nove desse mesmo valor, reduzindo-o a uma unidade, simplificando e seguindo o algoritmo de Luhn. 
  
  Na segunda estrutura condicional, se o valor de multiplyingElement for diferente do elemento da posição atual de numberToValidate, este último recebe o primeiro, tornando numberToValidate uma array com as posições pares tratadas de acordo com o algoritmo de Luhn.
  
  Loop é finalizado após percorrer toda numberToValidate, executando os passos acima.
 
 Variável finalCardNumber recebe 0.
 
 numberToValidate é percorrida por meio de um for, iniciando em index 0 e recebendo o incremento de 1:
 
   finalCardNumber recebe seu próprio valor acrescido do elemento que se encontra na posição atual de numberToValidate, se tornanando a soma de todos seus elementos.
   
   Loop é encerrado após percorrer toda numberToValidate com os passos acima.

Na última estrutura condicional, se finalCardNumber for múltiplo de 10, ou seja, se o resto de sua divisão por 10 for 0, retorna um alerta dizendo 'Tudo ok! Seu cartão de crédito é válido!', de acordo com o algoritmo de Luhn.
Caso contrário, retorna um alerta dizendo 'Seu cartão de crédito não é válido! Tente outro número.'

Encerra-se a função.
