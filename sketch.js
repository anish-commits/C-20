var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "red";
  rect1.velocityY= -4;
  rect2 = createSprite(400,100,100,100);
  rect2.shapeColor = "yellow";
  rect2.velocityY = 4;
}

function draw() {
background("black");  
//rect2.x = mouseX;
//rect2.y = mouseY;
if(rect2.x-rect1.x<rect2.width/2+rect1.width/2&&
  rect1.x-rect2.x<rect2.width/2+rect1.width/2&&
  rect2.y-rect1.y<rect2.height/2+rect1.height/2&&
  rect1.y-rect2.y<rect2.height/2+rect1.height/2){
rect2.shapeColor = "blue";
}
else {
  rect2.shapeColor = "yellow";
}
if(rect2.x-rect1.x<rect2.width/2+rect1.width/2&&
  rect1.x-rect2.x<rect2.width/2+rect1.width/2){
    rect1.velocityX = rect1.velocityX*-1;
    rect2.velocityX = rect2.velocityX*-1;
  }
  if(rect2.y-rect1.y<rect2.height/2+rect1.height/2&&
    rect1.y-rect2.y<rect2.height/2+rect1.height/2){
      rect1.velocityY = rect1.velocityY*-1;
      rect2.velocityY = rect2.velocityY*-1;
    }
  drawSprites();
}