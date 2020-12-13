var wall;
var thickness, bullet
var speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = color(0,0,0);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
}
  

function draw() {
  background(225,225,225);  
  if (wall.x - bullet.x < (bullet.width + wall.width)){
  bullet.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22500;
  if (deformation > 180){
  bullet.shapeColor = color(255,0,0); //red
    }
  if (deformation < 180 && deformation > 100){
    bullet.shapeColor = color(230,230,0); //yellow
  }
  if (deformation < 100){
  bullet.shapeColor = color(0,255,0);//green

  }

  }if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * weight * speed / thickness * thickness * thickness;
    if (damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    if (damage < 10){
      wall.shapeColor  = color(0,225,0);

    }

  }
  bullet.collide(wall);
  drawSprites();
  }
  
 
function hasCollided(Lbullet, Lwall){
  bulletRightRdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if (bulletRightRdge >= wallLeftEdge){
    return true;
  }
  return false;
}
