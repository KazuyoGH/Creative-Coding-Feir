// Predefines the variables.
let timer, points, power;
let first, second, third;
let gameStart, gameEnd;
let bubbles = [];
let popped = [];

// Preloads the assets before the game loads.
function preload() {
  img = loadImage('duck.png');
  sound = loadSound('pop.mp3');
  music = loadSound('Carefree.mp3');
  splash = loadSound('splash.mp3');
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  
  // Puts values into the defined variables.
  gameStart = false;
  gameEnd = false;
  timer = 30;
  points = 0;
  power = 0;
  first = "❌";
  second = "❌";
  third = "❌";
  
  // Sets the volume levels of the audios.
  sound.setVolume(0.2);
  music.setVolume(0.5);
  // Plays and loops the music.
  music.loop();
  

}

function draw() {
  // This If statement holds the Title Page. If the game has not started and has not ended:
  if (!gameStart && !gameEnd) {
    background(254, 199, 111);  
    textSize(30);
    fill(196, 255, 52);
    textStyle(BOLD);
    stroke(0);
    strokeWeight(4);
    text("Ducky's Bubbles", 200, 190);
    
    fill(255);
    textSize(12);
    strokeWeight(0)
    rect(133, 205, 135, 20);
    fill(0);
    textStyle(NORMAL);
    text("Click anywhere to start", 200, 220);
    
    text("Instructions:", 200 , 260);
    text("1. Hover your mouse over the bubbles to collect them.", 200, 280);
    text("2. Collect at least 150 bubbles to win the game.", 200, 295);
    text("3. Every 40 bubbles, you can press Q to pop 10 extra bubbles on screen.", 200, 310);
    
  // This If statement holds the Game. If the game has started, but has not ended:
  } else if (gameStart && !gameEnd) {
    background(56, 166, 211);
    // Maps the value of power to the length of the bar.
    let bar = map(power, 0, 40, 0, 350)
    
    // Holds text for the timer and current points.
    noStroke();
    fill(255);
    textAlign(LEFT);
    textStyle(BOLD);
    text('Timer: ' + timer, 20, 20);
    text('Points: ' + points, 20, 35);
    
    // Creates a power bar at the bottom of the screen.
    stroke(0)
    fill(250);
    rect(20, 360, 360, 30);
    noStroke();
    fill(164, 146, 255)
    rect(25, 365, bar, 20);
    // If power is at 40 max, then show instructions on what to do, otherwise, show the current value.
    if (power == 40) {
      textAlign(CENTER);
      fill(255);
      text("PRESS Q", 200, 380);
    } else {
      textAlign(CENTER);
      fill(0);
      text(power + " / 40", 200, 380);
    }
    
    // Every 10 frames, generate a bubble from the class.
    if(frameCount % 10 == 0) {
      bubbles.push(new Bubble());
    }
    
    // For every item inside of bubbles, display it.
    for (let x of bubbles) {
      x.display();
    }
    
    // This For Loop checks for any popped bubbles.
    for (let i = bubbles.length - 1; i >= 0; i--) {
      // Checks if the current bubble has been popped.
      if (bubbles[i].check()) {
        // Stores the position of the popped bubble.
        let bubbleX = bubbles[i].x;
        let bubbleY = bubbles[i].y;
        // Play a pop sound.
        sound.play();
        
        // Generate three particles three times.
        for (let y = 0; y<3; y++) {
          popped.push(new Particle(bubbleX, bubbleY));
        }
        
        // Remove the bubble from the array.
        bubbles.splice(i, 1);
        // Adds a point to the points tally.
        points++;
        
        // If there is space for power, then add to power.
        if (power < 40) {
          power++;
        }
      }
    }
    
    // This For Loop generates the particles after a pop.
    for(let i = popped.length-1; i>=0; i--)           {
      // Update and show the particles.
      popped[i].update();
      popped[i].display();
      
      // Checks if the particles are done.
      if (popped[i].done) {
        // Remove the particles once it's done.
        popped.splice(i, 1);
      }
    }
    
    // Every 60 frames, remove 1 second from the timer.
    if(frameCount % 60 == 0) {
      timer--;
    }
    
    // If the timer reaches 0, then the game is over.
    if (timer == 0) {
      gameEnd = true;
    }
    
    // Adds a duck image on your cursor.
    imageMode(CENTER);
    img.resize(40, 40);
    image(img, mouseX, mouseY);
    
  // This If statement holds the Game Over Page. If the game has started and has ended:
  } else if (gameStart && gameEnd) {
    
    // If the player reaches 150 points, they win,
    if (points >= 150){
      // Shows text that the player wins, by how much, and how to restart.
      background(0);
      fill(255);
      textAlign(CENTER);
      noStroke();
      textStyle(BOLD);
      textSize(30);
      text("YOU WIN!", 200, 200);
      textSize(12);
      text("You got " + points + " points.", 200, 220);
      textStyle(ITALIC);
      text("(Click anywhere to restart.)", 200, 260);
      
      // Changes the challenge's progress if they are met.
      if (points >= 150) {
      first = "✔️";
      }
      if (points >= 170) {
      second = "✔️";
      }
      if (points >= 185) {
      third = "✔️";
      }

      // Displays all current and completed challenges.
      rect(85, 305, 230, 70)
      fill(0)
      textStyle(BOLD);
      text("ALL-TIME CHALLENGES PROGRESS:", 200, 323);
      textStyle(NORMAL);
      text(first + "Reached 150 Points", 200, 340)
      text(second + "Reached 170 Points", 200, 352)
      text(third + "Reached 185 Points", 200, 364)
      
    // If the player hasn't reached 150 points, they lose.
    } else {
      // Displays to the user that they lost, by how much, and how to restart.
      background(0);
      fill(255);
      noStroke();
      textAlign(CENTER);
      textStyle(BOLD);
      textSize(30);
      text("YOU LOSE!", 200, 200);
      textSize(12);
      text("You needed " + (150 - points) + " more to win.", 200, 220);
      textStyle(ITALIC);
      text("(Click anywhere to restart.)", 200, 260);
    }
    
  }
  
}


