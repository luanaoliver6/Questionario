const perguntas = [
{
enunciado: " O sol é uma estrela?",
alternativas: [
"No",
"Yes"
]
},
{
enunciado: "A capital do Brasil é São Paulo?",
alternativas: [
"sim.",
"não"
]
},
{
enunciado: "Os humanos possuem sentidos principais?",
alternativas: [
"são 5",
"são 4",

]
},
{
enunciado: "A água ferve a 100 graus Celsius ao nível do mar?",
alternativas: [
"ferve sim",
"isso não existe."
]

},
{
enunciado: "O monte Everest é a montanha mais alta do mundo?",
alternativas: [
"é a menor .",
"sim."
]
}
];
let atual = 0;
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');
function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
alternativasContainer.innerHTML = '';
perguntaAtual.alternativas.forEach((alternativa, index) => {
const button = document.createElement('button');
button.textContent = alternativa;
button.addEventListener('click', () => {
atual++;
if (atual < perguntas.length) {
mostraPergunta();
} else {
caixaPerguntas.textContent = 'Você completou o questionário!';
alternativasContainer.innerHTML = '';
}
});
alternativasContainer.appendChild(button);
});
}
mostraPergunta();