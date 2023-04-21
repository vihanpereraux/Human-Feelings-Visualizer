let newCanvas;
let canvasWidth = 1000;
let canvasHeight = 500;
let img;
let img2;
let images;
let imageOneXPosition;
let imageOneYPosition;

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

function preload(){
  img = loadImage('https://i.ibb.co/Z2R4FTq/image.png');
  img2 = loadImage('https://i.ibb.co/7GXRMMy/image.png');

  images = [img, img2];
}

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

  // noFill();
  // stroke(255, 0, 0);
  // rect(0, 0, canvasWidth, canvasHeight );
  
  
  // detail box 01
  noFill();
  strokeWeight(1)
  stroke(255);
  squareOne.xValue = random((width)/2, (width)/3);
  squareOne.yValue = random(30, 60);
  rect(
    squareOne.xValue, 
    squareOne.yValue, 
    squareOne.width + random (-10, 40), 
    squareOne.height + random (20, 40));

  stroke(255);
  strokeWeight(1);
  detailsBoxOne.xValue = random(0, 20);
  detailsBoxOne.yValue = random(0, 20);
  rect(
    detailsBoxOne.xValue, 
    detailsBoxOne.yValue, 
    detailsBoxOne.width, 
    detailsBoxOne.height);

  noStroke();
  fill(255);
  textSize(10);
  text(
    detailsBoxOne.text,
    10 + detailsBoxOne.xValue, 
    10 + detailsBoxOne.yValue, 
    191);

  noFill();
  stroke(255);
  strokeWeight(1);
  line(
    detailsBoxOne.width + detailsBoxOne.xValue, 
    detailsBoxOne.height + detailsBoxOne.yValue, 
    squareOne.xValue, 
    squareOne.yValue);
  
  
  // detail box 02
  stroke(255);
  squareTwo.xValue = random((width)*.45, (width)*.35);
  squareTwo.yValue = random((height - squareTwo.height)-40, 
    (height - squareTwo.height)-100);
  rect(
    squareTwo.xValue, 
    squareTwo.yValue, 
    squareTwo.width + random (-10, 50)  , 
    squareTwo.height + random (10, 40));

  noFill();
  stroke(255);
  strokeWeight(1);
  detailsBoxTwo.xValue = random((width-200)-100, (width-200)-20);
  detailsBoxTwo.yValue = random(height*.1, height*.3);
  rect(
    detailsBoxTwo.xValue, 
    detailsBoxTwo.yValue, 
    detailsBoxTwo.width, 
    detailsBoxTwo.height);

  noStroke();
  fill(255);
  textSize(10);
  text(
    detailsBoxTwo.text,
    10 + detailsBoxTwo.xValue, 
    10 + detailsBoxTwo.yValue, 
    191);

  noFill();
  stroke(255);
  strokeWeight(1);
  line(
    detailsBoxTwo.xValue, 
    detailsBoxTwo.yValue, 
    squareTwo.xValue + squareTwo.width, 
    squareTwo.yValue);


  // detail box 03
  stroke(255);
  squareThree.xValue = random((width)*.6, (width)*.3);
  squareThree.yValue = random((height - squareThree.height)-180, (height - squareThree.height)-250);
  rect(
    squareThree.xValue, 
    squareThree.yValue, 
    squareThree.width, 
    squareThree.height);

  noFill();
  stroke(255);
  strokeWeight(1);
  detailsBoxThree.xValue = random(width-300, width-400);
  detailsBoxThree.yValue = random(height-100, height-200);
  rect(
    detailsBoxThree.xValue, 
    detailsBoxThree.yValue, 
    detailsBoxThree.width, 
    detailsBoxThree.height);

  noStroke();
  fill(255);
  textSize(10);
  text(
    detailsBoxThree.text,
    10 + detailsBoxThree.xValue, 
    10 + detailsBoxThree.yValue, 
    191);

  noFill();
  stroke(255);
  strokeWeight(1);
  line(
    detailsBoxThree.xValue, 
    detailsBoxThree.yValue, 
    squareThree.xValue + squareThree.width, 
    squareThree.yValue + squareThree.height); 


    imageOneXPosition = random(100);
    imageOneYPosition = random(200);
    image(
      images[1], 
      imageOneXPosition, 
      imageOneYPosition, 
      width*.12, 
      height*.40);
    stroke(255);
    line(
      (width*.12)/2 + imageOneXPosition, 
      (height*.40)/2 + imageOneYPosition, 
      squareTwo.xValue, 
      squareTwo.yValue);
    
    strokeWeight(1);
    circle(
      (width*.12)/2 + imageOneXPosition, 
      (height*.40)/2 + imageOneYPosition, 
      40);

    fill(255);
    circle(
      (width*.12)/2 + imageOneXPosition, 
      (height*.40)/2 + imageOneYPosition, 
      6);
    
}


