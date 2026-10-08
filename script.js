const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultados");
const perguntas = [
  {
    enunciado: "Em conceitos tecnologicos, voce gosta de planejar?",
    alternativas: [
        {
            texto: "Sim, tenho minhas ideias pessoais",
            arfimacao: "afirmação"
        },
        {
            texto: "Não, tenho outras coisas em mente",
            arfimacao: "afirmação"
        },
     ],
  },
  {
    enunciado: "Então voce pretende seguir nestas areas?",
    alternativas: [
        {
            texto: "Sim, tudo esta organizzado",
            arfimacao: "afirmação"
        },
        {
            texto: "Não",
            arfimacao: "afirmação"
        },
     ],
  },
  {
    enunciado: "E ja foi feito cada planejamento?",
    alternativas: [
        {
            texto: "Sim",
            arfimacao: "afirmação"
        },
        {
            texto: "Não cara",
            arfimacao: "afirmação"
        },
     ],
  },
  {
    enunciado: "Voce quer isso?",
    alternativas: [
        {
            texto: "SIM",
            arfimacao: "afirmação"
        },
        {
            texto: "NÃO",
            arfimacao: "afirmação"
        },
     ],
  },
];

let atual = 0;
let perguntaAtual;

function mostrarPergunta() {
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function() {
            atual++;
            mostrarPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostrarPergunta();

function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}