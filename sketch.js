
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone1;
function preload()
{
	boy=loadImage("boy.png")
	tree=loadImage("tree.png")
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	stone1=new Stone(200,200);
	var rope={
		bodyA:stone1.body,
		pointB:{x:150,y:500},
		stiffness:0.04,
		length:20
	}
  c=Constraint.create(rope);
  World.add(world,c)
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(tree,600,450,200,400)
  image(boy,100,450,200,300)
  stone1.display();
  
  drawSprites();
 
}



