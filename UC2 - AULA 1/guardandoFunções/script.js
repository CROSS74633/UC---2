function dancar (){
    alert("voce ganhou uma dacinha virtual💃🕺")
}


function chamarHeroi (nomeHeroi){
    alert(nomeHeroi.toUpperCase()+ "!!!")
}


function criarApelido (nome, animal){
    alert("seu apelido é " + nome + " " + animal + "🦊")
}


function moedasTotais (p, g){
    return Number(p) +Number(g)*5
}
function mostrarMoedas (){
    let p = prompt("quantas moedas pequenas voce tem, meu jovem? ")

    let g = prompt("quantas moedas grandes voce tem, meu jovem?")
    let total = moedasTotais(p, g)
    alert(" voce fez " + total + " pontos em moedas") 
}


function mostrarCodinome (){
    let objeto = prompt( "digite um objeto ai")
    let numero = Number(prompt ("digite um numero ai"))
    alert("seu codinome é " + objeto + numero + "✖️")
}


const calcularChocolate = (dinheiro) => {
    return (dinheiro / 2.5)
}
function mostrarChocolate(){
    let grana = prompt("quantos reais voce tem???")
    alert("voce pode comprar " + calcularChocolate(Number(grana)) + " chocolates")
}