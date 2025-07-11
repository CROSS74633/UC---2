let formulario = {
    nome: "maria jose",
    email: "",
    cidade: ""
}

for(let campo in formulario){
    if(formulario[campo] === ""){
        console.log("o campo" + campo + "esta vazio! por favor, preencha!")
    }
}






