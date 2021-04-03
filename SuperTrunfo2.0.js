var cartaAngela = {
    nome: "Harry Potter",
    imagem: "https://static1.purebreak.com.br/articles/3/88/69/3/@/336640--harry-potter-vem-ver-as-melhores-cena-950x0-1.jpg",
    atributos: {
        ataque: 76,
        defesa: 75,
        magia: 90
    }
}

var cartaArthur = {
    nome: "Hiro Hamada",
    imagem: "https://i.ytimg.com/vi/6I_gWqjvjSs/maxresdefault.jpg",
    atributos: {
        ataque: 72,
        defesa: 80,
        magia: 0
    }
}

var cartaFilipe = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 87,
        defesa: 89,
        magia: 0
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaAngela, cartaArthur, cartaFilipe]


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibeCartaJogador()
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById('carta-jogador')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute; ">';
  
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  opcoesTexto = ""
  
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
    var divResultado = document.getElementById('resultado')
    var atributoSelecionado = obtemAtributoSelecionado()
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
     var htmlResultado = '<p class="resultado-final">Venceu!</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
     var htmlResultado = '<p class="resultado-final">Perdeu!</p>'
    } else {
     var htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }
  
  divResultado.innerHTML = htmlResultado
  exibeCartaMaquina()
 
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById('carta-maquina')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute; ">';
  
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + 
          cartaMaquina.atributos[atributo] + "<br>"
    }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  
}
