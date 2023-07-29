const Card = require('../classes/Card').Card;
const Deck = require('../classes/Deck').Deck;
const Dealer = require('../classes/Player').Dealer;
const UserPlayer = require('../classes/Player').UserPlayer;


const hitButton = document.getElementById('hitButton')

const dealer = new Dealer();
const user_player = new UserPlayer("UNNAMED")
const deck = new Deck();

function kyle(){
    alert("i work")
}
function deal_initial_cards(){
    dealer.dealCard(deck, user_player);
    dealer.dealCard(deck, dealer);
    dealer.dealCard(deck, user_player);
    dealer.dealCard(deck, dealer);
}
    

function start_game(){
        this.deal_initial_cards()
        while(!this.user_player.isTurnOver() && this.user_player.getTotalValueOfHand() < 22){
            this.dealer.dealCard(this.deck, this.user_player);
        }
        this.dealer.showHand();
        console.log("______________________________________________")
        console.log(this.user_player.hand)
}


alert("update done")
hitButton.addEventListener('click',kyle)//dealer.dealCard(deck,user_player))
