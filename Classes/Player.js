class Player{

    /*
    default values at the start of the game
    */

    hand = [];
    turnOver = false;

    hit() {
        //Hand gets an extra card
    }

    stand(){
        this.turnOver = true;
    }

    isTurnOver(){
        return this.turnOver;
    }

}

class UserPlayer extends Player{

    constructor(name){
        super()
        this.name = name;
        this.balance = 1000;
    }

    bet(num){
        this.balance = this.balance - num;
    }

    getBalance(){
        return this.balance;
    }

    showHand(){
        //The cards displayed to the user
    }

    getName(){
        return this.name
    }


}

class Dealer extends Player{

    constructor(){
        super()
        this.name = "DEALER";
    }

    showHand(){
        //Show a single card to the player
    }

    getName(){
        return this.name
    }

}

module.exports = {
    Player:Player,
    UserPlayer:UserPlayer,
    Dealer:Dealer
}