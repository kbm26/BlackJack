const addCard = require('../classes/animation').add_card;


class Player{

    /*
    default values at the start of the game
    */

    hand = [];
    turnOver = false;

    hasBust(){
        if(this.hand.getTotalValueOfHand>21){
            return true
        }else{
            false
        }
    }

    hit(card) {
        //Hand gets an extra card
        this.hand.push(card);
    }

    stand(){
        this.turnOver = true;
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
            alert("GAME OVER")
        }
    }

    getBalance(){
        return this.balance;
    }

    showHand(card){
        addCard(card,this.hand.length)
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

    showHand(cardName){
        //Show a single card to the player
        let card = document.createElement("img");
        const dealerHand = document.getElementById("card-holder")
        card.src = `../assets/${cardName}.svg`;
        card.classList.add("dealers-cards")
        card.setAttribute("id", `svg-img`)
        dealerHand.appendChild(card);

    }

    getName(){
        return this.name
    }

    dealCard(deck, player){
        console.log(`There are ${deck.get_card_count()} Cards in the Deck`);
        let card = deck.take_card();
        player.hit(card);
        console.log(`${card.get_card_name()} of ${card.get_suit()} was removed from the Deck\nThere are ${deck.get_card_count()} Cards in the Deck`);
        let cardName = `${card.get_card_name()}${card.get_suit()}`
        player.showHand(cardName)
    }


}

module.exports = {
    Player:Player,
    UserPlayer:UserPlayer,
    Dealer:Dealer
}