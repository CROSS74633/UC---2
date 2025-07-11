function soft(){
    let pergunta1 = prompt("o que você costuma fazer para se acalmar quando está nervoso???")
    let pergunta2 = prompt("qual foi o seu maior problema social durante o curso, se foi facil fazer amizades e taus???")
    document.getElementById("resposta").innerHTML=`Resposta 1: ${pergunta1} e Reposta2: ${pergunta2}`
}
function hard(){
    let pergunta1 = prompt("qual foi a UC mais dificil pra voce durante o curso???")
    let pergunta2 = prompt("qual foi o maior problema que voce teve durante os coigos??? obs: . e , não valem")
    document.getElementById("resposta").innerHTML=`Resposta 1: ${pergunta1} e Reposta2: ${pergunta2}`
}