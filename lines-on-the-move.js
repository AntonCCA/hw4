function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);
   
  if(mouseIsPressed)
   for (var x = 10; x < width + 10; x = x + 10);
    line(x, height/2, x+100, height/2-75);{
    }
    else{
    for (var x = 10; x < width + 10; x = x - 10) {
    line(x, height/2, x+100, height/2-75);
    }
      print(mouseIsPressed)
  }
}
   
   
   
   
