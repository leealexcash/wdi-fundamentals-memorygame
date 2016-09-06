/* console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

 if (cardOne === cardTwo) {
	alert("You found a match!");
} else {
	alert("Sorry, try again");
}; */

var createBoard = function() {
  
  	var gameBoard = document.getElementById('game-board');

 for (i=0; i<4; i++) {
 	var newCard = document.createElement('div');
 	newCard.className = 'card';
 	gameBoard.appendChild(newCard);
   
 }

 }
 
 createBoard();