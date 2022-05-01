const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground,leftwall,rightwall,topwall;

var ball;
var button1, button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  button1=createImg("right.png");
  button1.position(220,30);
  button1.size(50,50);
  button1.mouseClicked(hforce);

  button2=createImg("up.png");
  button2.position(20,30);
  button2.size(50,50);
  button2.mouseClicked(vforce);


  ground = new Ground(200,390,400,20);
  rightwall = new Ground(390,200,20,400);
  leftwall = new Ground(10,200,20,400);
  topwall = new Ground(200,10,400,20);

  var ball_options = {
    restitution:0.95
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world, ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  ground.show();
  rightwall.show();
  leftwall.show();
  topwall.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}