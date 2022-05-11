var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;


var jet;
var mine=[];
var border
var score = 0
var gameState="flying";

function setup() {
  createCanvas(300, 800);
  engine = Engine.create();
  world = engine.world;

  jet = new Jet(200,750,100,100)


}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
    Engine.update(engine);


if(gameState==="flying"){
if(frameCount%70===0){
  mine.push(new Mine(random(20,380),50,50,50))

}}
if(gameState==="end"){
  text("Game Over",50,400)
}
console.log(mine)
for (var l = 0; l < mine.length; l++){
  mine[l].display();
}



if(jet.body.position.x>=300 || jet.body.position.x<=0){
  jet.body.position.x=200
}


if(keyIsDown(RIGHT_ARROW)){
jet.body.position.x = jet.body.position.x+10
}
if(keyIsDown(LEFT_ARROW)){
  jet.body.position.x = jet.body.position.x-10
}
jet.display();
  Collision();
}
function Collision(i){
  for(var i = 0 ; i < mine.length ; i++){
    if(mine[i] !== undefined){
    var collision = Matter.SAT.collides(mine[i].body,jet.body)
    }if(collision.collided){
      gameState="end";
  
    }
    
  }
}
