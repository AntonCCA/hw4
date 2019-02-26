function setup() {
  createCanvas(400, 400);
	colorMode(HSB)
		
}

 function draw() {
  background(255);

  for (var x = -50; x < 500; x = x + 50){
		stroke(random(255),random(255),random(255));
    line(x, height/2, mouseX, mouseY);
	}
 }

