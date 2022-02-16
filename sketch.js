var path,jake, leftBoundary,rightBoundary;
var pathImg,boyImg;
var coin, bomb, energyDrink;

function preload(){
  pathImg = loadImage("path.png");
  jakeImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");

}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage("path",pathImg);
  path.velocityY = 5;
  path.y = path.height/30;
  path.scale=1.2;

  jake = createSprite (180,340,50,170);
  jake.addAnimation("running",jakeImg);
  
  jake.scale=1;
  
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false
}

function draw() {
  background(200);
  path.velocityY = 4;
  
  jake.x = mouseX

  edges= createEdgeSprites();
  jake.collide(edges[3]);

  jake.collide(rightBoundary);
  jake.collide(leftBoundary);


  if(path.y > 400 ){
    path.y = height/4;
  }
  
  drawSprites();
}
