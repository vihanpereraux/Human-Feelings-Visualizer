let newCanvas;
let canvasWidth = screen.width * .7;
let canvasHeight = screen.height * .7;
let img;
let img2;
let images;
let textArray = [];
let nsfwImgArray = [];

// let textArray = ["It's difficult to find examples of lorem ipsum in use before Letraset made it popular" + 
// "ipsum in use before Letraset made it popular"];


// text box class
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
let squareFour = new Shape(0, 0, 50, 50);
let detailsBoxOne = new Shape(0, 0, 200, 70);
let detailsBoxTwo = new Shape(0, 0, 200, 70);
let detailsBoxThree = new Shape(0, 0, 200, 70);
let detailsBoxFour = new Shape(0, 0, 200, 70);


// image (preview) class  
class Preview {
  img;
  xValue;
  yValue;
  width;
  height;

  constructor(xValue, yValue, width, height, img) {
    this.img = img;
    this.xValue = xValue;
    this.yValue = yValue;
    this.width = width;
    this.height = height;
  }
}

let imagePreviewOne = new Preview(0, 0, canvasWidth * .14, canvasHeight * .40);
let imagePreviewTwo = new Preview(0, 0, canvasWidth * .14, canvasHeight * .40);


// fetching dataset
async function getJSONData() {
  const response = await fetch('../data/chat_data.json');
  const jsonData = await response.json();

  for (let i = 0; i < jsonData.length; i++) {
    textArray.push(jsonData[i].message);
  }
}
getJSONData();


async function getNsfwData() {
  const response = await fetch('https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/age_college/reddit_sub_CollegeAmateurs/urls.txt')
    .then(data => data.text());  
  for (let i = 0; i < response.split('\n').length; i++) {
    nsfwImgArray.push(response.split('\n')[i]);
  }
  console.log(nsfwImgArray);
}
getNsfwData();


function preload() {
  img = loadImage('https://i.redd.it/pajaw2is2ti01.jpg');
  img2 = loadImage('https://i.redd.it/e0h6cyh6g8rz.jpg');

  images = [img, img2];
}


function setup() {
  newCanvas = createCanvas(canvasWidth, canvasHeight);
  newCanvas.position((windowWidth - canvasWidth) / 2, (windowHeight - canvasHeight) / 2);
  translate(width / 2, height / 2);
  angleMode(DEGREES);
}

setTimeout(() => {
  console.log(nsfwImgArray);
}, 4000);

