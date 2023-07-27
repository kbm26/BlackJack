const { assert } = require('chai');
const { Dealer, UserPlayer } = require('../../Classes/Player');

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
});