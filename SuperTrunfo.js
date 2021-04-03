var cartaAngela = {
  nome: "Harry Potter",
  atributos: {
    ataque: 83,
    defesa: 78,
    magia: 85
   }
}

var cartaArthur = {
  nome:"Hiro Hamada",
  atributos: {
    ataque: 60,
    defesa: 80,
    magia: 20
  }
}

var cartaFilipe = {
  nome:"Legolas",
  atributos: {
    ataque: 92,
    defesa: 40,
    magia: 70
  }
}


var cartaMaquina 
var cartaJogador
var cartas =  [cartaAngela, cartaFilipe, cartaArthur]


function sortearCarta() {
  var nMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[nMaquina]
  var nJogador = parseInt(Math.random() * 3)
  
  while (nJogador == nMaquina) {
    var nJogador = parseInt(Math.random() * 3)
    }
 
  cartaJogador = cartas[nJogador]
  console.log(cartaJogador)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
  
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
 }
  opcoes.innerHTML = opcoesTexto
}


function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
    }
  }



function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  console.log(cartaMaquina)
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    alert("Você venceu!")
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    alert("Você perdeu!")
  } else {
    alert("Empatou!")
  }
  
}
