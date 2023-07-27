const Deck = require('../classes/Deck').Deck;
const Card = require('../classes/Card').Card;
const expect = require('chai').expect;

describe("using a Deck", function(){
   
    describe("when making a brand new deck", function(){
        // deck1 = new Deck();

        it("should have 52 cards", function(){
            deck1 = new Deck();
            expect(deck1.get_card_count()).to.equal(52)
        })
    })


    describe("when removing a card from the deck", function(){

        it("should have 51 cards", function(){
            deck1 = new Deck();
            card1 = deck1.take_card();
            expect(deck1.get_card_count()).to.equal(51)
        })

        it("should not have that card in the deck anymore", function(){
            expect(deck1.get_current_cards_in_deck()).to.not.contain(card1);
        })
    })
})