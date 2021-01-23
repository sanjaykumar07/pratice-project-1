const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    
}

function setup() {
	createCanvas(1280 , 617);
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  Box1 = new box(400,400,50,50,PI/2);
  Box2 = new box(440,300,50,50,PI/2);
  Ground = new ground(400,605,1790,10);
  
}

  


function draw() {
  background(0)




  Box1.display();
  Box2.display();
  Ground.display();
  drawSprites();
}

