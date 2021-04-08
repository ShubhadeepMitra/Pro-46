//making variables
var target,line1,line2,target_img,arrow_img,dart;

//loading images in function preload
function preload(){
  target_img = loadImage("pic.png");
  arrow_img = loadImage("arrow.png");
  }

//defining the variables
function setup() {
  createCanvas(600,600);

  //creating line 1
  line1=createSprite(200,200,600,5);
  line1.shapeColor="red";
  line1.velocityY=5;
  

  //creating line 2
  line2=createSprite(200,200,5,600);
  line2.shapeColor="blue";
  line2.velocityX=5;

  //creating the target sprite
  target=createSprite(300,300,10,10);
  //giving random velocity
  target.velocityX=random(-5,10);
  target.velocityY=random(-5,10);
  //adding the image
  target.addImage(target_img);
  //setting the size
  target.scale=0.3;
  //setting the collider radius
  target.setCollider("circle",0,0,50);
  
  //creating the dart group
  dartGroup=createGroup();

  score=0;

}


function draw() {
  //making the background
  background(70,218,109);
  
  dart();

  //stopping line 1 from moving by pressing up key
  if(keyDown("up")){
    line1.velocityY=0;
  }

  //target.debug=true;
 

  line1.depth=target.depth+1;
  line2.depth=target.depth+1;
  //stopping line 2 from moving by pressing down key
  if(keyDown("down")){
    line2.velocityX=0;
  }
  //making the edge sprites
  edges=createEdgeSprites();

  //making the line 1,2 and the target bounce fram the edges
  line1.bounceOff(edges);
  line2.bounceOff(edges);
  target.bounceOff(edges);
  
  drawSprites();
  //making and desigining the score and it's color
  fill("red")
  textSize(25)
  text("Score: "+score,10,20)
}
//making the function dart
function dart(){
  //creating the sprite of dart when "space" pressed
  if(keyDown("space")){
    darts=createSprite(line1.y,line2.x,5,5);
    //adding the image of dart
  darts.addImage(arrow_img);
  //creating the group of dart
  dartGroup.add(darts);
  //setting the sixe of darts
  darts.scale=1.2;

  //increasing the score when dart touches score
  if(darts.isTouching(target)){
    score=score+10
    }
  darts.lifetime=100;
  }
}