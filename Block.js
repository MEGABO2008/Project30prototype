class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.8
           
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.visiblity =255;

        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(135,206,234);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      
      if(this.body.speed<3){
        super.display();
          }
          else{
        World.remove(world,this.body);
        push();
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
        
          }
}
}
