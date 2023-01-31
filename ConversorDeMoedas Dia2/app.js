function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolar = parseFloat(valor);

  var valorReal = valorDolar * 5;
  console.log(valorReal);
  var elementoConvertido = document.getElementById("valorReal");
  var valorConvertido = "O valor em reais é: R$ " + valorReal.toFixed(2);
  elementoConvertido.innerHTML = valorConvertido;
  //Divisão dolar bitcoin
  var valorElemento2 = document.getElementById("valor2");
  var valor2 = valorElemento2.value;
  var valorReal2 = parseFloat(valor2);

  var valorBitcoin = valorReal2 * 0.0000039;
  console.log(valorBitcoin);
  var elementoConvertido2 = document.getElementById("valorBitcoin");
  var valorConvertido2 = "O valor em Bitcoins é: " + valorBitcoin.toFixed(7);
  elementoConvertido2.innerHTML = valorConvertido2;
}

//Desafios desta aula!

//Adicionar outras moedas para converter.
//(feito +ou-)

//Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
//(Ñ feito)

//Conversor de temperaturas entre farenheit, kelvin e celcius.
//(Ñ feito)

//Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
//(feito +ou-)
