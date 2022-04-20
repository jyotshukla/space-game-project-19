var rocketShip,shipImg
var star,starImg
var meteor,meteorImg,meteorGroup
var space,spaceImg
var gameOver,gameOverImg
var redSpace,redSpaceImg
var leftWall
var rightWall
var score

function preload(){
shipImg = loadImage("rocketShip.png")
meteorImg = loadImage("meteorImg.png")
spaceImg = loadImage("spaceImg.jpg")
gameOverImg = loadImage("gameOver.jpg")
redSpaceImg = loadImage("redSpace.jpg")
}

function setup() {
createCanvas(600,700)
space = createSprite(250,200,900,600)
space.addImage("space",spaceImg)
space.velocityY=1;

rocketShip = createSprite(250,150,20,50)
rocketShip.addImage("rocketShip",shipImg)
rocketShip.scale=0.2

leftWall = createSprite(1,100,5,600)
leftWall.visible=false                      

rightWall = createSprite(499,150,5,600)
rightWall.visible=false

meteorGroup=new Group()

}

function draw() {



if(rocketShip.y>420){ 
space.remove();
rocketShip.remove();
redSpace = createSprite(250,200,600,700)
redSpace.addImage("redSpace",redSpaceImg)
redSpace.scale=0.5
gameOver = createSprite(450,350,100,100)
gameOver.addImage("gameOver",gameOverImg)
gameOver.scale=0.25

}

if(space.y > 200){
    space.y = 150
 
  }



    if(frameCount%90===0){
      meteor = createSprite(Math.round(random(1,500)),-50,20,20)
      meteor.addImage("meteor",meteorImg)
      meteor.scale=0.3
      meteor.velocityY=4.5;
      meteor.lifetime = 85;
     meteorGroup.add(meteor)
      } 

      if(keyDown("space")){
      rocketShip.velocityY=-5
      }
      rocketShip.velocityY+=0.2

      if(keyDown(RIGHT_ARROW)){
        rocketShip.velocityX=+3
        }

        if(keyDown(LEFT_ARROW)){
          rocketShip.velocityX=-3
          }


        if(rocketShip.isTouching(leftWall)||rocketShip.isTouching(rightWall)){
          space.remove();
          rocketShip.remove();
          redSpace = createSprite(250,200,600,700)
          redSpace.addImage("redSpace",redSpaceImg)
          redSpace.scale=0.5
          gameOver = createSprite(450,350,100,100)
          gameOver.addImage("gameOver",gameOverImg)
          gameOver.scale=0.25
          
        }

if(rocketShip.isTouching(meteorGroup)){
  space.remove();
  rocketShip.remove();
  redSpace = createSprite(250,200,600,700)
  redSpace.addImage("redSpace",redSpaceImg)
  redSpace.scale=0.5
  gameOver = createSprite(450,350,100,100)
  gameOver.addImage("gameOver",gameOverImg)
  gameOver.scale=0.25
  
}    












drawSprites();
}












