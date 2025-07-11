/*let professor = {
    nome: 'dalvana',
    idade: 24,
    tarefas: ['dar aula', 'ser linda'],
    contarPiada: function(){
        console.log('sabe quem é rapido que nem o flash mas chega atrasado toda hora???, exatamente é o kalléoooo')
    }
}

console.log(professor)*/






// EX 1 


/*let aluno = {
    nome: "Kalléo",
    idade: 16,
    turma: 203,
    curso: "TDS",
}

console.log(aluno)*/


// Exercicio 2

/*let alienTurista = {
    nomeGalactico: "thragg",
    planetaDeOrigem: "Viltrum",
    coisasQueTrouxe: "Seus Punhos para conquistar o planeta terra com seu exercito de viltrumitas",
    assustadoCom: "O Mark!",
    falaPortugues: true
}

console.log(alienTurista)*/







// Exemplo 1


/*let professor = {
    nome: "dalvana",
    idade: 25,
    email: "dalvana@gmail.com"
}

console.log(professor.idade)
console.log(professor["email"])*/



/*let professor = {
    nome: "dalvana",
    idade: 25,
    email: "dalvana@gmail.com"
}

professor.nome = "Mika"
professor['email']

console.log(professor.nome)
console.log(professor["nome"])*/







// EX 1


/*let filme = {
    nome: "mentalista",
    anoDeLançamento: 2008,
    elenco: "Simon Baker, Robin Tunney, Amanda Righetti, Tim Kang, Owain Yeoman",
    jáAssistiu: true
}

console.log(filme.nome)
console.log(filme.anoDeLançamento)
console.log(filme["elenco"])
console.log(filme["jáAssistiu"])*/








// EX 2


/*let pessoa = {
    nome: "kalléo",
    idade: 16,
    generoMusical: "musica geek",
}

console.log(`Nome: ${pessoa.nome} idade: ${pessoa.idade} e Genero Musica: ${pessoa.generoMusical}`)*/




/*let cachorro = {
    nome: "bolt",
    raça: "vira-lata",
    latir: function(){
        console.log("au au!")
    }
}

cachorro.latir()*/





/*let aluno = {
    nome: "kalléo Kaefer",
    idade: 16,
    escola: "UA",
    apresentar: function(){
        console.log(`ola, eu me chamo ${nome}, eu tenho ${idade} anos, e eu estudo na escola ${escola}`)
    }
}

console.log(aluno)*/






// ATOM

/*let atom = {
    nome: "atom",
    modelo: "segunda geração",
    anoDeFabricação: 2011,
    abto: "dar porrada em robo novo",
    apresentar: function(){
        console.log(`eu sou o robo ${this.nome}, o meu modelo é de ${this.modelo} e eu fui lançado em ${this.anoDeFabricação}, e o meu abto é ${this.abto}`)
    },
    falar: function(){
        console.log("🥊🥊🥊🕺🕺🕺🪩📻")
    }
}


atom.apresentar()
atom.falar()*/









// exemplo


/*let donoDoPet = {
    nome: "kalléo",
    pet: {
        nomeDoPet: "garfield",
        raça: "da rua",
        idade: "4 anos"
    }
}

console.log(donoDoPet.pet.nomeDoPet)
console.log(donoDoPet.nome)
console.log(donoDoPet.pet.idade)*/






/*let curso = {
    nome: "noturno frontend",
    linguagens: ["JS", "CSS", "HTML"]
}

console.log(curso.linguagens[0])





let professores = [
    {nome: "andreia", modelo: 1}
    {nome: "victor", modelo: 2}
    {nome: "mina", modelo: 3}
]

console.log(professores[1].nome)*/





// EXERCICIO





/*let escola = {
    alunos: {
        aluno1: {
            nomes: "edson",
            idade: 16,
            notas:{
                matematica: 4,
                ingles: 10
            }
        },
        aluno2: {
            nome: "kalléo",
            idade:16,
            notas:{
                eduFisica: 8,
                biologia: 10
            }
        },
        aluno3: {
            nome: "yuki",
            idade: 16,
            notas:{
                religiao: 11,
                eduFisica: 10
            }
        }
    }
}

console.log(escola)*/









