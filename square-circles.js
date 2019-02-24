 x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 5; i < x.length + 5; i = i + 10) {
    ellipse(x[i], y[i], 1 + (x.length - i));
    rect(x[0],y[0],1,+ (x.lenght -10);{
  }

  x = x.slice(-150); // keep the last 50 x values
  y = y.slice(-150); // keep the last 50 y values
}
}