function draw() {
  frameRate(5);
  clear();

  noFill();
  stroke(255);
  strokeWeight(2);


  // detail box 01
  noFill();
  strokeWeight(1)
  stroke(255);
  squareOne.xValue = random((width) / 2, (width) / 3);
  squareOne.yValue = random(30, 60);
  rect(
    squareOne.xValue,
    squareOne.yValue,
    squareOne.width + random(-10, 40),
    squareOne.height + random(20, 40));

  stroke(255);
  strokeWeight(1);
  detailsBoxOne.xValue = random(0, 50);
  detailsBoxOne.yValue = random(0, 50);
  rect(
    detailsBoxOne.xValue,
    detailsBoxOne.yValue,
    detailsBoxOne.width,
    detailsBoxOne.height);

  // rect(0, 0, width, height)

  noStroke();
  fill(255);
  textSize(10);
  detailsBoxOne.text = textArray[int(random(0, 188000))];
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
  squareTwo.xValue = random((width) * .45, (width) * .35);
  squareTwo.yValue = random((height - squareTwo.height) - 40,
    (height - squareTwo.height) - 100);
  rect(
    squareTwo.xValue,
    squareTwo.yValue,
    squareTwo.width + random(-10, 30),
    squareTwo.height + random(10, 30));

  noFill();
  stroke(255);
  strokeWeight(1);
  detailsBoxTwo.xValue = random((width - 200) - 100, (width - 200) - 20);
  detailsBoxTwo.yValue = random(height * .1, height * .3);
  rect(
    detailsBoxTwo.xValue,
    detailsBoxTwo.yValue,
    detailsBoxTwo.width,
    detailsBoxTwo.height);

  noStroke();
  fill(255);
  textSize(10);
  detailsBoxTwo.text = textArray[int(random(0, 188000))];
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
  squareThree.xValue = random((width) * .7, (width) * .5);
  squareThree.yValue = random((height - squareThree.height) - 180, (height - squareThree.height) - 250);
  rect(
    squareThree.xValue,
    squareThree.yValue,
    squareThree.width,
    squareThree.height);

  noFill();
  stroke(255);
  strokeWeight(1);
  detailsBoxThree.xValue = random(width - 300, width - 400);
  detailsBoxThree.yValue = random(height - 100, height - 200);
  rect(
    detailsBoxThree.xValue,
    detailsBoxThree.yValue,
    detailsBoxThree.width,
    detailsBoxThree.height);

  noStroke();
  fill(255);
  textSize(10);
  detailsBoxThree.text = textArray[int(random(0, 188000))];
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


  // details box 04
  stroke(255);
  squareFour.xValue = random((width) * .3, (width) * .5);
  squareFour.yValue = random((height - squareFour.height) - 300, (height - squareThree.height) - 250);
  rect(
    squareFour.xValue,
    squareFour.yValue,
    squareFour.width,
    squareFour.height);

  noFill();
  stroke(255);
  strokeWeight(1);
  detailsBoxFour.xValue = random(width * 0, width * .15);
  detailsBoxFour.yValue = random(height - 100, height - 200);
  rect(
    detailsBoxFour.xValue,
    detailsBoxFour.yValue,
    detailsBoxFour.width,
    detailsBoxFour.height);

  noStroke();
  fill(255);
  textSize(10);
  detailsBoxFour.text = textArray[int(random(0, 188000 * 0.5))];
  text(
    detailsBoxFour.text,
    10 + detailsBoxFour.xValue,
    10 + detailsBoxFour.yValue,
    191);

  noFill();
  stroke(255);
  strokeWeight(1);
  line(
    detailsBoxFour.xValue + detailsBoxFour.width,
    detailsBoxFour.yValue,
    squareFour.xValue,
    squareFour.yValue + squareFour.height);

  line(
    squareFour.xValue + squareFour.width,
    squareFour.yValue + squareFour.height,
    detailsBoxThree.xValue,
    detailsBoxThree.yValue
  )

  // image preview 01 
  imagePreviewOne.xValue = random(100);
  imagePreviewOne.yValue = random(200);
  imagePreviewOne.img = images[int(random(0, 2))];
  drawingContext.filter = 'grayscale(100%) blur(3px)';
  image(
    images[int(random(0, 2))],
    imagePreviewOne.xValue,
    imagePreviewOne.yValue,
    imagePreviewOne.width,
    imagePreviewOne.height);
  drawingContext.filter = 'none';

  stroke(255);
  line(
    (width * .12) / 2 + imagePreviewOne.xValue,
    (height * .40) / 2 + imagePreviewOne.yValue,
    squareTwo.xValue,
    squareTwo.yValue);

  strokeWeight(1);
  circle(
    (width * .12) / 2 + imagePreviewOne.xValue,
    (height * .40) / 2 + imagePreviewOne.yValue,
    40);

  fill(255);
  circle(
    (width * .12) / 2 + imagePreviewOne.xValue,
    (height * .40) / 2 + imagePreviewOne.yValue,
    6);


  // image preview 02
  imagePreviewTwo.xValue = random(500, 800);
  imagePreviewTwo.yValue = random(0, 300);
  // drawingContext.filter = 'blur(5px)';
  drawingContext.filter = 'grayscale(100%) blur(3px)';

  console.log(nsfwImgArray[0]);

  image(
    images[int(random(0, 2))],
    imagePreviewTwo.xValue,
    imagePreviewTwo.yValue,
    imagePreviewTwo.width,
    imagePreviewTwo.height);
  drawingContext.filter = 'none';

  stroke(255);
  line(
    (width * .12) / 2 + imagePreviewTwo.xValue,
    (height * .40) / 2 + imagePreviewTwo.yValue,
    squareOne.xValue,
    squareOne.yValue);

  line(
    (width * .12) / 2 + imagePreviewOne.xValue,
    (height * .40) / 2 + imagePreviewOne.yValue,
    (width * .12) / 2 + imagePreviewTwo.xValue,
    (height * .40) / 2 + imagePreviewTwo.yValue);

  noFill()
  strokeWeight(1);
  circle(
    (width * .12) / 2 + imagePreviewTwo.xValue,
    (height * .40) / 2 + imagePreviewTwo.yValue,
    40);

  fill(255);
  circle(
    (width * .12) / 2 + imagePreviewTwo.xValue,
    (height * .40) / 2 + imagePreviewTwo.yValue,
    6);

}


