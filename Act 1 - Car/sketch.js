function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(67, 70, 74);
  
  // Street Lines
  stroke(254, 199, 111)
  fill(254, 199, 111)
  rect(300, 225, 100, 30)
  
  stroke(254, 199, 111)
  fill(254, 199, 111)
  rect(150, 225, 100, 30)
  
  stroke(254, 199, 111)
  fill(254, 199, 111)
  rect(0, 225, 100, 30)
  
  // Bodice
  stroke(254, 241, 236)
  fill(254, 241, 236)
  rect(100, 140, 205, 49)
  
  stroke(67, 70, 74)
  fill(67, 70, 74)
  circle(140, 187, 50)
  
  stroke(67, 70, 74)
  fill(67, 70, 74)
  circle(275, 187, 50)
  
  stroke(67, 70, 74)
  fill(67, 70, 74)
  rect(90, 130, 25, 25)
  
  stroke(254, 241, 236)
  fill(254, 241, 236)
  circle(112.5, 152.5, 25.5)
  
  stroke(254, 241, 236)
  fill(254, 241, 236)
  rect(170, 95, 135, 55)
  
  fill(254, 241, 236)
  triangle(145, 145, 175, 145, 170, 96)
  
  
  // Wheels
  stroke(0, 0, 0)
  fill(0, 0, 0)
  circle(275, 187, 43)
  
  strokeWeight(3)
  stroke(235, 235, 235)
  fill(30, 30, 30)
  circle(275, 187, 27)
  
  stroke(235, 235, 235)
  line(263, 188, 287, 188)
  
  stroke(235, 235, 235)
  line(267, 178, 284, 197)
  
  stroke(235, 235, 235)
  line(267, 197, 284, 178)
  

  stroke(0, 0, 0)
  fill(0, 0, 0)
  circle(140, 187, 43)

  stroke(255, 255, 255)
  fill(30, 30, 30)
  circle(140, 187, 27)
  
  
  stroke(235, 235, 235)
  line(153, 188, 126, 188)
  
  stroke(235, 235, 235)
  line(132, 197, 149, 177)
  
  stroke(235, 235, 235)
  line(132, 177, 149, 197)
  
  
  // Windows
  strokeWeight(1)
  stroke(113, 109, 110)
  fill(113, 109, 110)
  rect(180, 105, 45, 30)
  
  fill(113, 109, 110)
  triangle(165, 135, 179, 135, 179, 106)
  
  stroke(113, 109, 110)
  fill(113, 109, 110)
  rect(235, 105, 57, 30)
  
  // Back + Stripe
  stroke(254, 241, 236)
  fill(254, 241, 236)
  ellipse(305, 142, 20, 92)
  
  stroke(0, 0, 0)
  fill(0, 0, 0)
  ellipse(315, 140, 20, 50)
  
  stroke(113, 163, 193)
  fill(113, 163, 193)
  rect(99.75, 148.5, 205.5, 5)
  
  stroke(60, 60, 60)
  fill(60, 60, 60)
  rect(210, 145, 15, 10)
  
  stroke(113, 163, 193)
  fill(113, 163, 193)
  rect(99.75, 157, 205.5, 5)
  
}