// Atividade 6 - A jornada do array

// criando o inventario do heroi:
// o heroi começa sua aventura com alguns itens básico. vamos armazenar esses itens em um array.

let inventario = ["espada do destino: 3", "botas da agilidade: 3", "shuriken: 6", "amuleto do guardião: 15", "elixir da sabedoria: 5"]

// 3. exibindo o inventario inicial do heroi
console.log(inventario)

// 4. encontrando um tesouro
// O heroi encontra um baú de tesouro e ganha um novo item!!!

inventario.push("escudo da coragem: 3")
console.log(inventario)

console.log(`no inventario contem ${inventario.length} itens agora`)

// 5. enfrentando um inimigo
// o herói enfrenta um goblin chamado goblinDoTigrinho . qual arma voce vai usar???
console.log("um goblin apareceu!!! prepare-se para a batalha!!! dano: 13")
// usando itens do inventario para lutar
let itemUsado1 = inventario[2] // indice do item
console.log(`voce ataca o goblin com sua ${itemUsado1}`)

// 6. o goblin sentiu o golpe... agora ele tenta seu último ataque com um dano de 3! como você finaliza esse adversário?
let itemUsado2 = inventario[0]

console.log(`voce finaliza o goblin com ${itemUsado2}`)

// 7. Um golem aproveita sua distração e o ataca violentamente com um soco simico dano: 9.. como voce revida?
let itemUsado3 = inventario[0]
console.log(`voce revida com ${itemUsado3}`)
// calcule seus recursos
let recursosResistencia 
console.log(`meus recursos de resistencia ${recursosResistencia}`)
// 8 . finalizando a aventura... por enquanto... nosso adeus nâo é para sempre
// como voce finaliza o golem?
itemUsado4 = inventario[1]
console.log(`o heroi finaliza sua aventura com um golem, utilizando : ${itemUsado4}`)