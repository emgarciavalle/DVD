var racerSize = 40;
var startX = 0;
var startY = 100;
var speed = 2;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(200, 225, 255);

  strokeWeight(4);
  stroke(0) 
  line(580, 0, 580, height);


  strokeWeight(1)
  // Bright red
  fill(255,0,0);
  ellipse(startX*1.7, startY, racerSize, racerSize);
  
  //Dark red 
  fill(127,0,0);
  ellipse(startX*2, startY * 2, racerSize, racerSize);
  
  //pink 
  fill (255, 200, 200);
  ellipse(startX*3, startY * 3, racerSize, racerSize);
  
  ellipse(startX*3.75, startY * 4, racerSize, racerSize);

  startX = startX + speed;
  
 
  
}