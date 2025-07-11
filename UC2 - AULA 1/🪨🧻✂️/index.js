const botoes = document.querySelectorAll("button[data-choice]");

const textoJ1 = document.getElementById("player1-choice");
const textoJ2 = document.getElementById("player2-choice");

const textoResultado = document.getElementById("winner");

let jogada1 = null;
let jogada2 = null;

function verificarVencedor(j1, j2) {
    if (j1 === j2) {
        return "empate!";
    } 
    if (
        (j1 === "pedra" && j2 === "tesoura") ||
        (j1 === "papel" && j2 === "pedra") ||
        (j1 === "tesoura" && j2 === "papel")
    ) {
        return "jogador 1 venceu! 😎";
    } else {
        return "jogador 2 venceu! 😎";
    }
}

function novoJogo() {
    jogada1 = null;
    jogada2 = null;
    textoJ1.textContent = "jogador 1: escolha";
    textoJ2.textContent = "jogador 2: escolha";
    textoResultado.textContent = "";
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const escolha = botao.getAttribute("data-choice");
        if (jogada1 === null) {
            jogada1 = escolha;
            textoJ1.textContent = "jogador 1 já escolheu";
            textoResultado.textContent = "vez do jogador 2!";
        } else if (jogada2 === null) {
            jogada2 = escolha;
            textoJ2.textContent = "jogador 2 já escolheu";
            const resultado = verificarVencedor(jogada1, jogada2);
            textoResultado.textContent = `${resultado} (J1: ${jogada1} | J2: ${jogada2})`;
        } else {
            novoJogo();
            jogada1 = escolha;
            textoJ1.textContent = "jogador 1 já escolheu";
            textoResultado.textContent = "vez do jogador 2!";
        }
    });
});

novoJogo();
