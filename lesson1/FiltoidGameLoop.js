/* Filtoid's Helpful Javascript Functions - FiltoidGameLoop.js

This is a sample game loop to provide a reasonable update control mechanism for
animations and game logic. Please feel free to do whatever the hell you like with this code. It is free as beer
and free as in speech. If you use this code you do so at your own risk and I accept no responsibility
whatsoever for it.

*/
//Globals
var FPS = 30; // target frames per second
var SECONDSBETWEENFRAMES = 1 / FPS;

var ctx = null; // Useful to have a global reference for measuring fonts for instance
var canvas = null; // The main drawing area
var currentTime = 0; // For debugging - you can store the current time and see how it's changed

var mySquare = null;

function loadGame(){
	canvas = document.getElementById('canvas');
	//$('#canvas').mousedown(OnCanvasClick);
	//$('#canvas').mousemove(OnMouseMove);
	ctx = canvas.getContext('2d');

	// Do setup code here - make resources/assign things etc
	mySquare = new Square();

	// The following line sets up the game loop
	setInterval(update, SECONDSBETWEENFRAMES * 500);
}

function update(){
	// Store the time - for debugging purposes mostly
	currentTime += SECONDSBETWEENFRAMES;

	// Clear the drawing area
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();

	//Do your game updates here
	mySquare.update();
	mySquare.draw(ctx);

	//Do you drawing here - make your resources draw themselves

	ctx.restore();
}
