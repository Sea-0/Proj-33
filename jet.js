class Jet {
    constructor(x, y,width,height) {
      var options = {
          restitution:1,
          friction:1,
          density:1.0,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width
      this.height = height

      this.image=loadImage("pew pew.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;



        if(jet.body.position.x>=300 || jet.body.position.x<=0){
          jet.body.position.x=200
        }
      push();
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height)
 
      pop();
  
    }
  };