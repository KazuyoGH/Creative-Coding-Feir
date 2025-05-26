let vibrate;

function setup() {
  createCanvas(400, 400);
  // Makes it so that the design rotating is based of the middle.
  rectMode(CENTER)
  // When rotating shapes, it follows degrees.
  angleMode(DEGREES)
  // Slows the down the framerate to make the random changes less frequent.
  frameRate(20)
}

function draw() {
  background(255);
  translate(200, 200)
  
  vibrate = random(1, 10)
  
  // Head
  noStroke();
  fill(29, 176, 106)
  ellipse(0, -40, 120, 100)
  
  // Eyes
  // Push and pop are used so that rotate doesn't affect any other element.
  push();
  noStroke();
  rotate(-37)
  fill(0, 0, 0)
  ellipse(-5, -45, 30, 60)
  pop();
  
  push();
  noStroke();
  rotate(37)
  fill(0, 0, 0)
  ellipse(5, -45, 30, 60)
  pop();
  
  fill(255, 255, 255)
  circle(33, -25, 5)
  
  fill(255, 255, 255)
  circle(40, -37, 13)
  
  fill(255, 255, 255)
  circle(-33, -25, 5)
  
  fill(255, 255, 255)
  circle(-40, -37, 13)
  
  fill(0, 0, 0)
  ellipse(0, 0, 10, 0+vibrate)
  
  // Antennae
  push();
  rotate(-20)
  fill(29, 176, 106)
  rect(0, -90, 10, 60)
  pop();
  
  fill(29, 176, 106)
  circle(-42, -120, 30)
  
  fill(223, 221, 211)
  circle(-42, -120, 10+vibrate)
  
  push();
  rotate(20)
  fill(29, 176, 106)
  rect(0, -90, 10, 60)
  pop();
  
  fill(29, 176, 106)
  circle(42, -120, 30)
  
  fill(9, 20, 55)
  circle(42, -120, 10+vibrate)
  
  // Body
  fill(29, 176, 106)
  rect(0, 55, 80, 90)
  
  fill(29, 176, 106)
  ellipse(0, 100, 80, 20)
  
  // Limbs
  push();
  fill(29, 176, 106)
  rotate(10)
  rect(-9, 140, 30, 90)
  pop();
  
  fill(29, 176, 106)
  circle(-39.8, 175, 30)
  
  push();
  fill(29, 176, 106)
  rotate(-10)
  rect(9, 140, 30, 90)
  pop();
  
  fill(29, 176, 106)
  circle(39.8, 175, 30)
  
  push();
  rotate(-100)
  fill(29, 176, 106)
  rect(-18, -85, 30, 90)
  pop();
  
  push();
  rotate(100)
  fill(29, 176, 106)
  rect(18, -85, 30, 90)
  pop();
  
  fill(29, 176, 106)
  circle(-125, 40, 30)
  
  fill(29, 176, 106)
  circle(125, 40, 30)
}