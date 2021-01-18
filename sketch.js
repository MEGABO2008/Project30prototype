const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var polygon,polygon_img;
var slingShot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;






function setup(){
var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

polygon = Bodies.circle(150,200,20);
    World.add(world,polygon);
    polygon_img=loadImage("polygon.png");


ground1 = new Ground(200,400,5000,30);
ground2 = new Ground(800,225,210,12);
ground3 = new Ground(400,310,270,12);


slingShot = new Slingshot (this.polygon, {x:150,y:200});

block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);

block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);

block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);

block16 = new Block(390,155,30,40);

block17 = new Block(740,205,30,40);
block18 = new Block(770,205,30,40)
block19 = new Block(800,205,30,40)
block20 = new Block(830,205,30,40)
block21 = new Block(860,205,30,40);

block22 = new Block(770,165,30,40)
block23 = new Block(800,165,30,40)
block24 = new Block(830,165,30,40)

block25 = new Block(800,125,30,40);

}

function draw(){
    background(56,44,44);
    Engine.update(engine);

 

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
        block22.display();
        block23.display();
        block24.display();
        block25.display();
    
    

ground1.display();
ground2.display();
ground3.display();
slingShot.display();








fill("white");
    textSize(24);
    text("Drag the polygon to destroy the blocks",300,30)
    textSize(16);
    text("Press Space to get a second Chance to Play!!", 730,370);


    fill("gold");
    imageMode(CENTER);
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();


}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}