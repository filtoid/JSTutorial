function Square(){
	this.loc = new Location(200,200);
	this.update = sqUpdate;
	this.draw = sqDraw;
	this.rot = 0;
	
	this.SIZE = 40;
	
}

function sqUpdate(){
	this.rot += 0.05;
	if(this.rot>2*Math.PI)
		this.rot-=2*Math.PI;
	if(this.rot<0)
		this.rot+=2*Math.PI;
}

function sqDraw(ctx){
	
	// Figure out the points of rotation multiplied by size
	var pt1 = new Location(this.SIZE*Math.sin(this.rot+(Math.PI/4)),this.SIZE*Math.cos(this.rot+(Math.PI/4)));
	var pt2 = new Location(this.SIZE*Math.sin(this.rot+(Math.PI*3/4)),this.SIZE*Math.cos(this.rot+(Math.PI*3/4)));
	var pt3 = new Location(this.SIZE*Math.sin(this.rot+(Math.PI*5/4)),this.SIZE*Math.cos(this.rot+(Math.PI*5/4)));
	var pt4 = new Location(this.SIZE*Math.sin(this.rot+(Math.PI*7/4)),this.SIZE*Math.cos(this.rot+(Math.PI*7/4)));
	
	// Apply the translation to our actual location
	pt1.x += this.loc.x;
	pt1.y += this.loc.y;
	pt2.x += this.loc.x;
	pt2.y += this.loc.y;
	pt3.x += this.loc.x;
	pt3.y += this.loc.y;
	pt4.x += this.loc.x;
	pt4.y += this.loc.y;
	
	// Draw a trianle rotated around a point
	ctx.strokeStyle = "#000000"; // Set line color to black
	ctx.beginPath(); //Start the drawing
	
	ctx.moveTo(pt1.x,pt1.y);
	ctx.lineTo(pt2.x,pt2.y);
	ctx.lineTo(pt3.x,pt3.y);
	ctx.lineTo(pt4.x,pt4.y);
	ctx.lineTo(pt1.x,pt1.y);
	
	ctx.stroke(); // End the drawing
}