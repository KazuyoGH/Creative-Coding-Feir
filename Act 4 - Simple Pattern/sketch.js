function setup() { 
  createCanvas(400, 400);
  background(220);
  
  // Divides the total canvas width by 10.
  let amt = width/10

  // This For loop creates the columns of the pattern.
  for (let y = 0; y<amt; y++){
    // This For loop creates the rows of the pattern.
    for(let x = 0; x<amt; x++){
      // These fills creates a gradient from 0 to 255, and backwards.
      let fill1 = map(x, 0, 10, 0, 255);
      let fill2 = map(x, 0, 10, 255, 0)
      
      // Randomizes the following fill for it to be fill1 or fill2.
      fill(fill1, 0, fill1)
      // Multiplies the position by the current square the For loop is on.
      rect(40*x, 40*y, amt, amt)
      fill(0, 0, fill1)
      rect(40*x+7, 40*y+7, amt/1.5, amt/1.5)
      fill(0, fill2, fill2)
      rect(40*x+14, 40*y+14, amt/3, amt/3)
      fill(0, 0, fill2)
      rect(40*x+17.2, 40*y+17.2, amt/6, amt/6)
    }
  }
  
}
function draw() {
}