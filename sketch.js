var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	rod1=createSprite(400,height-45,350,20,{isStatic:true})
	rod1.shapeColor=color(255,0,0);
	rod2=createSprite(230,height-105,20,150,{isStatic:true})
	rod2.shapeColor=color(255,0,0);
	rod3=createSprite(580,height-105,20,150,{isStatic:true})
	rod3.shapeColor=color(255,0,0,);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	var ground_options={
		isStatic:true
	}

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,ground_options );
	Matter.Body.setStatic
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if (keyCode === DOWN_ARROW) {
	bodyName= packageBody
    Matter.Body.setStatic(packageBody, false); 
	}

  drawSprites();
 
}




