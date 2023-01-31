function Chutar() {
  var numSecreto = parseInt(Math.random() * 11);
  console.log(numSecreto);
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numSecreto) {
    resultado.innerHTML = "Parabéns,você acertou!!!!";
  } else if (chute < 0 || chute > 10) {
    resultado.innerHTML = "O animal, chuta um número entre 0 e 10.";
  } else {
    resultado.innerHTML = "Errou, tente de novo. O número era: " + numSecreto;
  }
}

//Desafios desta aula!
//Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.

//Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.

//Pesquisar e aprender a diferença entre == e ===(feito)
