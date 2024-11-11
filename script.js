/*JS Da BISCA*/

const suits = ["Copas", "Espadas", "Ouros", "Paus"];
const values = [
    { name: "Ás", points: 11 },
    { name: "Sete", points: 10 },
    { name: "Rei", points: 4 },
    { name: "Valete", points: 3 },
    { name: "Dama", points: 2 },
    { name: "Seis", points: 0 },
    { name: "Cinco", points: 0 },
    { name: "Quatro", points: 0 },
    { name: "Três", points: 0 },
    { name: "Dois", points: 0 }
];

let deck = [];
let playerHand = [];
let computerHand = [];
let trunfoCard;
let playerScore = 0;
let computerScore = 0;


// Função para criar o baralho
const createDeck = () => {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit: suit, ...value });
        }
    }
}

// Função para embaralhar o baralho
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}


window.onload = function() {    

    // Supondo que você já tenha definido o trunfo, exiba-o:
    //const trunfo = { name: "A", suit: "Ouros" }; // Exemplo de trunfo
    //displayTrunfoCard(trunfo);

   

    document.getElementById("start-game").addEventListener("click", startGame);
}

//funcao para distribuir as cartas 
function distribuirDeck() {    
    for(let i = 0; i < 3; i++) {
        let cartaParaJogador = deck.shift();
        playerHand.push(cartaParaJogador);
    }
    for(let i = 0; i < 3; i++) {       
        let cartaParaComputador = deck.shift();
        computerHand.push(cartaParaComputador);
    }
    trunfoCard = deck.shift();
}

//Funcao para apresentar a carta Trunfo
function displayTrunfoCard(trunfo) {
    const trunfoElement = document.getElementById("trunfo-card-front");
    trunfoElement.innerHTML = "<div class='card-value'>"+trunfo['name']+"</div><div class='card-suit'>"+getSuitSymbol(trunfo['suit'])+"</div>";
}

// Função para iniciar o jogo
function startGame() {
    createDeck();
    shuffleDeck();    
    playerScore = 0;
    computerScore = 0;
    distribuirDeck();
    exibeMesa();
}

//funcao para depois desenvolver a animacao de distribuicao de cartas
function exibeMesa(){
    document.getElementById("mesa").style.visibility = "visible";
    document.getElementById("botaoStartGame").style.visibility = "hidden";
    displayTrunfoCard(trunfoCard);

    //mostrar a mao do usuario
    const maoUser = document.getElementById("maoUSER");
    maoUser.innerHTML="";
    playerHand.forEach(exibePlayerHand);
}

function exibePlayerHand(item){
    const maoUser = document.getElementById("maoUSER");
    const div = "<div class='card suit-"+item['suit']+"'><div class='card-value'>"+item['name']+"</div><div class='card-suit'>"+getSuitSymbol(item['suit'])+"</div></div>";
    maoUser.innerHTML += div;
}

 // Função para obter o símbolo do naipe
 function getSuitSymbol(suit) {
    switch (suit) {
        case "Copas": return "♥";
        case "Espadas": return "♠";
        case "Ouros": return "♦";
        case "Paus": return "♣";
        default: return "";
    }
}