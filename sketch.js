var tower,towerImg;
var ghost,ghostImg;
var door,doorImg,doorsGroup;
var climber,climberImg,climbersGroup;
var invisibleBlock,invisibleWall,invisibleBlockGroup;

function preload(){
  towerImg= loadImage("tower.png");
  ghostImg= loadImage("ghost-standing.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
}
function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300,600,600);
  tower.addImage("background",towerImg);
  tower.velocityY=2;
  ghost=createSprite(300,300);
  ghost.addImage("ghost Image",ghostImg);
  ghost.scale=0.4;
  invisibleWall=createSprite(300,590,600,20);
  invisibleWall.visible=false;
  doorsGroup=new Group();
  climbersGroup=new Group();
  invisibleBlockGroup=new Group();
}
function draw(){
  background("white");
  if(tower.y>400){
    tower.y=300;
  }
  if(keyDown("space")){
    ghost.velocityY=-4 ;
  }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x+-3;       
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;       
  }
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0; 
  }
  if(invisibleBlockGroup.isTouching(ghost)||invisibleWall.isTouching(ghost)){
    background("black");
    fill("White");
    textSize(26);
    text("GAME OVER!",220,300); 
    tower.visible=false;
    door.visible=false;
    ghost.visible=false;
    climber.visible=false;
    climer.velocityY=0;
    ghost.velocityY=0;
    door.velocityY=0;
  }
  ghost.velocityY=ghost.velocityY+1 ;
  
  spawnDoors();
  drawSprites();
}
function spawnDoors(){
  if(frameCount%240===0){
     var door=createSprite(200,-50);
     door.addImage("doorImage",doorImg);
     var climber=createSprite(200,0);
     climber.addImage("climber Image",climberImg);
     var  invisibleBlock=createSprite(300,300,90,10 );  
     door.velocityY=2;
     climber.velocityY=2; 
     invisibleBlock.velocityY=climber.velocityY; 
     invisibleBlock.visible=false;
    
     door.x=Math.round(random(120,500));
     climber.x=door.x;
    
     door.lifetime=500;
     climber.lifetime=500;
    
     invisibleBlock.x=climber.x;
     invisibleBlock.y=climber.y+10;
     doorsGroup.add(door);
     climbersGroup.add(climber);
     invisibleBlockGroup.add(invisibleBlock);
     invisibleBlockGroup.add(invisibleWall);
   
     ghost.depth=door.depth;
     ghost.depth=ghost.depth+1;
  }
}