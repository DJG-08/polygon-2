const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ground,pics,polygon,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,slingshot


function preload(){
 pics = loadImage ("polygon.png");
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
polygon = Bodies.circle(50,200,20)



World.add(world,polygon);
 slingshot = new SlingShot (this.polygon,{x:100,y:200})
  ground = new Ground (400,350,800,10)
  stand = new Ground (465,325,300,10)
  box1 = new Box (530,250,30,40)
  box2 = new Box (500,275,30,40)
  box3 = new Box (530,275,30,40)
  box4 = new Box (570,275,30,40)
  box5 = new Box (530,200,30,40)
  box6 = new Box (480,300,30,40)
  box7 = new Box (510,300,30,40)
  box8 = new Box (540,300,30,40)
  box9 = new Box (570,300,30,40)
  box10 = new Box (600,300,30,40)
 

  Engine.update(engine);
}

function draw() {
  
  background("blue");  
  imageMode(CENTER)
  image(pics,polygon.position.x,polygon.position.y,40,40)
  ground.display();                        
  slingshot.display();
  stand.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
      slingshot.attach(bird.body)
  }
}