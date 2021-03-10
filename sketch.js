
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    pObj= new Paper(100,100,80)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  pObj.display()
  groundObject.display();
  dustbinObj.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(pObj.body, pObj.body.position, {x:1600 , y:-1500})
	}
}