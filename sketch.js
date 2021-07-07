var sky,bird,plane

function preload(){
sky=loadImage("sky.jpg")
bird=loadImage("bird.jpg")


}

function setup(){
createCanvas (600,200)

//sky=createSprite(300,100,600,200);
ground=createSprite(300,190,600,20);
ground.addImage(sky)
ground.scale=0.5
bird=createSprite(200,200,20,20);
plane=createSprite(40,200,40,40);

}
 
function draw(){
background(sky)
ground.velocityX=-3
if(ground.x<0){
ground.x=ground.width/6
}
drawSprites()


}