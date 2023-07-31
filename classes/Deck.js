const Card = require('./Card').Card

class Deck{

    current_cards_in_decks = [];

    constructor(){
        this.create_deck();
    }

    get_current_cards_in_deck = () =>{
        return this.current_cards_in_decks;
    }

    get_card_count = () =>{
        return this.current_cards_in_decks.length;
    }

    take_card = () =>{
        if(this.get_card_count() == 0){
            return null;
        }
        let random_index = Math.trunc(Math.random() * this.get_card_count());
        this.current_cards_in_decks = this.current_cards_in_decks.filter(card => this.current_cards_in_decks[random_index] != card);
        return this.current_cards_in_decks[random_index] 
    }

    create_deck(){
        this.current_cards_in_decks = []
        this.card_suits = ["h", "s", "d", "c"];
        this.card_values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        this.card_names = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];

        for(let value_index = 0; value_index < this.card_values.length; value_index++){
            this.card_value = this.card_values[value_index];
            this.card_name = this.card_names[value_index];

            for(let suit_index = 0; suit_index < this.card_suits.length; suit_index++){
                this.card_suit = this.card_suits[suit_index];
                this.current_cards_in_decks.push(new Card(this.card_value, this.card_suit, this.card_name))
            }

        }
        console.log("done creating deck")

    }


}

module.exports = {Deck:Deck}