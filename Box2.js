class Box2  {
    constructor(x, y, width, height) {
      var options = {
         
          isStatic:false
          
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbin 2.png");
      World.add(world, this.body);
    }
   
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
       
        image(this.image,pos.x, pos.y, this.width, this.height);
      }
    }
  