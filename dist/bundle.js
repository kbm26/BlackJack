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

/***/ "./Classes/GameManager.js":
/*!********************************!*\
  !*** ./Classes/GameManager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Card = (__webpack_require__(/*! ../classes/Card */ \"./classes/Card.js\").Card);\r\nconst Deck = (__webpack_require__(/*! ../classes/Deck */ \"./classes/Deck.js\").Deck);\r\nconst Dealer = (__webpack_require__(/*! ../classes/Player */ \"./classes/Player.js\").Dealer);\r\nconst UserPlayer = (__webpack_require__(/*! ../classes/Player */ \"./classes/Player.js\").UserPlayer);\r\n\r\n\r\nconst hitButton = document.getElementById('hitButton')\r\n\r\nconst dealer = new Dealer();\r\nconst user_player = new UserPlayer(\"UNNAMED\")\r\nconst deck = new Deck();\r\n\r\nfunction kyle(){\r\n    alert(\"i work\")\r\n}\r\nfunction deal_initial_cards(){\r\n    dealer.dealCard(deck, user_player);\r\n    dealer.dealCard(deck, dealer);\r\n    dealer.dealCard(deck, user_player);\r\n    dealer.dealCard(deck, dealer);\r\n}\r\n    \r\n\r\nfunction start_game(){\r\n        this.deal_initial_cards()\r\n        while(!this.user_player.isTurnOver() && this.user_player.getTotalValueOfHand() < 22){\r\n            this.dealer.dealCard(this.deck, this.user_player);\r\n        }\r\n        this.dealer.showHand();\r\n        console.log(\"______________________________________________\")\r\n        console.log(this.user_player.hand)\r\n}\r\n\r\n\r\nalert(\"update done\")\r\nhitButton.addEventListener('click',kyle)//dealer.dealCard(deck,user_player))\r\n\n\n//# sourceURL=webpack://chai/./Classes/GameManager.js?");

/***/ }),

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

/***/ "./classes/Player.js":
/*!***************************!*\
  !*** ./classes/Player.js ***!
  \***************************/
/***/ ((module) => {

eval("class Player{\r\n\r\n    /*\r\n    default values at the start of the game\r\n    */\r\n\r\n    hand = [];\r\n    turnOver = false;\r\n\r\n    hit(card) {\r\n        //Hand gets an extra card\r\n        this.hand.push(card);\r\n    }\r\n\r\n    stand(){\r\n        this.turnOver = true;\r\n    }\r\n\r\n    isTurnOver(){\r\n        return this.turnOver;\r\n    }\r\n\r\n}\r\n\r\nclass UserPlayer extends Player{\r\n\r\n    constructor(name){\r\n        super()\r\n        this.name = name;\r\n        this.balance = 1000;\r\n    }\r\n\r\n    bet(num){\r\n        this.balance = this.balance - num;\r\n    }\r\n\r\n    getBalance(){\r\n        return this.balance;\r\n    }\r\n\r\n    showHand(){\r\n        //The cards displayed to the user\r\n    }\r\n\r\n    getTotalValueOfHand(){\r\n        this.totalValueOfHand = 0;\r\n        this.hand.forEach(card =>{\r\n            this.totalValueOfHand += card.get_value();\r\n        })\r\n        return this.totalValueOfHand;\r\n    }\r\n\r\n    getName(){\r\n        return this.name\r\n    }\r\n\r\n\r\n}\r\n\r\nclass Dealer extends Player{\r\n\r\n    constructor(){\r\n        super()\r\n        this.name = \"DEALER\";\r\n    }\r\n\r\n    showHand(){\r\n        //Show a single card to the player\r\n        this.hand.forEach(element => {\r\n            console.log(element)\r\n        });\r\n    }\r\n\r\n    getName(){\r\n        return this.name\r\n    }\r\n\r\n    dealCard(deck, player){\r\n        console.log(`There are ${deck.get_card_count()} Cards in the Deck`);\r\n        this.card = deck.take_card();\r\n        player.hit(this.card);\r\n        console.log(`${this.card.get_card_name()} of ${this.card.get_suit()} was removed from the Deck\\nThere are ${deck.get_card_count()} Cards in the Deck`);\r\n        alert(`${this.card.get_card_name()}${this.card.get_suit()}`)\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = {\r\n    Player:Player,\r\n    UserPlayer:UserPlayer,\r\n    Dealer:Dealer\r\n}\n\n//# sourceURL=webpack://chai/./classes/Player.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Classes/GameManager.js");
/******/ 	
/******/ })()
;