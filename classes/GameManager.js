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


        // main game loop goes here . . .



}