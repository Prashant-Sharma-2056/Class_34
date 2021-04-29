const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //creating ground
    ground = new Ground(600, 350, 1200, 25);

    //creating blocks
    block1 = new Box(900, 320, 50, 50);
    block2 = new Box(950, 320, 50, 50);
    block3 = new Box(1000, 320, 50, 50);
    block4 = new Box(1050, 320, 50, 50);
    block5 = new Box(1100, 320, 50, 50);
    block6 = new Box(1150, 320, 50, 50);

    block7 = new Box(925, 290, 50, 50);
    block8 = new Box(975, 290, 50, 50);
    block9 = new Box(1025, 290, 50, 50);
    block10 = new Box(1075, 290, 50, 50);
    block11 = new Box(1125, 290, 50, 50);

    block12 = new Box(950, 260, 50, 50);
    block13 = new Box(1000, 260, 50, 50);
    block14 = new Box(1050, 260, 50, 50);
    block15 = new Box(1100, 260, 50, 50);

    block16 = new Box(975, 230, 50, 50);
    block17 = new Box(1025, 230, 50, 50);
    block18 = new Box(1075, 230, 50, 50);

    block19 = new Box(1000, 200, 50, 50);
    block20 = new Box(1050, 200, 50, 50);

    block21 = new Box(1025, 170, 50, 50);

    // creating ball
    ball = new Ball(200, 200, 60, 60);

    rope = new SlingShot(ball.body, {x:700, y:50})


   
}

function draw(){
 background(0);
    
    Engine.update(engine);

    ground.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

    block12.display();
    block13.display();
    block14.display();
    block15.display();

    block16.display();
    block17.display();
    block18.display();

    block19.display();
    block20.display();

    block21.display();

    ball.display();
    rope.display();

}


function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


