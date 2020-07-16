var thickness,wall;
var bullet,speed,weight  
function setup() {
  createCanvas(1600,400);

thickness=random(22,83);  
speed=random(223,321);
weight=random(30,50);


car=createSprite(50,200,50,5);
car.shapeColor ="white"
car.velocityX=speed;

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(230,230,230);


 
}


function draw() {
  background(255,255,255);  
 
  if (hasColiided(car,wall)){

    car.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if (damage>10)
{
  wall.shapeColor=color(225,0,0);
}

if (damage<10)
{
  wall.shapeColor=color(0,225,0);
}

  }

  drawSprites();
}

function hasCollided(car,wall)
{

carRightEdge=car.x+wall.x
wallLeftEdge=wall.x
if(carRightEdge>=wallLeftEdge){

  return true
}
return false
}
