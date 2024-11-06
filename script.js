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
    function displayTrunfoCard(trunfo) {
        const trunfoElement = document.getElementById("trunfo-card-front");
        trunfoElement.innerHTML = "<div class='card-value'>"+trunfo['name']+"</div><div class='card-suit'>"+getSuitSymbol(trunfo['suit'])+"</div>";
    }

    // Supondo que você já tenha definido o trunfo, exiba-o:
    const trunfo = { name: "A", suit: "Ouros" }; // Exemplo de trunfo
    displayTrunfoCard(trunfo);

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
}


document.getElementById("start-game").addEventListener("click", startGame);

// Função para iniciar o jogo
function startGame() {
    createDeck();
    shuffleDeck();    
    playerScore = 0;
    computerScore = 0;
}