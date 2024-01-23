function setup() {
	createCanvas(600, 400);
	background(0);
	fill(255);
	textSize(32);
}

let bob_x = 0;

function draw() {
	background(0);
	bob_x++;
	ellipse(bob_x,100,100,100);
	text("bob", bob_x - 50, 200);
}
