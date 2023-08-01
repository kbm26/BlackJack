const player_hand_container = document.getElementById("player-hand-container")
const hitButton = document.getElementById('card-deck-image-6')
let player_hand_count = 0;

export const add_card = () =>{
    player_hand_count++;
    let card = document.createElement("img");
    card.src = "../assets/acec.svg";
    card.classList.add("player-cards")
    card.setAttribute("id", `dealt-card-${player_hand_count}`)
    player_hand_container.appendChild(card);
}


hitButton.addEventListener('click', add_card);
