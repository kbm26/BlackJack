const Card = require('../classes/Card').Card;
const Deck = require('../classes/Deck').Deck;
const Dealer = require('../classes/Player').Dealer;
const UserPlayer = require('../classes/Player').UserPlayer;


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
let deck = new Deck();

bankAmount.textContent = user_player.getBalance()
pot.textContent = user_player.getTotalValueOfHand()



function deal_initial_cards(){
    dealer.dealCard(deck, user_player);
    dealer.dealCard(deck, dealer);
    dealer.dealCard(deck, user_player);
    dealer.dealCard(deck, dealer);
    playerHand.textContent = user_player.getTotalValueOfHand();
    dealerHand.textContent = dealer.getTotalValueOfHand();

}

function dealerTurn(){
    while(dealer.getTotalValueOfHand()<17){
        dealer.dealCard(deck,dealer)
    }
    if(dealer.getTotalValueOfHand()>21){
        alert("DEALER BUST")
    }
    dealerHand.textContent = dealer.getTotalValueOfHand()
}


function result(){
    if (user_player.hasBust()){
        alert("YOU BUST")
    }
    else if(dealer.hasBust()){
        alert("DEALER BUST")
    }
    else if(user_player.getTotalValueOfHand()>dealer.getTotalValueOfHand()){
        alert("YOU WON")
    }
    else if(user_player.getTotalValueOfHand()==dealer.getTotalValueOfHand()){
        alert("PUSH")
    }
    else{
        alert("YOU LOST")
    }
    
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
    pot.textContent= user_player.getPot()
    [...document.getElementsByClassName("dealers-cards")].map(n => n && n.remove());
    [...document.getElementsByClassName("player-cards")].map(n => n && n.remove());
    deck = new Deck()
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
    setTimeout(result,5)
    setTimeout(GameReset,5)
    
})

betButton.addEventListener('click',Game)

hitButton.addEventListener('click',()=>{
    dealer.dealCard(deck,user_player)
    playerHand.textContent = user_player.getTotalValueOfHand();
    if(user_player.getTotalValueOfHand()>21){
        alert("YOU BUST")
        GameReset();
        
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