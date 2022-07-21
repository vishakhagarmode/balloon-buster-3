var backgroundSceneImage, backgroundScene;
var arrowImage;
var arrow = [];
var bowImage, bow;
var greenballoonImage;
var blueballoonImage;
var pinkballoonImage;
var redballoonImage;
var greenballoon;
var blueballoon;
var pinkballoon;
var redballoon;
var edges;
var balloons;
var arrow_counter = 0;

function preload() {
  backgroundSceneImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
  pinkballoonImage = loadImage("pink_balloon0.png");
  redballoonImage = loadImage("red_balloon0.png");
}

function setup() {
  createCanvas(400, 350);
  backgroundScene = createSprite(0, 0, 800, 800);
  backgroundScene.addImage("backgroundScene",backgroundSceneImage);    backgroundScene.x =   backgroundScene.width / 2;
  backgroundScene.scale = 2;
  createBow(); 
  createArrow();
  balloons = new Group();
  
}

function draw() {
  background("white");
  bow.y = mouseY;
  arrow[0].y = bow.y;
  backgroundScene.velocityX = -2;
  if (keyWentDown("space")) {
    createArrowinMotion();
  }
  if (backgroundScene.x < 0) {
    backgroundScene.x = backgroundScene.width / 2;
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  var currentSprites = getSprites();
  //drawSprites 
  for(s = 0;s < currentSprites.length;s++){     
    drawSprite(currentSprites[s]);
  
  }
  
  if (arrow_counter > 0) {  
      balloons.collide(arrow[arrow_counter],explosion);
  }  
}


function createBow() {
  bow = createSprite(370, 200, 20, 20);
  bow.addAnimation("bow", bowImage);
  bow.scale = 1.5;

}

function createArrow() {
  arrow[arrow_counter] = createSprite(340, bow.y, 10, 10);
  arrow[arrow_counter].addAnimation("arrow", arrowImage);
  arrow[arrow_counter].scale = 0.4;
}

function createArrowinMotion() {
  arrow_counter++;
  arrow[arrow_counter] = createSprite(340, bow.y, 10, 10);
  arrow[arrow_counter].addAnimation("arrow", arrowImage);
  arrow[arrow_counter].scale = 0.4;
  arrow[arrow_counter].velocityX = -10;
  
}
function redBalloon() {
  var redballoon = createSprite(0,Math.round(random(40, 330)), 10, 10);
  redballoon.addImage(redballoonImage);
  redballoon.velocityX = 4 ;
  redballoon.lifetime = 150;
  redballoon.scale = 0.1;
  redballoon.lifetime = 100;
  balloons.add(redballoon); 
}

function blueBalloon() {
  var blueballoon = createSprite(0,Math.round(random(40, 330)), 10, 10);
  blueballoon.addImage(blueballoonImage);
  blueballoon.velocityX = 4;
  blueballoon.lifetime = 150;
  blueballoon.scale = 0.1;
  blueballoon.lifetime = 100;
  balloons.add(blueballoon);
}

function greenBalloon() {
  var greenballoon = createSprite(0,Math.round(random(40, 330)), 10, 10);
  greenballoon.addImage(greenballoonImage);
  greenballoon.velocityX = 4;
  greenballoon.lifetime = 150;
  greenballoon.scale = 0.1;
  greenballoon.lifetime = 100;
  balloons.add(greenballoon);
}

function pinkBalloon() {
  var pinkballoon = createSprite(0,Math.round(random(40, 330)), 10, 10);
  pinkballoon.addImage(pinkballoonImage);
  pinkballoon.velocityX = 4;
  pinkballoon.lifetime = 150;
  pinkballoon.scale = 1.3;
  pinkballoon.lifetime = 100;
  balloons.add(pinkballoon);
}


function explosion(spriteA,spriteB){
    spriteA.remove();
    spriteB.remove();
}