/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./classes/Card.js":
/*!*************************!*\
  !*** ./classes/Card.js ***!
  \*************************/
/***/ ((module) => {

eval("class Card{\n\n    numeric_value;\n    suit;\n    card_name;\n\n    constructor(numeric_value, suit, card_name){\n        this.numeric_value = numeric_value;\n        this.suit = suit;\n        this.card_name = card_name;\n    }\n\n    get_value = () =>{\n        return this.numeric_value;\n    }\n\n    get_suit = () => {\n        return this.suit;\n    }\n\n    get_card_name = () => {\n        return this.card_name;\n    }\n}\n\n// export default Card;\nmodule.exports = {Card:Card}\n\n//# sourceURL=webpack://chai/./classes/Card.js?");

/***/ }),

/***/ "./classes/Deck.js":
/*!*************************!*\
  !*** ./classes/Deck.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Card = (__webpack_require__(/*! ./Card */ \"./classes/Card.js\").Card)\n\nclass Deck{\n\n    current_cards_in_decks = [];\n\n    constructor(){\n        this.create_deck();\n    }\n\n    get_current_cards_in_deck = () =>{\n        return this.current_cards_in_decks;\n    }\n\n    get_card_count = () =>{\n        return this.current_cards_in_decks.length;\n    }\n\n    take_card = () =>{\n        if(this.get_card_count() == 0){\n            return null;\n        }\n        let random_index = Math.trunc(Math.random() * this.get_card_count());\n        this.current_cards_in_decks = this.current_cards_in_decks.filter(card => this.current_cards_in_decks[random_index] != card);\n        return this.current_cards_in_decks[random_index] \n    }\n\n    create_deck(){\n        this.current_cards_in_decks = []\n        this.card_suits = [\"h\", \"s\", \"d\", \"c\"];\n        this.card_values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];\n        this.card_names = [\"ace\", \"two\", \"three\", \"four\", \"five\", \"six\", \"seven\", \"eight\", \"nine\", \"ten\", \"jack\", \"queen\", \"king\"];\n\n        for(let value_index = 0; value_index < this.card_values.length; value_index++){\n            this.card_value = this.card_values[value_index];\n            this.card_name = this.card_names[value_index];\n\n            for(let suit_index = 0; suit_index < this.card_suits.length; suit_index++){\n                this.card_suit = this.card_suits[suit_index];\n                this.current_cards_in_decks.push(new Card(this.card_value, this.card_suit, this.card_name))\n            }\n\n        }\n        console.log(\"done creating deck\")\n\n    }\n\n\n}\n\nmodule.exports = {Deck:Deck}\n\n//# sourceURL=webpack://chai/./classes/Deck.js?");

/***/ }),

