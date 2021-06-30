var backgroundImage
var pikachu, pikachuImage;
var charmander, charmanderImage;
var squirtle, squirtleImage;
var eevee, eeveeImage;
var venusaur, venusaurImage;
var saurGroup, bulbasaurImage, ivysaurImage;
var platform, platformImage;
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
  charmanderImage = loadImage("images/charmander.png");
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
  eevee = createSprite(155, 230, 50, 50);
  eevee.addImage(eeveeImage);
  eevee.scale = 0.0625;
  squirtle = createSprite(250, 230, 50, 50);
  squirtle.addImage(squirtleImage);
  squirtle.scale = 0.125;
  charmander = createSprite(350, 230, 50, 50);
  charmander.addImage(charmanderImage);
  charmander.scale = 0.125;
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
  text('Press space to restart', 300, 20);

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
    if (keyDown("c") && charmander.y >= 220) {
      charmander.velocityY = -17;
    }
    pikachu.velocityY += 0.9;
    eevee.velocityY += 0.9;
    squirtle.velocityY += 0.9;
    charmander.velocityY += 0.9;

    pikachu.collide(invisiblePlatform); 
    eevee.collide(invisiblePlatform); 
    squirtle.collide(invisiblePlatform); 
    charmander.collide(invisiblePlatform); 
    spawnWeapons();

  }

  

  drawSprites();
}

function spawnWeapons() {
  if (frameCount % 80 === 0) {
    var saurPokemon = createSprite(500, 230, 50, 50);
    saurPokemon.setCollider('circle', 0, 0, 250);
    //saurPokemon.debug = true;

    saurPokemon.velocityX = -4.5;

    var rand = Math.round(random(1, 2));
    switch(rand) {
      case 1: saurPokemon.addImage(bulbasaurImage);
      break;
      case 2: saurPokemon.addImage(ivysaurImage);
      break;
    }

    saurPokemon.scale = 0.125;
    saurPokemon.lifetime = 500;
    saurPokemon.depth = pikachu.depth;
    saurPokemon.depth = eevee.depth;
    saurPokemon.depth = squirtle.depth;
    saurPokemon.depth = charmander.depth;
    pikachu.depth += 1;
    eevee.depth += 1;
    squirtle.depth += 1;
    charmander.depth += 1;
  }
}