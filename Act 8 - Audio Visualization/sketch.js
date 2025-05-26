// Defines the amp variable.
let amp;

function preload() {
  // Preloads the music.
  sound = loadSound('why.mp3');
}

function setup() {
  createCanvas(400, 400);
  // Both plays and loops the audio.
  sound.loop()
  // Returns audio values of the audio.
  amp = new p5.Amplitude();
}

function draw() {
  background(0, 10);
  // Stores the volume value in level.
  let level = amp.getLevel();
  // Creates a random color for the shape.
  fill(random(255), random(255), random(255));
  
  // Maps the levels of the audio to the size of the circle.
  let sizeA = map(level, 0, 1, 0, width/6);
  // Creates the circle to be in the middle, while adjusting the radius to the volume.
  circle(width/2, height/2, sizeA*10);
  
  // If the audio reaches a certain volume threshhold, then flash the screen with white.
  if (level > 0.45) {
    background(0, 20);
    background(255, 50);
  }
}