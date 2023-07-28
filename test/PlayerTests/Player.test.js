const { assert } = require('chai');
const { Dealer, UserPlayer } = require('../../Classes/Player');
const Deck = require('../../classes/Deck').Deck;
const Card = require('../../classes/Card').Card;

const Player = require('../../Classes/Player').Player;
const expect = require('chai').expect;

describe('Testing the Player Functions', function() {

    it('1. The name of a player', function(done) {
    let player = new UserPlayer("Kyle");
    assert.equal(player.getName(),"Kyle","The names do not equal");
    done();
    });
    
    it('2. The name of the dealer', function(done) {
        let player = new Dealer();
        assert.equal(player.getName(),"DEALER","The names do not equal");
        done();
    });

    it('3. Betting\'s impact on balance', function(done) {
    let player = new UserPlayer();
    player.bet(999);
    assert.equal(player.getBalance(),1,"The balance after betting is incorrect");
    done();
    });
    
    it('4. User\'s turn is over', function(done) {
        let player = new UserPlayer();
        player.stand();
        assert.isTrue(player.isTurnOver(),"Turn should be over");
        done();
    });

    describe('Testing the Dealer Functions', function(){
        let dealer = new Dealer()
        let player = new Player()
        let deck = new Deck()

        it('1. Dealer deals a card', function(done){
            dealer.dealCard(deck, player)

            assert.equal(deck.get_card_count(), 51, "there should be 1 less card in the deck")
            assert.equal(player.hand.length, 1, "there should be 1 card in the player's hand")
            
            done();
        })
    })

});