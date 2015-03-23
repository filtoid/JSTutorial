/* Filtoid's Helpful Javascript Functions - FiltoidMaths.js

This is hopefully some helpful javascript functions for top down movement and other game maths that
may be useful. Please feel free to do whatever the hell you like with this code. It is free as beer
and free as in speech. If you use this code you do so at your own risk and I accept no responsibility
whatsoever for it. 
*/

// A useful declaration for holding locational point information
function Location(_x,_y){
	this.x = _x;
	this.y = _y;
}

function MoveForward(rot,amount){
	// Returns the translation for the speed and rotation - rotation (rot) is in radians so ranges from 0-2xMath.PI
	var _x = amount * Maths.sin(rot);
	var _y = amount * Maths.cos(rot);
	return new Location(_x,_y);
}
