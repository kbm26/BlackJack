class Card{

    numeric_value;
    suit;
    card_name;

    constructor(numeric_value, suit, card_name){
        this.numeric_value = numeric_value;
        this.suit = suit;
        this.card_name = card_name;
    }

    get_value = () =>{
        return this.numeric_value;
    }

    get_suit = () => {
        return this.suit;
    }

    get_card_name = () => {
        return this.card_name;
    }
}

// export default Card;
module.exports = {Card:Card}