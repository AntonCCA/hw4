 var i = 100;
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height,i);
}

function draw() {
  var x = random(width);
  var y = random(height);
  var i = 100;
  
  for (let i = 10;i < width + 10;i = i + 100){

	}
  stroke(x,y,i);
  point(x,y,i);
}
