const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
 
    ground = new Ground(600,height,1200,20);
    
    Paper = new Paper(700,320,70,70);
     
    Cup = new Cup(100,320,70,70);

    Slingshot = new SlingShot(bird.body,{x:200, y:100});

}
 
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    Cup.display();
    Paper.display();
}