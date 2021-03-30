var cat, catImg, catImg2, cat_running
var mouse, mouseImg, mouseImg2, mouse_running
var back, backImg
function preload() {
    //load the images here
    catImg=loadImage("images/cat1.png");
    catImg2=loadAnimation("images/cat4.png");
    cat_running=loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg=loadImage("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse4.png");
    mouse_running=loadAnimation("images/mouse2.png", "images/mouse3.png");
    backImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back=createSprite(500,400,30,30);
    back.addImage(backImg);

    cat=createSprite(950,600,30,30);
    cat.addImage(catImg);
    cat.addAnimation("sitting", catImg2);
    cat.addAnimation("running", cat_running);
    cat.scale=0.1;

    mouse=createSprite(50,600,30,30);
    mouse.addImage(mouseImg);
    mouse.addAnimation("sit", mouseImg2);
    mouse.addAnimation("run", mouse_running);
    mouse.scale=0.05;
}

function draw() {
    background(255);
    drawSprites();
    //Write condition here to evalute if tom and jerry collide
    cat.velocityX=0;
if (cat.x - mouse.x < (cat.width + mouse.width)/2){
    cat.changeAnimation("sitting", catImg2);
    mouse.changeAnimation("sit", mouseImg2);
}
if (keyDown("LEFT_ARROW")){
    keyPressed();
}
   
}


function keyPressed(){

    //For moving and changing animation write code here
    cat.velocityX=-3;
    cat.changeAnimation("running", cat_running);
    mouse.changeAnimation("run", mouse_running);
}
