var Elô = {
  nome: "Elô",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var Angela = {
  nome: "Angela",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}


Angela.pontos = calculaPontos(Angela)
Elô.pontos = calculaPontos(Elô)


function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates + (jogador.derrotas * -2)
  return pontos 
}

var jogadores = [Angela, Elô]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for(i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i +")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i +")'>Derrota</button></td></tr>"
    
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
  
}

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
} 

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++ 
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
} 

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}
