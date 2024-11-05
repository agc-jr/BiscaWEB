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

// Função para criar o baralho
function createDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit: suit, ...value });
        }
    }
}