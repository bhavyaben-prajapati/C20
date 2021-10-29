
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball
var ground
function setup()
{
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world

  var ball_options = {
    restitution: 1.2,
    frictionAir: 0.5
  }

  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
  console.log(ball)


  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,10,ground_options)
  World.add(world,ground)

  console.log(ground)
}

function draw() 
{
  background(51);
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)


  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)

}