function mousePressed() {
  // Whenever the mouse is pressed and the game hasn't started, make the game start.
  if (!gameStart) {
    gameStart = true;
  // Whenever the mouse is pressed and the game has started and ended, then reset all values to restart.
  } else if (gameStart && gameEnd) {
    timer = 30;
    points = 0;
    power = 0;
    bubbles = [];
    popped = [];
    gameEnd = false;
    gameStart = false;
  }
}


function keyPressed() {
  // If the 'q' key is pressed and there is enough power, then remove 10 random bubbles, add points to the counter, and play splash sound.
  if ((key == 'q' || key == 'Q') && power == 40) {
    power = 0;
    for (let x = 0; x<10; x++)
      bubbles.splice(random(0, bubbles.length-1), 1);
    points += 10;
    splash.play();
  }
}

// This is the particle generator class.
class Particle {
  // Tells the code what variables the instances instantly hold. Such as the speed, position, and status.
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = p5.Vector.random2D();
    this.acc.mult(0.05);
    this.life = 100;
    this.done = false;
  }
  
  // Tells the code to constantly add to the speed, deduct from the particle's life, and check if the particle has finished.
  update() {
    this.finished()
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.life -= 2
  }
  
  // Tells the code what the instances should look like, which is smaller bubbles.
  display() {
    noStroke();
    fill(255, this.life);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
  
  // Tells the code if the particle has elapsed enough time.
  finished() {
    if (this.life < 0) {
      this.done = true;
    } else {
      this.done = false;
    }
  }
}

// This is the generating bubbles class.
class Bubble {
  // Tells the code what random position the bubble will be at.
  constructor() {
    this.x = random(50, 350);
    this.y = random(50, 350);
  }
  
  // Tells the code what the bubble will look like, including the shapes and it's stroke.
  display() {
    stroke(255);
    strokeWeight(1);
    fill(184, 221, 243, 75);
    circle(this.x, this.y, 20);
  }
  
  // Tells the code if the mouse has entered the radius of the circle, which is our collision detection system.
  check() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    return d < 20;
  }
}
