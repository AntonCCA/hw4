function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = -100; x < 500; x = x + 10) {
    line(x, height/2, mouseX, mouseY);
  }
}