// FILME



/*let filme = {
    nome: "mentalista",
    anoDeLançamento: 2008,
    elenco: ["Simon Baker", "Robin Tunney", "Amanda Righetti, Tim Kang", "Owain Yeoman"],
    personagens: ["patrick jane", "teresa lisboa", "grace", "kimboll cho", "wayne",],
    jáAssistiu: true
}


console.log(`${filme.elenco[0]} interpreta ${filme.personagens[0]}`)
console.log(`${filme.elenco[1]} interpreta ${filme.personagens[1]}`)
console.log(`${filme.elenco[2]} interpreta ${filme.personagens[2]}`)

filme.elenco[1] ="xuxa"

console.log(filme)*/








/*let celular = {
    marca: "Nokia",
    modelo: "primeiro",
    cor: "",
    armazenamento: "1KB",
    caracteristica: "indestrutivel"
}


for(let campo in celular){
    if(celular[campo] === ""){
        console.log("o campo " + campo + " esta vazio! por favor, preencha!")
    }
}*/






/*let usuario = { 
    nome: "julio",
    idade: 32,
    email: "kalleoantunes@gamil.com",
    cargo: "professor"
}

let novoUsario = {
    ...usuario,
    nome: "jorge",
    idade: 28,
    email: "kalleoantunes@gamil.com"
}

console.log(novoUsario)*/





/*const usuario={
    nome:"professor",
    idade:25,
    email:"não há",
    cidade: "SP",
    endereco:"Rua dos Baloso",
    CPF:"Não há"
    
}
const novoUser={
    ...usuario,
    nome:"professor 2",
    idade:30
}
const novoUser1={
    ...usuario,
    nome:"professor 3",
    idade:15,
    cpf:30
}
console.log(usuario)
console.log(novoUser)
console.log(novoUser1)*/







/*let listaDeNomes = ["mika", "paula", "victor"]

let copiaListaDeNomes = [...listaDeNomes]

console.log(copiaListaDeNomes)*/













function adicionarDetalhesPessoa(){
    let pessoa = {
        nome: "Kalléo",
        idade: 16,
        profissão: "avaliador de shikigamis",
        hobies: ["RPG", "tiktok"],
        amigos: ["chris", "edson", "sid", "dalvana", "jianL", "guilherme", "valen"],
        comidas: ["X", "churrasco", "pasoca"],
        amogos: {
            amigo1: "chris",
            amigo2: "edson",
            amigo3: "sid",
            amigo4: "dalvana",
            amigo5: "jianL",
            amigo6: "guilherme",
            amigo7: "valen",
            idade: 18,
            idade: 16,
            idade: 27,
            idade: 29,
            idade: 28,
            idade: 22,
            idade: 22,
        }
    }
    console.log(`o nome de minha pessoa é ${pessoa.nome} suas comidas preferidas são ${pessoa.comidas[0]},${pessoa.comidas[1]},${pessoa.comidas[2]} e o que eu gosto de fazer é ${pessoa.hobies[0]} e os meus amigos são ${pessoa.amigos.amigo1}, ${pessoa.amigos.amigo2}, ${pessoa.amigos.amigo3}, ${pessoa.amigos.amigo4},${pessoa.amigos.amigo5},${pessoa.amigos.amigo6},${pessoa.amigos.amigo7},`)
    const pessoa2={
        ...pessoa,
        nome:"sid",
        idade: 28,
        cidade: "SC",
        hobbies:["Programar", "Ler","SuperHeroi"],
    }
    console.log(`Nome da pessoa ${pessoa2.nome} sua comida preferida é ${pessoa.comidas[0]} e você gosta de ${pessoa2.hobbies[0]} e seus hobbies são ${pessoa2.hobbies[1]} ,  ${pessoa2.hobbies[2]} e ${pessoa2.hobbies[3]} e seus amigos são ${pessoa2.amigos[0]}, ${pessoa2.amigos[1]} e ${pessoa2.amigos[2]}`)
}
adicionarDetalhesPessoa()





