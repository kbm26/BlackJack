const Card = require('../classes/Card').Card
const expect = require('chai').expect;

describe("correct Cards with correct values", function(){


    describe("when making new Cards", function(){
        const six_of_hearts = new Card(6, "h", "six");
        const jack_of_spades = new Card(10, "s", "jack");
        const ace_of_diamonds = new Card(11, "d", "ace");

        it("should have the correct values for six of hearts", function(){
            expect(six_of_hearts.get_card_name()).to.equal("six");
            expect(six_of_hearts.get_value()).to.equal(6);
            expect(six_of_hearts.get_suit()).to.equal("h");
        })
        it("should have the correct values for jack of spades", function(){
            expect(jack_of_spades.get_card_name()).to.equal("jack");
            expect(jack_of_spades.get_value()).to.equal(10);
            expect(jack_of_spades.get_suit()).to.equal("s");
        })
        it("should have the correct values for ace of diamonds", function(){
            expect(ace_of_diamonds.get_card_name()).to.equal("ace");
            expect(ace_of_diamonds.get_value()).to.equal(11);
            expect(ace_of_diamonds.get_suit()).to.equal("d");
        })
    })

})

