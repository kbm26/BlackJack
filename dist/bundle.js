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

eval("class Card{\r\n\r\n    numeric_value;\r\n    suit;\r\n    card_name;\r\n\r\n    constructor(numeric_value, suit, card_name){\r\n        this.numeric_value = numeric_value;\r\n        this.suit = suit;\r\n        this.card_name = card_name;\r\n    }\r\n\r\n    get_value = () =>{\r\n        return this.numeric_value;\r\n    }\r\n\r\n    get_suit = () => {\r\n        return this.suit;\r\n    }\r\n\r\n    get_card_name = () => {\r\n        return this.card_name;\r\n    }\r\n}\r\n\r\n// export default Card;\r\nmodule.exports = {Card:Card}\n\n//# sourceURL=webpack://chai/./classes/Card.js?");

/***/ }),

/***/ "./classes/Deck.js":
/*!*************************!*\
  !*** ./classes/Deck.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Card = (__webpack_require__(/*! ./Card */ \"./classes/Card.js\").Card)\r\n\r\nclass Deck{\r\n\r\n    current_cards_in_decks = [];\r\n\r\n    constructor(){\r\n        this.create_deck();\r\n    }\r\n\r\n    get_current_cards_in_deck = () =>{\r\n        return this.current_cards_in_decks;\r\n    }\r\n\r\n    get_card_count = () =>{\r\n        return this.current_cards_in_decks.length;\r\n    }\r\n\r\n    take_card = () =>{\r\n        if(this.get_card_count() == 0){\r\n            return null;\r\n        }\r\n        let random_index = Math.trunc(Math.random() * this.get_card_count());\r\n        this.current_cards_in_decks = this.current_cards_in_decks.filter(card => this.current_cards_in_decks[random_index] != card);\r\n        return this.current_cards_in_decks[random_index] \r\n    }\r\n\r\n    create_deck(){\r\n        this.current_cards_in_decks = []\r\n        this.card_suits = [\"h\", \"s\", \"d\", \"c\"];\r\n        this.card_values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];\r\n        this.card_names = [\"ace\", \"two\", \"three\", \"four\", \"five\", \"six\", \"seven\", \"eight\", \"nine\", \"ten\", \"jack\", \"queen\", \"king\"];\r\n\r\n        for(let value_index = 0; value_index < this.card_values.length; value_index++){\r\n            this.card_value = this.card_values[value_index];\r\n            this.card_name = this.card_names[value_index];\r\n\r\n            for(let suit_index = 0; suit_index < this.card_suits.length; suit_index++){\r\n                this.card_suit = this.card_suits[suit_index];\r\n                this.current_cards_in_decks.push(new Card(this.card_value, this.card_suit, this.card_name))\r\n            }\r\n\r\n        }\r\n        console.log(\"done creating deck\")\r\n\r\n    }\r\n\r\n\r\n}\r\n\r\nmodule.exports = {Deck:Deck}\n\n//# sourceURL=webpack://chai/./classes/Deck.js?");

/***/ }),

/***/ "./classes/GameManager.js":
/*!********************************!*\
  !*** ./classes/GameManager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Card = (__webpack_require__(/*! ../classes/Card */ \"./classes/Card.js\").Card);\r\nconst Deck = (__webpack_require__(/*! ../classes/Deck */ \"./classes/Deck.js\").Deck);\r\nconst Dealer = (__webpack_require__(/*! ../classes/Player */ \"./classes/Player.js\").Dealer);\r\nconst UserPlayer = (__webpack_require__(/*! ../classes/Player */ \"./classes/Player.js\").UserPlayer);\r\n\r\n\r\nconst hitButton = document.getElementById('hitButton')\r\nconst betButton = document.getElementById('betButton')\r\nconst standButton = document.getElementById('standButton')\r\nconst bankAmount = document.getElementById('bankAmount')\r\nconst pot = document.getElementById('pot')\r\nconst chipTen = document.getElementById('10')\r\nconst chipTwenty = document.getElementById('20')\r\nconst chipFifty = document.getElementById('50')\r\nconst chipHundred = document.getElementById('100')\r\nconst playerHand = document.getElementById('playerHand')\r\nconst dealerHand = document.getElementById('dealerHand')\r\n\r\n\r\n\r\n\r\nconst dealer = new Dealer();\r\nconst user_player = new UserPlayer(\"UNNAMED\")\r\nconst deck = new Deck();\r\n\r\nbankAmount.textContent = user_player.getBalance()\r\npot.textContent = user_player.getTotalValueOfHand()\r\n\r\n\r\nfunction kyle(){\r\n    alert(\"i work\")\r\n}\r\n\r\nfunction deal_initial_cards(){\r\n    dealer.dealCard(deck, user_player);\r\n    dealer.dealCard(deck, dealer);\r\n    dealerHand.textContent = dealer.getTotalValueOfHand()\r\n    dealer.dealCard(deck, user_player);\r\n    dealer.dealCard(deck, dealer);\r\n    playerHand.textContent = user_player.getTotalValueOfHand();\r\n\r\n}\r\n\r\nfunction dealerTurn(){\r\n    alert(\"im going to break\")\r\n\r\n    while(dealer.getTotalValueOfHand()<17){\r\n        dealer.dealCard(deck,dealer)\r\n        console.log(dealer.getTotalValueOfHand())\r\n    }\r\n    dealerHand.textContent = dealer.getTotalValueOfHand()\r\n\r\n}\r\n\r\nfunction result(){\r\n    if(user_player.getTotalValueOfHand()>dealer.getTotalValueOfHand()){\r\n        alert(\"YOU WON\")\r\n    }\r\n    else if(user_player.getTotalValueOfHand()==dealer.getTotalValueOfHand()){\r\n        alert(\"PUSH\")\r\n    }\r\n    else{\r\n        alert(\"YOU LOST\")\r\n    }\r\n    GameReset()\r\n}\r\n\r\nfunction GameReset(){\r\n    betButton.disabled= false\r\n    chipTen.disabled=false\r\n    chipTwenty.disabled=false\r\n    chipFifty.disabled=false\r\n    chipHundred.disabled=false\r\n    hitButton.disabled=true\r\n    standButton.disabled=true\r\n    user_player.setPot(0)\r\n    user_player.resetHand()\r\n    dealer.resetHand()\r\n    playerHand.textContent = user_player.getTotalValueOfHand();\r\n    dealerHand.textContent = dealer.getTotalValueOfHand();\r\n\r\n}\r\n\r\nfunction Game(){\r\n    betButton.disabled= true\r\n    chipTen.disabled=true\r\n    chipTwenty.disabled=true\r\n    chipFifty.disabled=true\r\n    chipHundred.disabled=true\r\n    deal_initial_cards()\r\n    hitButton.disabled=false\r\n    standButton.disabled=false\r\n\r\n}\r\n\r\n\r\n\r\nfunction MakeBet(num){\r\n    user_player.bet(num)\r\n    bankAmount.textContent = user_player.getBalance()\r\n    pot.textContent= user_player.getPot()\r\n}\r\n\r\n\r\nstandButton.addEventListener('click',()=>{\r\n    user_player.stand();\r\n    dealerTurn()\r\n    result()\r\n})\r\n\r\nbetButton.addEventListener('click',Game)\r\n\r\nhitButton.addEventListener('click',()=>{\r\n    dealer.dealCard(deck,user_player)\r\n    playerHand.textContent = user_player.getTotalValueOfHand();\r\n    if(user_player.getTotalValueOfHand()>21){\r\n        alert(\"BUST\")\r\n        GameReset()\r\n    }\r\n    \r\n\r\n})\r\nchipTen.addEventListener('click',()=>{\r\n    MakeBet(10)\r\n})\r\n\r\nchipTwenty.addEventListener('click',()=>{\r\n    MakeBet(20)\r\n})\r\n\r\nchipFifty.addEventListener('click',()=>{    \r\n    MakeBet(50)\r\n})\r\n\r\nchipHundred.addEventListener('click',()=>{\r\n    MakeBet(100)\r\n})\r\n\n\n//# sourceURL=webpack://chai/./classes/GameManager.js?");

