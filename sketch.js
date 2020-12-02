var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  object1=createSprite(200,200,50,50);
  object1.shapeColor="purple";
  object2=createSprite(300,200,50,50);
  object2.shapeColor="purple";
  object3=createSprite(400,200,50,50);
  object3.shapeColor="purple";
  object4=createSprite(500,200,50,50);
  object4.shapeColor="purple";
  object1.velocityX=2;
  object4.velocityX=-2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(object1,movingRect)){
  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="pink";
}
else{
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}
bounceoff (object1,object4);
  drawSprites();
}

