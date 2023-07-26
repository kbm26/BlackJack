class Deck{

    current_cards_in_decks = [];

    constructor(){

    }

    shuffle_deck(){
        this.current_cards_in_decks = []
        card_suits = ["h", "s", "d", "c"];
        card_values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        card_names = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];

        for(let value_index = 0; value_index < card_values.length(); value_index++){
            card_value = card_values[value_index];
            card_name = card_names[value_index];

            for(let suit_index = 0; suit_index < card_suits.length(); suit_index++){
                card_suit = card_suits[suit_index];
                // this.current_cards_in_decks.push(new Card(card_value, card_suit, card_name))
            }

        }

    }


}

module.export = {Deck:Deck}