function drawBasicCryptid(x,y,s,a) {
	push();
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


/*** this is where the code that draws your cryptid goes ***/
function drawGooby(x,y,s,a) {

	// move the cryptid to where he's supposed to be
	push();
	translate(x,y)
	scale(s)
	rotate(a)

	noStroke();

	// neck neck
	stroke(0,255,0)
	strokeWeight(5)
	line(0,70,0,50)

	// mouth neck
	line(-30,40,0,30)

	// eye neck
	noFill();
	arc(0,0,100,100,0,PI)

	fill(0,255,0)
	// outer eyes
	ellipse(50,-20,50,50)
	ellipse(-50,-10,35,35)

	fill(0)
	//inner eyes
	ellipse(50,-20, 20, 20)
	ellipse(-50, -10, 15, 15)

	// eyebrows
	stroke(0)
	line(30,-40,70,-30)
	line(-30,-20,-70,-20)

	// mouth
	stroke(0,255, 0)
	strokeWeight(13)
	line(-30, 20, 25, 30)
	strokeWeight(4)
	stroke(0)
	line(-30, 20, 25, 30)

	// body
	noStroke()
	fill(0,255,0)
	ellipse(0,70,70,30)

	function drawLeg(x,y,start,end) {
		noFill();
		stroke(0,255,0)
		arc(x,y,50,50,start,end)
	}

	drawLeg(30,100,-PI/2,0)
	drawLeg(-30,100,PI,-PI/2)
	drawLeg(10,100,-PI/2,0)
	drawLeg(-10,100,PI,-PI/2)

	function drawShoe(x,y) {
		noStroke()
		fill(255,0,0)
		ellipse(x,y,15,10)
		noFill()
		stroke(255)
		strokeWeight(2)
		arc(x,y,10,5,PI,0)
		arc(x,y + 2,7,3,-PI*0.9,-PI*0.1)
	}

	drawShoe(35,105)
	drawShoe(-35,105)
	drawShoe(55,105)
	drawShoe(-55,105)

	fill(0)
	textAlign(CENTER)
	text("gooby the pompous forg", 0, 120)

	// un-move the cryptid
	pop()
}

/*** this code is called once, at the start of the program ***/
function setup() {
	createCanvas(700, 700);
	background(255,255,255);
}

// the angle that the cryptid is rotated at
let gooby_a = 0;
// the x position of the cryptid
let gooby_x = 0;
let gooby_y = 200;

let visible = true;

let crusader_x = 400;
let crusader_y = 200;

/*** this code is called 60 times per second ***/
function draw() {
	handleKeyPress()

	let distance = ((crusader_x - gooby_x)**2 + (crusader_y - gooby_y)**2)**0.5

	if (distance < 100) {
		// visible = !visible;
		visible = false
	}

	background(255,255,255);

	if (visible) {
		drawGooby(gooby_x,gooby_y,1,gooby_a)
	}

	noFill()
	stroke(0)
	ellipse(gooby_x,gooby_y,200,200)

	gooby_x += 6;
	gooby_a += PI/180;

	if (gooby_x > 1000) {
		gooby_x = -50;
		visible = true;
	}

	drawCrusader(crusader_x,crusader_y,1,0)
}

function mouseClicked() {
	let distance = ((mouseX - gooby_x)**2 + (mouseY - gooby_y)**2)**0.5

	if (distance < 100) {
		visible = !visible;
	}
}

function handleKeyPress() {
	if (keyIsPressed) {
		if (keyCode === UP_ARROW) {
			crusader_y -= 10;
		} else if (keyCode === DOWN_ARROW) {
			crusader_y += 10;
		} else if (keyCode === LEFT_ARROW) {
			crusader_x -= 10;
		} else if (keyCode === RIGHT_ARROW) {
			crusader_x += 10;
		}
	}
}
