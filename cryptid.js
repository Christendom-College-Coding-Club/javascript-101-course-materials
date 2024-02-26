function drawCryptid1(x,y,s,a) {
	// change this to whatever cryptid you want to draw
	drawBasicCryptid(x,y,s,a);
}

function drawBasicCryptid(x,y,s,a) {
	push();
	rectMode(CENTER);
	translate(x,y)
	scale(s)
	rotate(a)

	// draw your cryptid here
	rect(0,0,200,100)

	pop()
}

function drawCrusader(x,y,s,a) {
	push();
	translate(x,y)
	scale(s)
	rotate(a)
	
	// horse
	fill(0)
	stroke(0)
	ellipse(0,20,50,25)

	// horse neck
	strokeWeight(8)
	line(20,10,30,0)
	strokeWeight(1)

	// horse head
	triangle(25,0,50,0,25,-12)

	// horse legs
	strokeWeight(5)
	line(15,15,40,40)
	line(15,15,30,40)
	line(-10,15,-40,40)
	line(-10,15,-30,40)
	// tail
	line(-20,20,-30,0)
	strokeWeight(1)


	// armor
	stroke(0,0,0)
	fill(200,200,200)
	ellipse(0,0,10,30)
	triangle(-2,-10,7,-10,-2,-20)

	push()
	translate(6,20)
	rotate(-PI/6)
	ellipse(0,0,10,20)
	pop()

	// crest
	stroke(255,0,0)
	strokeWeight(5)
	noFill()
	arc(-2,-15,20,20,PI,-PI/6)

	// lance
	noStroke()
	fill(0,0,255)
	rect(-20,2.5,20,5)
	triangle(0,10,80,5,0,0)

	pop()
}
