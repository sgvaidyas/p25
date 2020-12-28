
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  manimg=loadImage("man.png");
  dustbinimg=loadImage("dustbin.png");
  cleanimg=loadImage("clean world.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  cleanup=createSprite(450,200,50,50);
  cleanup.addImage(cleanimg);
  cleanup.scale=0.2;
  cleanup.visible=false;

  paper= new Paper(80,200)
  paper2= new Paper(150,200)
  
  ground= new Ground(300,430,1000,20)
  
  dustbin1= new Dustbin(621,370,20,80)
  dustbin2= new Dustbin(739,370,20,80)
  dustbin3= new Box(680,370,100,100)

  Dustbin1= new Dustbin(481,370,20,80)
  Dustbin2= new Dustbin(599,370,20,80)
  Dustbin3= new Box2(540,370,100,100)
 

 var options = {
   
  isStatic:true
}
man=createSprite(250,350,20,5,options);
man.addImage(manimg);

man2=createSprite(130,350,20,5,options);
man2.addImage(manimg);


  invisible=new Ground(80,280,20,20);
  invisible.visible=true;
  

  invisible2=new Ground(150,280,20,20);
  invisible2.visible=true;
  
 
  
 
  //box=createSprite(680,370,50,50);
  //box.addImage(dustbinimg);
 
 
	Engine.run(engine);
  
}


function draw() {
 // background="blue";
 // Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("cyan");
 
 //invisible2.display() 
  ground.display();
  
  
  //dustbin1.display();
  //dustbin2.display();
  dustbin3.display();
  Dustbin3.display();
  //paper.display();
 if(paper.body.position.x>=dustbin3.body.position.x-50 && paper.body.position.x<=dustbin3.body.position.x+50 ){
  paper.body.restitution=0;
  paper.body.isStatic="true";
  dustbin3.body.restitution=0;
  dustbin3.body.isStatic="true";
 
 
   stroke("green");
    fill("green");
    textSize(30);
    text("THANK YOU",370,140);
 cleanup.visible=true;
}
else{
 paper.display();
 
 
}


if(paper2.body.position.x>=Dustbin3.body.position.x-50 && paper2.body.position.x<=Dustbin3.body.position.x+50 ){
  paper2.body.restitution=0;
  paper2.body.isStatic="true";
  Dustbin3.body.restitution=0;
  Dustbin3.body.isStatic="true";
}
else{
  paper2.display();

  
 

}
drawSprites();
}

