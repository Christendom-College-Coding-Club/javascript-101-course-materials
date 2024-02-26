let width = 800;
let height = 900;

/*** this code is called once, at the start of the program ***/
function setup() {
	createCanvas(width, height);
	background(255,255,255);
}

// the angle that the cryptid is rotated at
let cryptid_a = 0;
// the x position of the cryptid
let cryptid_v_x = 8;
let cryptid_v_y = 6;
let cryptid_x = 0;
let cryptid_y = 200;

let visible = true;

let crusader_x = 400;
let crusader_y = 200;

const keys = new Set();

/*** this code is called 60 times per second ***/
function draw() {

	fill(0)
	stroke(0)
	handleKeyPress()

	let distance = ((crusader_x - cryptid_x)**2 + (crusader_y - cryptid_y)**2)**0.5

	if (distance < 100) {
		// visible = !visible;
		visible = false
	}

	background(255,255,255);

	if (visible) {
		drawCryptid1(cryptid_x,cryptid_y,0.5,cryptid_a)
	}

	noFill()
	stroke(0)
	ellipse(cryptid_x,cryptid_y,100,100)

	cryptid_x += cryptid_v_x;
	cryptid_y += cryptid_v_y;
	cryptid_a += PI/180;

	if (cryptid_x > width || cryptid_x < 0) {
		cryptid_v_x *= -1;
		visible = true;
	} if (cryptid_y > height || cryptid_y < 0) {
		cryptid_v_y *= -1;;
		visible = true;
	}


	drawCrusader(crusader_x,crusader_y,0.5,0)
}

function mouseClicked() {
	let distance = ((mouseX - cryptid_x)**2 + (mouseY - cryptid_y)**2)**0.5

	if (distance < 50) {
		visible = !visible;
	}
}

function handleKeyPress() {
	if (keyIsPressed) {
		if (keys.has('ArrowUp')) {
			crusader_y -= 10;
		} if (keys.has('ArrowDown')) {
			crusader_y += 10;
		} if (keys.has('ArrowLeft')) {
			crusader_x -= 10;
		} if (keys.has('ArrowRight')) {
			crusader_x += 10;
		}
	}
}

function keyPressed() {
	keys.add(key)
}

function keyReleased() {
	keys.delete(key)
}
