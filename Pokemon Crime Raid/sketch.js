var backgroundImage
var pikachu, pikachuImage;
var squirtle, squirtleImage;
var eevee, eeveeImage;
var venusaur, venusaurImage;
var saurGroup, bulbasaurImage, ivysaurImage;
var platform, platformImage;
var STOP = 2;
var PLAY = 1;
var END = 0;
var gameState = PLAY; 
var score = 0;
var invisiblePlatform;

function preload() {
  backgroundImage = loadImage("images/messyhouse.jpeg");
  platformImage = loadImage("images/platform.png");
  pikachuImage = loadImage("images/pikachu.png");
  bulbasaurImage = loadImage("images/bulbasaur.png");
  squirtleImage = loadImage("images/squirtle.png");
  venusaurImage = loadImage("images/venusaur.png");
  ivysaurImage = loadImage("images/ivysaur.png");
  eeveeImage = loadImage("images/eevee.png");
}

function setup() {
  createCanvas(800,400);
  platform = createSprite(200, 350, 400, 400);
  platform.addImage(platformImage);
  platform.scale = 0.15;
  pikachu = createSprite(50, 230, 50, 50);
  pikachu.addImage(pikachuImage);
  pikachu.scale = 0.05;
  eevee = createSprite(210, 230, 50, 50);
  eevee.addImage(eeveeImage);
  eevee.scale = 0.0625;
  squirtle = createSprite(370, 230, 50, 50);
  squirtle.addImage(squirtleImage);
  squirtle.scale = 0.125;
  venusaur = createSprite(650, 250, 100, 100);
  venusaur.addImage(venusaurImage);
  venusaur.scale = 0.7;
  invisiblePlatform = createSprite(200, 312, 600, 100);
  invisiblePlatform.visible = false;
}

function draw() {
  background(backgroundImage); 
  textSize(20);
  fill('black');
  text("Score: " + score, 10, 20);

  if (gameState === PLAY) {
  
    if (keyDown("p") && pikachu.y >= 220) {
      pikachu.velocityY = -17;
    }
    if (keyDown("e") && eevee.y >= 220) {
      eevee.velocityY = -17;
    }
    if (keyDown("s") && squirtle.y >= 220) {
      squirtle.velocityY = -17;
    } 
    
    pikachu.velocityY += 0.9;
    eevee.velocityY += 0.9;
    squirtle.velocityY += 0.9;

    pikachu.collide(invisiblePlatform); 
    eevee.collide(invisiblePlatform); 
    squirtle.collide(invisiblePlatform); 
    
  }

  

  drawSprites();
}

