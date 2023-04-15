let newCanvas;
let canvasWidth = 1000;
let canvasHeight = 500;

let squareOne = {
  width: 50,
  height: 50
};
let squareTwo = {
  width: 50,
  height: 50
};
let squareThree = {
  width: 50,
  height: 50
};

function setup() {
  newCanvas = createCanvas(canvasWidth, canvasHeight);
  newCanvas.position((windowWidth-canvasWidth)/2, (windowHeight-canvasHeight)/2);
  translate(width/2, height/2);
  angleMode(DEGREES);
}

function draw() {
  frameRate(5);
  clear();

  noFill();
  stroke(255);
  strokeWeight(2);
  rect(
    random((width)/2, (width)/3), 
    random(30, 60), 
    squareOne.width + random (-10, 20), 
    squareOne.height + random (20, 30));

  rect(
    (width)/3, 
    (height - squareTwo.height)-60, 
    squareTwo.width, 
    squareTwo.height);

    rect(
      (width)*.6, 
      (height - squareThree.height)-180, 
      squareThree.width, 
      squareThree.height);

    
    stroke(0);
    strokeWeight(2);
    rect(0, 0, 200, 100);
    
    noStroke();
    fill(0);
    textSize(10);
    text("It's difficult to find examples of lorem ipsum in use before Letraset made it popular",
       5, 10, 200)

    noFill();
    stroke(0);
    strokeWeight(2);
    rect((width-200)-50, height*.2, 200, 100);
    rect(width-200, height-100, 200, 100);
}
