const UserPlayer = require('../Classes/Player').UserPlayer;
const Dealer = require('../Classes/Player').Dealer;
const Deck = require('./Deck').Deck;

class GameManager{

    constructor(){
        this.dealer = new Dealer();
        // TODO get user's name
        this.user_player = new UserPlayer("UNNAMED")
        this.deck = new Deck();
        this.game_count = 1;
    }


    deal_initial_cards(){
        this.dealer.dealCard(this.deck, this.user_player);
        this.dealer.dealCard(this.deck, this.dealer);
        this.dealer.dealCard(this.deck, this.user_player);
        this.dealer.dealCard(this.deck, this.dealer);
    }


    start_game(){
        this.deal_initial_cards()
        while(!this.user_player.isTurnOver() && this.user_player.getTotalValueOfHand() < 22){
            this.dealer.dealCard(this.deck, this.user_player);
        }
        // console.log(this.dealer.hand)
        // console.log("______________________________________________")
        // console.log(this.user_player.hand)
    }



    



}

// gh = new GameManager();
// gh.start_game()