/***/ }),

/***/ "./classes/Player.js":
/*!***************************!*\
  !*** ./classes/Player.js ***!
  \***************************/
/***/ ((module) => {

eval("class Player{\r\n\r\n    /*\r\n    default values at the start of the game\r\n    */\r\n\r\n    hand = [];\r\n    turnOver = false;\r\n\r\n    hit(card) {\r\n        //Hand gets an extra card\r\n        this.hand.push(card);\r\n    }\r\n\r\n    stand(){\r\n        this.turnOver = true;\r\n        alert(\"hahahaha\")\r\n    }\r\n\r\n    resetHand(){\r\n        this.hand = []\r\n    }\r\n\r\n    getTotalValueOfHand(){\r\n        this.totalValueOfHand = 0;\r\n        this.hand.forEach(card =>{\r\n            this.totalValueOfHand += card.get_value();\r\n        })\r\n        return this.totalValueOfHand;\r\n    }\r\n\r\n    isTurnOver(){\r\n        return this.turnOver;\r\n    }\r\n\r\n}\r\n\r\nclass UserPlayer extends Player{\r\n\r\n    constructor(name){\r\n        super()\r\n        this.name = name;\r\n        this.balance = 1000;\r\n        this.pot = 0;\r\n    }\r\n\r\n    getPot(){\r\n        return this.pot\r\n    }\r\n\r\n    setPot(num){\r\n        this.pot = num\r\n    }\r\n\r\n    bet(num){\r\n        if((this.balance - num) >=0 ){\r\n        this.balance = this.balance - num;\r\n        this.pot = this.pot +num;\r\n        }\r\n        else{\r\n            alert(\"sho\")\r\n        }\r\n    }\r\n\r\n    getBalance(){\r\n        return this.balance;\r\n    }\r\n\r\n    showHand(){\r\n        //The cards displayed to the user\r\n    }\r\n\r\n\r\n    getName(){\r\n        return this.name\r\n    }\r\n\r\n\r\n}\r\n\r\nclass Dealer extends Player{\r\n\r\n    constructor(){\r\n        super()\r\n        this.name = \"DEALER\";\r\n    }\r\n\r\n    showHand(){\r\n        //Show a single card to the player\r\n        this.hand.forEach(element => {\r\n            console.log(element)\r\n        });\r\n    }\r\n\r\n    getName(){\r\n        return this.name\r\n    }\r\n\r\n    dealCard(deck, player){\r\n        console.log(`There are ${deck.get_card_count()} Cards in the Deck`);\r\n        this.card = deck.take_card();\r\n        player.hit(this.card);\r\n        console.log(`${this.card.get_card_name()} of ${this.card.get_suit()} was removed from the Deck\\nThere are ${deck.get_card_count()} Cards in the Deck`);\r\n        alert(`${this.card.get_card_name()}${this.card.get_suit()}`)\r\n    }\r\n\r\n\r\n}\r\n\r\nmodule.exports = {\r\n    Player:Player,\r\n    UserPlayer:UserPlayer,\r\n    Dealer:Dealer\r\n}\n\n//# sourceURL=webpack://chai/./classes/Player.js?");

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