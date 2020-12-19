var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,jump,jumpi;
var score,ground,monkey,hurt,hurti,rand,rnand,obstacleGroup;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 hurti = loadImage("~cartoon-funny-monkey-cartoon-laughing_25077988_high.webp")

}

function setup() {
  

  monkey = createSprite(100,324,10,10) 
  monkey.addAnimation("mon", monkey_running)
  monkey.scale=0.12 

    ground = createSprite(200,350,1000,10)
  ground.velocityX=-5;
 obstacleGroup=new Group();
}


function draw() 
{
   background("white");

if(gameState===PLAY)
{
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime"+survivalTime,100,50)
  
 if(ground.x<0)
   {
     ground.x=ground.width/2;
   }
if(keyDown("space")&& monkey.y >= 100) {
   
      monkey.velocityY = -12;
   
}
    monkey.velocityY = monkey.velocityY + 0.8

  if(obstacleGroup.isTouching(monkey)){
    gameState=END;
    
  }
  console.log(gameState)
  monkey.collide(ground)
  if (frameCount % 100 === 0){
  
   obstacle = createSprite(400,332,10,10);
 obstacle.collide(ground);
    obstacle.velocityX=-5;
   obstacle.addImage(obstaceImage)
    obstacle.scale=0.1
     rand = Math.round(random(1,6));
  obstacleGroup.add(obstacle)
 
    }
   if (frameCount % 60 === 0){
  
   banana = createSprite(400,122,10,10);
  banana.collide(ground);
     banana.velocityX=-5;
    banana.addImage(bananaImage)
     banana.scale=0.1
     rnand = Math.round(random(120,300));
  banana.y=rnand;
   }}
  if(gameState===END){
  monkey.velocityX=0;
 monkey.velocityY=0;
 ground.velocityX=0;
monkey.destroy();
banana.destroy();
ground.destroy();
obstacleGroup.destroyEach();
text("Game Over",100,100)
  }
  
  
  
  
  
  
  
  
  drawSprites();
}
  

