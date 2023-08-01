class Player{

    /*
    default values at the start of the game
    */

    hand = [];
    turnOver = false;

    hit(card) {
        //Hand gets an extra card
        this.hand.push(card);
    }

    stand(){
        this.turnOver = true;
        alert("hahahaha")
    }

    resetHand(){
        this.hand = []
    }

    getTotalValueOfHand(){
        this.totalValueOfHand = 0;
        this.hand.forEach(card =>{
            this.totalValueOfHand += card.get_value();
        })
        return this.totalValueOfHand;
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
        this.pot = 0;
    }

    getPot(){
        return this.pot
    }

    setPot(num){
        this.pot = num
    }

    bet(num){
        if((this.balance - num) >=0 ){
        this.balance = this.balance - num;
        this.pot = this.pot +num;
        }
        else{
            alert("sho")
        }
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
        this.hand.forEach(element => {
            console.log(element)
        });
    }

    getName(){
        return this.name
    }

    dealCard(deck, player){
        console.log(`There are ${deck.get_card_count()} Cards in the Deck`);
        this.card = deck.take_card();
        player.hit(this.card);
        console.log(`${this.card.get_card_name()} of ${this.card.get_suit()} was removed from the Deck\nThere are ${deck.get_card_count()} Cards in the Deck`);
        alert(`${this.card.get_card_name()}${this.card.get_suit()}`)
    }


}

module.exports = {
    Player:Player,
    UserPlayer:UserPlayer,
    Dealer:Dealer
}