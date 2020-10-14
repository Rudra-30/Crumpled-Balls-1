const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper;
var Ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


Paper = new paper(200,400,40);
Ground = Bodies.rectangle(800,680,1600,10,{isStatic:true});
World.add(world,Ground);


	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);	
  rectMode(CENTER);
  background(0);
  

  
  Paper.display();
  rect(800,680,1600,10);
}

function keyPressed() {
if(keyCode === UP_ARROW){
Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85})
}	
}