/***/ "./classes/GameManager.js":
/*!********************************!*\
  !*** ./classes/GameManager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Card = (__webpack_require__(/*! ../classes/Card */ \"./classes/Card.js\").Card);\nconst Deck = (__webpack_require__(/*! ../classes/Deck */ \"./classes/Deck.js\").Deck);\nconst Dealer = (__webpack_require__(/*! ../classes/Player */ \"./classes/Player.js\").Dealer);\nconst UserPlayer = (__webpack_require__(/*! ../classes/Player */ \"./classes/Player.js\").UserPlayer);\n\n\nconst hitButton = document.getElementById('hitButton')\nconst betButton = document.getElementById('betButton')\nconst standButton = document.getElementById('standButton')\nconst bankAmount = document.getElementById('bankAmount')\nconst pot = document.getElementById('pot')\nconst chipTen = document.getElementById('bet10')\nconst chipTwenty = document.getElementById('bet20')\nconst chipFifty = document.getElementById('bet50')\nconst chipHundred = document.getElementById('bet100')\nconst playerHand = document.getElementById('playerHand')\nconst dealerHand = document.getElementById('dealerHand')\n\n\n\n\nconst dealer = new Dealer();\nconst user_player = new UserPlayer(\"UNNAMED\")\nconst deck = new Deck();\n\nbankAmount.textContent = user_player.getBalance()\npot.textContent = user_player.getTotalValueOfHand()\n\n\nfunction kyle(){\n    alert(\"i work\")\n}\n\nfunction deal_initial_cards(){\n    dealer.dealCard(deck, user_player);\n    dealer.dealCard(deck, dealer);\n    dealerHand.textContent = dealer.getTotalValueOfHand()\n    dealer.dealCard(deck, user_player);\n    dealer.dealCard(deck, dealer);\n    playerHand.textContent = user_player.getTotalValueOfHand();\n\n}\n\nfunction dealerTurn(){\n    alert(\"im going to break\")\n\n    while(dealer.getTotalValueOfHand()<17){\n        dealer.dealCard(deck,dealer)\n        console.log(dealer.getTotalValueOfHand())\n    }\n    dealerHand.textContent = dealer.getTotalValueOfHand()\n\n}\n\nfunction result(){\n    if(user_player.getTotalValueOfHand()>dealer.getTotalValueOfHand()){\n        alert(\"YOU WON\")\n    }\n    else if(user_player.getTotalValueOfHand()==dealer.getTotalValueOfHand()){\n        alert(\"PUSH\")\n    }\n    else{\n        alert(\"YOU LOST\")\n    }\n    GameReset()\n}\n\nfunction GameReset(){\n    betButton.disabled= false\n    chipTen.disabled=false\n    chipTwenty.disabled=false\n    chipFifty.disabled=false\n    chipHundred.disabled=false\n    hitButton.disabled=true\n    standButton.disabled=true\n    user_player.setPot(0)\n    user_player.resetHand()\n    dealer.resetHand()\n    playerHand.textContent = user_player.getTotalValueOfHand();\n    dealerHand.textContent = dealer.getTotalValueOfHand();\n\n}\n\nfunction Game(){\n    betButton.disabled= true\n    chipTen.disabled=true\n    chipTwenty.disabled=true\n    chipFifty.disabled=true\n    chipHundred.disabled=true\n    deal_initial_cards()\n    hitButton.disabled=false\n    standButton.disabled=false\n\n}\n\n\n\nfunction MakeBet(num){\n    user_player.bet(num)\n    bankAmount.textContent = user_player.getBalance()\n    pot.textContent= user_player.getPot()\n}\n\n\nstandButton.addEventListener('click',()=>{\n    user_player.stand();\n    dealerTurn()\n    result()\n})\n\nbetButton.addEventListener('click',Game)\n\nhitButton.addEventListener('click',()=>{\n    dealer.dealCard(deck,user_player)\n    playerHand.textContent = user_player.getTotalValueOfHand();\n    if(user_player.getTotalValueOfHand()>21){\n        alert(\"BUST\")\n        GameReset()\n    }\n    \n\n})\nchipTen.addEventListener('click',()=>{\n    MakeBet(10)\n})\n\nchipTwenty.addEventListener('click',()=>{\n    MakeBet(20)\n})\n\nchipFifty.addEventListener('click',()=>{    \n    MakeBet(50)\n})\n\nchipHundred.addEventListener('click',()=>{\n    MakeBet(100)\n})\n\n\n//# sourceURL=webpack://chai/./classes/GameManager.js?");

/***/ }),

/***/ "./classes/Player.js":
/*!***************************!*\
  !*** ./classes/Player.js ***!
  \***************************/
/***/ ((module) => {

eval("class Player{\n\n    /*\n    default values at the start of the game\n    */\n\n    hand = [];\n    turnOver = false;\n\n    hit(card) {\n        //Hand gets an extra card\n        this.hand.push(card);\n    }\n\n    stand(){\n        this.turnOver = true;\n        alert(\"hahahaha\")\n    }\n\n    resetHand(){\n        this.hand = []\n    }\n\n    getTotalValueOfHand(){\n        this.totalValueOfHand = 0;\n        this.hand.forEach(card =>{\n            this.totalValueOfHand += card.get_value();\n        })\n        return this.totalValueOfHand;\n    }\n\n    isTurnOver(){\n        return this.turnOver;\n    }\n\n}\n\nclass UserPlayer extends Player{\n\n    constructor(name){\n        super()\n        this.name = name;\n        this.balance = 1000;\n        this.pot = 0;\n    }\n\n    getPot(){\n        return this.pot\n    }\n\n    setPot(num){\n        this.pot = num\n    }\n\n    bet(num){\n        if((this.balance - num) >=0 ){\n        this.balance = this.balance - num;\n        this.pot = this.pot +num;\n        }\n        else{\n            alert(\"sho\")\n        }\n    }\n\n    getBalance(){\n        return this.balance;\n    }\n\n    showHand(){\n        //The cards displayed to the user\n    }\n\n\n    getName(){\n        return this.name\n    }\n\n\n}\n\nclass Dealer extends Player{\n\n    constructor(){\n        super()\n        this.name = \"DEALER\";\n    }\n\n    showHand(){\n        //Show a single card to the player\n        this.hand.forEach(element => {\n            console.log(element)\n        });\n    }\n\n    getName(){\n        return this.name\n    }\n\n    dealCard(deck, player){\n        console.log(`There are ${deck.get_card_count()} Cards in the Deck`);\n        this.card = deck.take_card();\n        player.hit(this.card);\n        console.log(`${this.card.get_card_name()} of ${this.card.get_suit()} was removed from the Deck\\nThere are ${deck.get_card_count()} Cards in the Deck`);\n        alert(`${this.card.get_card_name()}${this.card.get_suit()}`)\n    }\n\n\n}\n\nmodule.exports = {\n    Player:Player,\n    UserPlayer:UserPlayer,\n    Dealer:Dealer\n}\n\n//# sourceURL=webpack://chai/./classes/Player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./classes/GameManager.js");
/******/ 	
/******/ })()
;