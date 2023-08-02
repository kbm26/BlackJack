const Card = require('../classes/Card').Card;
const Deck = require('../classes/Deck').Deck;
const Dealer = require('../classes/Player').Dealer;
const UserPlayer = require('../classes/Player').UserPlayer;
const addCard = require('../classes/animation').add_card;


const hitButton = document.getElementById('hitButton')
const betButton = document.getElementById('betButton')
const standButton = document.getElementById('standButton')
const bankAmount = document.getElementById('bankAmount')
const pot = document.getElementById('pot')
const chipTen = document.getElementById('bet10')
const chipTwenty = document.getElementById('bet20')
const chipFifty = document.getElementById('bet50')
const chipHundred = document.getElementById('bet100')
const playerHand = document.getElementById('playerHand')
const dealerHand = document.getElementById('dealerHand')




const dealer = new Dealer();
const user_player = new UserPlayer("UNNAMED")
const deck = new Deck();

bankAmount.textContent = user_player.getBalance()
pot.textContent = user_player.getTotalValueOfHand()



function deal_initial_cards(){
    dealer.dealCard(deck, user_player);
    dealer.dealCard(deck, dealer);
    dealerHand.textContent = dealer.getTotalValueOfHand()
    dealer.dealCard(deck, user_player);
    dealer.dealCard(deck, dealer);
    playerHand.textContent = user_player.getTotalValueOfHand();

}

function dealerTurn(){
    alert("im going to break")

    while(dealer.getTotalValueOfHand()<17){
        dealer.dealCard(deck,dealer)
        console.log(dealer.getTotalValueOfHand())
    }
    dealerHand.textContent = dealer.getTotalValueOfHand()

}

function result(){
    if(user_player.getTotalValueOfHand()>dealer.getTotalValueOfHand()){
        alert("YOU WON")
    }
    else if(user_player.getTotalValueOfHand()==dealer.getTotalValueOfHand()){
        alert("PUSH")
    }
    else{
        alert("YOU LOST")
    }
    GameReset()
}

function GameReset(){
    betButton.disabled= false
    chipTen.disabled=false
    chipTwenty.disabled=false
    chipFifty.disabled=false
    chipHundred.disabled=false
    hitButton.disabled=true
    standButton.disabled=true
    user_player.setPot(0)
    user_player.resetHand()
    dealer.resetHand()
    playerHand.textContent = user_player.getTotalValueOfHand();
    dealerHand.textContent = dealer.getTotalValueOfHand();

}

function Game(){
    betButton.disabled= true
    chipTen.disabled=true
    chipTwenty.disabled=true
    chipFifty.disabled=true
    chipHundred.disabled=true
    deal_initial_cards()
    hitButton.disabled=false
    standButton.disabled=false

}



function MakeBet(num){
    user_player.bet(num)
    bankAmount.textContent = user_player.getBalance()
    pot.textContent= user_player.getPot()
}


standButton.addEventListener('click',()=>{
    user_player.stand();
    dealerTurn()
    result()
})

betButton.addEventListener('click',Game)

hitButton.addEventListener('click',()=>{
    dealer.dealCard(deck,user_player)
    playerHand.textContent = user_player.getTotalValueOfHand();
    if(user_player.getTotalValueOfHand()>21){
        alert("BUST")
        GameReset()
    }
    

})
chipTen.addEventListener('click',()=>{
    MakeBet(10)
})

chipTwenty.addEventListener('click',()=>{
    MakeBet(20)
})

chipFifty.addEventListener('click',()=>{    
    MakeBet(50)
})

chipHundred.addEventListener('click',()=>{
    MakeBet(100)
})

// player_hand_container.addEventListener("click", add_card);