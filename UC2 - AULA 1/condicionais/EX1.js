function compararNumeros (num1, num2){
    if(num1 === num2){
        // se forem iguais, exibe uma mensagem de sucesso no console
        alert("secesso! os numeros são iguais cara!")
}else{
// se a condiçao não for satisfeita ou verdadeira, ele executara o codigo abaixo
alert("que peninha... os numeros não são iguais cara!")
}

}
// solicita ao usuario o primeiro numero com prompt
let entrada1 = Number(prompt("digite o primeiro numero: "))
let entrada2 = Number(prompt("digite o segundo numero: "))
//chama a função passando os dois parametros
compararNumeros(entrada1, entrada2)