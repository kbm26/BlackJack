const player_hand_container = document.getElementById("blackjack-board-container")
const hitButton = document.getElementById('card-deck-image-6')
let player_hand_count = 0;

export function add_card (name,cardNumber){
    let card = document.createElement("img");
    card.src = `../assets/${name}.svg`;
    card.classList.add("player-cards")
    card.setAttribute("id", `dealt-card-${cardNumber}`)
    player_hand_container.appendChild(card);
}



// hitButton.addEventListener('click', add_card);
