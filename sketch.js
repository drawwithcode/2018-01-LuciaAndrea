function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(10);
	stroke(170);

}

function draw() {
	background(90);

	//Neck
	strokeWeight(5);
	line(250, 285, 250, 345);

	//Wheel
	strokeWeight(6);
	fill(255,255,255);
	ellipse(250, 465, 70, 70);
	//Wheel

	strokeWeight(15);
	stroke(0,0,0);
	ellipse(250, 465, 60, 60);

	strokeWeight(10);
	stroke(255,0,0);
	ellipse(250, 465, 55, 55);

	strokeWeight(10);
	stroke(255,165,0);
	ellipse(250, 465, 50, 50);

	strokeWeight(10);
	stroke(255,255,0);
	ellipse(250, 465, 45, 45);

	strokeWeight(10);
	stroke(0,255,0);
	ellipse(250, 465, 40, 40);

	strokeWeight(10);
	stroke(0,0,255);
	ellipse(250, 465, 35, 35);

	strokeWeight(10);
	stroke(75,0,130);
	ellipse(250, 465, 30, 30);

	strokeWeight(10);
	stroke(140,0,255);
	ellipse(250, 465, 25, 25);

	strokeWeight(10);
	stroke(255,0,0);
	ellipse(250, 465,20, 20);

	strokeWeight(10);
	stroke(255,165,0);
	ellipse(250, 465, 15, 15);

	strokeWeight(10);
	stroke(255,255,0);
	ellipse(250, 465, 10, 10);

	strokeWeight(10);
	stroke(0,255,0);
	ellipse(250, 465, 5, 5);

	strokeWeight(10);
	stroke(0,0,255);
	ellipse(250, 465, 0, 0);

	//Body
	strokeWeight(1);
	stroke(0,0,0);
	fill(0,0,0);
	rect(200, 325, 100, 140);

	//body decoration
noStroke();
	strokeWeight(5);
fill(255,255,0);
	ellipse(217,343,20,20);
	ellipse(239,343,20,20);
	ellipse(261,343,20,20);
	ellipse(283,343,20,20);

	ellipse(217,366,20,20);
	ellipse(239,366,20,20);
	ellipse(261,366,20,20);
	ellipse(283,366,20,20);

	ellipse(217,388,20,20);
	ellipse(239,388,20,20);
	ellipse(261,388,20,20);
	ellipse(283,388,20,20);

	ellipse(217,410,20,20);
	ellipse(239,410,20,20);
	ellipse(261,410,20,20);
	ellipse(283,410,20,20);

	ellipse(217,432,20,20);
	ellipse(239,432,20,20);
	ellipse(261,432,20,20);
	ellipse(283,432,20,20);

	strokeWeight(5);
	stroke(0,255,255);
	line(217, 452, 283, 452);

//arms
noStroke();
fill(255,0,0);
rect(305, 325, 20,20);
ellipseMode(CORNER);
fill(255,165,0);
ellipse(326,325,20,20);
fill(255,255,0);
rect(347, 325, 20,20);
fill(0,255,0);
ellipse(347,347,20,20);
fill(0,0,255);
rect(347, 368, 20,20);
fill(75,0,130);
ellipse(368,368,20,20);
fill(143,0,255);
rect(389, 368, 20,20);
fill(255,0,0);
rect(175, 325, 20,20);

ellipseMode(CORNER);
fill(255,165,0);
ellipse(154,325,20,20);
fill(255,255,0);
rect(133, 325, 20,20);
fill(0,255,0);
ellipse(133,304,20,20);
fill(0,0,255);
rect(133, 283, 20,20);
fill(75,0,130);
ellipse(112, 283,20,20);
fill(143,0,255);

rect(91, 283, 20,20);




ellipseMode(CENTER);

//ears


stroke(0,0,0);
strokeWeight(5);
line(170, 220, 330, 220);
noStroke();
ellipse(170, 220, 20, 20);
ellipse(330, 220, 20, 20);

//feet

stroke(0,0,0);
strokeWeight(5);
line(170, 452, 330, 452);
noStroke();
ellipse(170, 452, 20, 20);
ellipse(330, 452, 20, 20);

//Hat
stroke(0,0,0);
strokeWeight(5);
line(250, 150, 250, 285);
noStroke();
fill(255,255,0);

ellipse(250, 150, 45, 45);

strokeWeight(5);
stroke(0,0,0);
fill(255,255,255);
ellipse(250, 150, 30, 30);

fill(0,0,0);
ellipse(250, 150, 5, 5);


	//Head
	strokeWeight(15);
	stroke(0,0,0);
	ellipse(250, 240, 90, 90);

	strokeWeight(10);
	stroke(255,165,0);
	ellipse(250, 240, 85, 85);

	strokeWeight(10);
	stroke(255,255,0);
	ellipse(250, 240, 80, 80);

	strokeWeight(10);
	stroke(0,255,0);
	ellipse(250, 240, 75, 75);

	strokeWeight(10);
	stroke(0,0,255);
	ellipse(250, 240, 70, 70);

	strokeWeight(10);
	stroke(75,0,130);
	ellipse(250, 240, 65, 65);

	strokeWeight(10);
	stroke(140,0,255);
	ellipse(250, 240, 60, 60);

	strokeWeight(10);
	stroke(255,0,0);
	ellipse(250, 240, 55, 55);

	strokeWeight(10);
	stroke(255,165,0);
	ellipse(250, 240, 50, 50);

	strokeWeight(10);
	stroke(255,255,0);
	ellipse(250, 240, 45, 45);

	strokeWeight(10);
	stroke(0,255,0);
	ellipse(250, 240, 40, 40);

	strokeWeight(10);
	stroke(0,0,255);
	ellipse(250, 240, 35, 35);

	strokeWeight(10);
	stroke(75,0,130);
	ellipse(250, 240, 30, 30);

	strokeWeight(10);
	stroke(140,0,255);
	ellipse(250, 240, 25, 25);

	strokeWeight(10);
	stroke(255,0,0);
	ellipse(250, 240,20, 20);

	strokeWeight(10);
	stroke(255,165,0);
	ellipse(250, 240, 15, 15);

	strokeWeight(10);
	stroke(255,255,0);
	ellipse(250, 240, 10, 10);

	strokeWeight(10);
	stroke(0,255,0);
	ellipse(250, 240, 5, 5);

	strokeWeight(10);
	stroke(0,0,255);
	ellipse(250, 240, 0, 0);

	//eyes

	strokeWeight(5);
	stroke(0,0,0);
	fill(255,255,255);
	ellipse(230, 225, 30, 30);

	strokeWeight(5);
	stroke(0,0,0);
	fill(255,255,255);
	ellipse(270, 225, 30, 30);

	fill(0,0,0);
	ellipse(228, 220, 5, 5);
	ellipse(272, 230, 5, 5);




}
