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
            arfimação: "afirmação"
        },
        {
            texto: "Não, tenho outras coisas em mente",
            arfimação: "afirmação"
        }
     ]
  },
  {
    enunciado: "Então voce pretende seguir nestas areas?",
    alternativas: [
        {
            texto: "Sim, tudo esta organizzado",
            arfimação: "afirmação"
        },
        {
            texto: "Não",
            arfimação: "afirmação"
        } 
     ]
  },
  {
    enunciado: "E ja foi feito cada planejamento?",
    alternativas: [
        {
            texto: "Sim",
            arfimação: "afirmação"
        },
        {
            texto: "Não cara",
            arfimação: "afirmação"
        }
     ]
  },
  {
    enunciado: "Voce quer isso?",
    alternativas: [
        {
            texto: "SIM",
            arfimação: "afirmação"
        },
        {
            texto: "NÃO",
            arfimação: "afirmação"
        },
     ]
  }
];
let atual = 0;
let perguntaAtual;

function mostrarPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas = text.Content = perguntaAtual.enunciado;
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function(){
            atual++;
            mostrarPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostrarPergunta();