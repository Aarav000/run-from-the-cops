var ground
  var cop1,cop2,cop3,cop4

function preload(){
  bush = loadImage("bush-clipart.png");
  cop = loadAnimation("cop-1.png","cop-2.png","cop-3.png","cop-4.png");
  robber_running = loadAnimation("robber-0.png","robber-2.png","robber-3.png","robber-4.png","robber-5.png","robber-6.png","robber-7.png","robber-8.png","robber-9.png","robber-10.png");
  bg = loadImage("Background.jpeg");
}



function setup() {
  createCanvas(800, 600);

  bgSprite = createSprite(400,300,400,20);
bgSprite.addImage("ground",bg);
bgSprite.x = bgSprite.width /2;
bgSprite.scale = 1.3;
}

function draw() {
  background(0);
  bgSprite.velocityX = 2;
  

  if (bgSprite.x < 0){
    bgSprite.x = bgSprite.width/2;
}
drawSprites()
}
