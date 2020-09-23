
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var launcherObject1;
var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6;

function preload()
{
  person1 = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(width/2,370,width,20);

  treeObject = new tree(700,200);
  
  personSprite = createSprite(210,320);
  personSprite.addImage(person1);
  personSprite.scale = 0.07;
  
  mangoObject1 = new mango(750,50,15);
  mangoObject2 = new mango(605,125,20);
  mangoObject3 = new mango(665,200,20);
  mangoObject4 = new mango(710,130,15);
  mangoObject5 = new mango(780,130,20);
  mangoObject6 = new mango(625,60,15);

  stoneObj = new stone(175,275,30);
  launcherObject1 = new launcher(stoneObj.body,{x:175,y:275});

  Engine.run(engine);
  
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 800,
      height: 400,
      wireframes: false
    }
  });
}


function draw() {
  rectMode(CENTER);
  background(230);

  textSize(20);
  text("Press Space to get a second Chance to Play!",50 ,50);
  
  personSprite.display();
  stoneObj.display();

  ground.display();

  treeObject.display();


  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  mangoObject6.display();

  launcherObject1.display();
  detectCollision(stoneObj,mangoObject1);
  detectCollision(stoneObj,mangoObject2);
  detectCollision(stoneObj,mangoObject3);
  detectCollision(stoneObj,mangoObject4);
  detectCollision(stoneObj,mangoObject5);
  detectCollision(stoneObj,mangoObject6);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
	Matter.Body.setPosition(stoneObj.body,{x:175,y:275})
	launcherObject1.attach(stoneObj.body)
	}
}

function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance <= lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  launcherObject1.fly();
}


