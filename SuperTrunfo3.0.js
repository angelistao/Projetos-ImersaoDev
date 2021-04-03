var cartaAngela = {
    nome: "Harry Potter",
    imagem: "https://static1.purebreak.com.br/articles/3/88/69/3/@/336640--harry-potter-vem-ver-as-melhores-cena-950x0-1.jpg",
    atributos: {
        ataque: 83,
        defesa: 75,
        magia: 90
    }
}

var cartaArthur = {
    nome: "Hiro Hamada",
    imagem: "https://i.ytimg.com/vi/6I_gWqjvjSs/maxresdefault.jpg",
    atributos: {
        ataque: 70,
        defesa: 80,
        magia: 72
    }
}

var cartaFilipe = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 90,
        defesa: 90,
        magia: 60
    }
}

var carta4 = {
  nome: "Yami Yugi", 
  imagem: "https://pbs.twimg.com/profile_images/1176726268437352448/dOFVRIBN.jpg",
  atributos: {
    ataque: 75,
    defesa: 70,
    magia: 92
  }
}


var carta5 = {
  nome: "Galadriel, A Senhora de Lórien",
  imagem: "https://www.theonering.net/torwp/wp-content/uploads/2012/12/galadriel.jpg",
  atributos: {
    ataque: 78,
    defesa: 90,
    magia: 89
  }
}

var carta6 = {
  nome: "Legolas",
  imagem: "https://i.pinimg.com/564x/6b/63/b4/6b63b4e7928205dbca3cedaf8d544846.jpg",
  atributos: {
    ataque: 89,
    defesa: 87,
    magia: 80
  }
}

var carta7 = {
  nome: "Korra, o Avatar",
  imagem: "https://i.pinimg.com/564x/42/60/88/426088b5f166cafb2d80142a4be74390.jpg",
  atributos: {
    ataque: 90,
    defesa: 82,
    magia: 90
  }
}

var carta8 = {
  nome: "Feiticeira Escarlate",
  imagem: "https://i.pinimg.com/originals/6a/e5/49/6ae549ea4b45a8b469a00a8bad684b41.jpg",
  atributos: {
    ataque: 93,
    defesa: 62,
    magia: 92
  } 
}

var cartaMaquina
var cartaJogador
var cartas = [cartaAngela, cartaArthur, cartaFilipe, carta4, carta5, carta6, carta7, carta8]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length 
  divQuantidadeCartas.innerHTML = html 
}

function atualizaPlacar() {
  var divPlacar = document.getElementById('placar')
  var html = "Jogador = " + pontosJogador + " / " + "Máquina = " + pontosMaquina
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Jogador venceu!</p>'
      pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Máquina vence!</p>'
      pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">EMPATE</p>'
    }
  
  if (cartas.length == 0){
    alert("Fim de jogo. Cartas esgotadas!")
    if (pontosJogador > pontosMaquina){
      htmlResultado = '<p class="resultado-final">Você venceu!</p>'
    } else if (pontosMaquina > pontosJogador){
      htmlResultado = '<p class="resultado-final">Você perdeu.</p>'
    } else {
      htmlResultado = '<p class="resultado-final">EMPATE!</p>'
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }
  
 divResultado.innerHTML = htmlResultado
 document.getElementById('btnJogar').disabled = true
  
 atualizaPlacar()
 exibeCartaMaquina()
 atualizaQuantidadeDeCartas()

}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true 
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}

