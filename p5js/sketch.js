let newCanvas;
let canvasWidth = 1000;
let canvasHeight = 500;

let textArray = ["It's difficult to find examples of lorem ipsum in use before Letraset made it popular" + 
"ipsum in use before Letraset made it popular"];

class Shape {
  xValue;
  yValue;
  width;
  height;

  constructor(xValue, yValue, width, height, text) {
    this.xValue = xValue;
    this.yValue = yValue;
    this.width = width;
    this.height = height;
    this.text = text;
  }
};

let squareOne = new Shape(0, 0, 50, 50);
let squareTwo = new Shape(0, 0, 50, 50);
let squareThree = new Shape(0, 0, 50, 50);
let detailsBoxOne = new Shape(0, 0, 200, 70, textArray[0]);
let detailsBoxTwo = new Shape(0, 0, 200, 70, textArray[0]);
let detailsBoxThree = new Shape(0, 0, 200, 70, textArray[0]);


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
  
  
  // detail box 01
  squareOne.xValue = random((width)/2, (width)/3);
  squareOne.yValue = random(30, 60);
  rect(
    squareOne.xValue, 
    squareOne.yValue, 
    squareOne.width + random (-10, 40), 
    squareOne.height + random (20, 40));

  noFill();
  stroke(0);
  strokeWeight(1.5);
  line(
    detailsBoxOne.width + detailsBoxOne.xValue, 
    detailsBoxOne.height + detailsBoxOne.yValue, 
    squareOne.xValue, 
    squareOne.yValue);

  stroke(0);
  strokeWeight(2);
  detailsBoxOne.xValue = random(0, 20);
  detailsBoxOne.yValue = random(0, 20);
  rect(
    detailsBoxOne.xValue, 
    detailsBoxOne.yValue, 
    detailsBoxOne.width, 
    detailsBoxOne.height);
  
  noStroke();
  fill(0);
  textSize(10);
  text(
    detailsBoxOne.text,
    10 + detailsBoxOne.xValue, 
    10 + detailsBoxOne.yValue, 
    191);

  
  // detail box 02
  squareTwo.xValue = random((width)*.45, (width)*.35);
  squareTwo.yValue = random((height - squareTwo.height)-40, 
    (height - squareTwo.height)-100);
  rect(
    squareTwo.xValue, 
    squareTwo.yValue, 
    squareTwo.width + random (-10, 50), 
    squareTwo.height + random (10, 40));

  noFill();
  stroke(0);
  strokeWeight(1.5);
  line(
    detailsBoxTwo.xValue, 
    detailsBoxTwo.yValue, 
    squareTwo.xValue + squareTwo.width, 
    squareTwo.yValue);

  noFill();
  stroke(0);
  strokeWeight(2);
  detailsBoxTwo.xValue = random((width-200)-100, (width-200)-20);
  detailsBoxTwo.yValue = random(height*.1, height*.3);
  rect(
    detailsBoxTwo.xValue, 
    detailsBoxTwo.yValue, 
    detailsBoxTwo.width, 
    detailsBoxTwo.height);

  noStroke();
  fill(0);
  textSize(10);
  text(
    detailsBoxTwo.text,
    10 + detailsBoxTwo.xValue, 
    10 + detailsBoxTwo.yValue, 
    191);


  // detail box 03
  squareThree.xValue = random((width)*.6, (width)*.3);
  squareThree.yValue = random((height - squareThree.height)-180, (height - squareThree.height)-250);
  rect(
    squareThree.xValue, 
    squareThree.yValue, 
    squareThree.width, 
    squareThree.height);

  noFill();
  stroke(0);
  strokeWeight(1.5);
  line(
    detailsBoxThree.xValue, 
    detailsBoxThree.yValue, 
    squareThree.xValue + squareThree.width, 
    squareThree.yValue);

  noFill();
  stroke(0);
  strokeWeight(2);
  detailsBoxThree.xValue = random(width-300, width-400);
  detailsBoxThree.yValue = random(height-100, height-200);
  rect(
    detailsBoxThree.xValue, 
    detailsBoxThree.yValue, 
    detailsBoxThree.width, 
    detailsBoxThree.height);

  noStroke();
  fill(0);
  textSize(10);
  text(
    detailsBoxThree.text,
    10 + detailsBoxThree.xValue, 
    10 + detailsBoxThree.yValue, 
    191); 
}
