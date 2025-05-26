// Defines all the variables.
let font1, font2;
let xpos1, xpos2, xpos3;
let vel1, vel2, vel3;
let word;


function preload() {
  // Loads all the fonts before setup() and draw()
  font1 = loadFont('fonts/GenshinFont.ttf')
  font2 = loadFont('fonts/ZZZFont.ttf')
}

function setup() {
  createCanvas(400, 400);
  // Creates an empty String variable.
  word = "";
  
  // Holds the speed of the text.
  vel1 = 0.5;
  vel2 = 0.5;
  vel3 = 0.5;
  
  // Holds the initial position of the text.
  xpos1 = 115;
  xpos2 = 110;
  xpos3 = 105;
}

function draw() {
  background(255);
  
  // Using textFont, the text is styled with the imported font.
  textFont(font1);
  textAlign(CENTER);
  textSize(20);
  fill(0);
  text('Please Type Your Text', 200, 200);
  textFont(font2);
  
  // Adds the speed to the position of the text.
  xpos1 += vel1;
  xpos2 += vel2;
  xpos3 += vel3;
  
  // Creates a barrier that if the text goes too left or right, it bounces back.
  if (xpos1 == 300) {
    vel1 *= -1;
  } else if (xpos1 == 100) {
    vel1 *= -1;
  }
  
  if (xpos2 == 300) {
    vel2 *= -1;
  } else if (xpos2 == 100) {
    vel2 *= -1;
  }
  
  if (xpos3 == 300) {
    vel3 *= -1;
  } else if (xpos3 == 100) {
    vel3 *= -1;
  }
  
  // Creates the text.
  fill(0, 0, 255);
  text(word, xpos3, 225);
  fill(0, 255, 0);
  text(word, xpos2, 225);
  fill(255, 0, 0);
  text(word, xpos1, 225);
}

function keyTyped() {
  // Allows the user to put the typed key into the word.
  word += key;
}

function mousePressed() {
  // Resets the word variable to hold nothing when the mouse clicks.
  word = '';
}