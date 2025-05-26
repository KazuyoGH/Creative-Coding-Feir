// Predefines the variables.
let table;
let maximum;
function preload() {
  // Preloads the imported CSV table.
  table = loadTable("PetStatistics.csv", "csv", "header");

}

function setup() {
  createCanvas(400, 400);
  background(220);
  // Creates a temporary maximum value.
  maximum = 0;
  
  // This For Loop checks which of the values in the table is the largest.
  for (let i = 0; i < table.getRowCount(); i++) {
    // Finds the numbers under "Amount Owned".
    let num = table.getNum(i, "Amount Owned");
    
    if (num > maximum) {
      maximum = num;
    }
  }
  
  // This For Loop creates a horizontal bar graph based on the data.
  for (let i = 0; i < table.getRowCount(); i++) {
    // Finds the strings under "Pets".
    let pets = table.getString(i,"Pets");
    // Finds the numbers under "Amount Owned".
    let num = table.getNum(i, "Amount Owned");
    
    // Defines how long the bar can be, which the biggest value in the table.
    length = map(num, 0, maximum, 0, 290)
    // Creates space before and after each bar.
    space = 50 * i + 90;
    
    // Randomizes and stores color values.
    let color1 = random(255);
    let color2 = random(255);
    let color3 = random(255);
    
    // Creates a bar based on the value of current item and random color.
    fill(color1, color2, color3);
    rect(100, space, length, 40);
    
    // Adds text to the left side to label every bar's name.
    fill(0);
    textAlign(RIGHT);
    textStyle(NORMAL);
    textSize(12);
    text(pets, 90, space+20)
    
    // Adds text below the label name to identify how much is the bar.
    textStyle(ITALIC);
    textSize(9);
    text(num + " million", 90, space+30)
    
    // Adds text at the bottom detailing the source.
    textAlign(CENTER);
    textStyle(NORMAL);
    text("Statistics from USA, 2025", width/2, 370)
    text("Data from: https://www.forbes.com/advisor/pet-insurance/pet-ownership-statistics/", width/2, 380)
    
  }  
}

function draw() {
  
  
  
  
}