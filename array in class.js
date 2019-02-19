var x = 220
var i = 230;
// var y = 220;
// var y2 = 200;
var y = [220, 200];

function setup() {
  createCanvas(400, 400);
}

function draw(){
  background(0);
  noStroke();

  // draw pipe
  fill(220, 40, 0, 185);
  rect(x, 200, y[0], 20);

  // draw drip
  for (var i = 100; i < 600; i += 100); {
    ellipse(x, y[0], 10);
    ellipse(x, y[1], 30);

  }
