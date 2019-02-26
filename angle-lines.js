function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}
var offset = 0
function draw() {
  background(200);

  for (var x = 100; x < width; x = x + 10) {
    line(x + mouseX, 200, x + 100+mouseX,100)  }
offset += 1;
}
