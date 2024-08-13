const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Na saída da escola você e seus amigos se deparam com um filhote de cachorro agonizando de dor, após ser atropelado. Qual foi sua reação?",
        alternativas: [
            {
                texto: "Ficaria calmo, e ajudaria o cachorro.",
                afirmacao: "Você ajudou o cachorro."
            },
            {
                texto: "Entraria em desespero e não ajudaria o cachorro.",
                afirmacao: "Você não conseguiu ajudar cachorro pois entrou em desespero."
            }
        ]
    },
    {
        enunciado: "Após todo o ocorrido com o cachorro atropelado, o que você iria fazer?.",
        alternativas: [
            {
                texto: "Ligar para o veterinário.",
                afirmacao: "Resolveu ligar para o veterinário pois era a melhor opção para ele."
            },
            {
                texto: "Pediu para seus amigos ligarem ao veterinário, pois não sabia lidar com a situção.",
                afirmacao: "Deixou para seus amigos ligarem para o veterinário."
            }
        ]
    },
    {
        enunciado: "Depois que os veterinários chegaram, eles te perguntam.- Você ira acompanhar o filhote?",
        alternativas: [
            {
                texto: "Sim, eu irei acompanha-lo.",
                afirmacao: "Decidiu Acompanha-lo pois você ficou preocupado com situação dele."
            },
            {
                texto: "Não, pois não consigo ver o filhote machucado.",
                afirmacao: "Não acompanhou o filhote pois ele estava muito machucado."
            }
        ]
    },
    {
        enunciado: "Depois de toda a situação com o cachorro, oque você faz?",
        alternativas: [
            {
                texto: "Deixa para que os veterinários, resolvam oque fazer com o cachorro.",
                afirmacao: "Você não quis ter mais, nenhum contato com cachorro."
            },
            {
                texto: "Você cria um carinho por ele e resolve adota-lo.",
                afirmacao: "Você criou um carinho pelo cachorro e adotou."
            }
        ]
    },
    {
        enunciado: "Se você estivesse no lugar do cachorro, oque você pensaria? ",
        alternativas: [
            {
                texto: "Iria morrer?",
                afirmacao: "Deixou que os veterinários levassem o cachorro para uma ONG, para ser adotado por outra pessoa"
            },
            {
                texto: "Iria ser salvo, e resgatado por alguém.",
                afirmacao: "O cachorro virou seu melhor amigo, e ele acompanhou você construindo uma família, durante a sua vida. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "E no final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
