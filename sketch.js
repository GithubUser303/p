var bckimg,mntin,mountimg,hillgroup,cloudgrp,cloudimg,clouds,mntin2,mountimg2;
var marioplayer,marioimg;
var rand;
var cloudimg2;
var cloudes;

function preload(){
bckimg  = loadImage("sprites/back.png")
 mountimg = loadImage("sprites/hill.png")
 mountimg2 = loadImage("sprites/hill.png")
 cloudimg = loadImage("sprites/Cloud.png")
 cloudimg2 = loadImage("sprites/Cloud spr.png")
 marioimg  = loadImage("sprites/mario.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)
hillgroup = new Group()
invisibleGround = createSprite(windowWidth-690,windowHeight-90,2700	,10)
invisibleGround.visible = false

    marioplayer = createSprite(windowWidth-1100,windowHeight/1.30	 )
	marioplayer.addImage("marioimg",marioimg)
	marioplayer.scale = 0.2
	marioplayer.depth = 6

rand =Math.round(random(1,10))
}
function draw(){
background(bckimg)

if(keyWentDown(RIGHT_ARROW)){
    marioplayer.velocityX = 5
	}
if(keyWentDown(LEFT_ARROW)){
		marioplayer.velocityX = -5
		}
if(keyDown("space")&& marioplayer.y >=470 ) {
	marioplayer.velocityY = -17;
  }		
  marioplayer.velocityY = marioplayer.velocityY + 0.8
  marioplayer.collide(invisibleGround);
  
drawSprites()
//hill()
cloud()
console.log(marioplayer.y)
}

function hill(){
	
	mntin =  createSprite(windowWidth-1100,windowHeight/2 +145)
	mntin2 =  createSprite(windowWidth-300,windowHeight/2 +145)
	mntin.addImage("mountimg",mountimg)
	mntin2.addImage("mountimg2",mountimg2)
	mntin.scale = 0.3	
	mntin2.scale = 0.3
	
	
}

function cloud (){
		clouds =  createSprite(windowWidth-1200,windowHeight/5.75)
		cloudes =  createSprite(windowWidth-400,windowHeight/6)
		
		clouds.addImage("cloudimg",cloudimg)
		clouds.scale = 0.3
        cloudes.addImage("cloudimg2",cloudimg2)
		cloudes.scale = 0.3

		clouds.lifetime = 2
        cloudes.lifetime = 2
          
}

