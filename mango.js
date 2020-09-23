class mango {
    constructor(x, y, r) {
      var options = {
          isStatic:true,
          'restitution':0.2,
    }
    this.x=x;
	  this.y=y;
	  this.r=r;
	  this.body=Bodies.circle(this.x, this.y, this.r, options);
    this.image = loadImage("mango.png");  
      World.add(world, this.body);
    }
    
	display(){
		
	var mangoPos = this.body.position;		
	push()
  translate(mangoPos.x, mangoPos.y);
  rotate(this.body);
	imageMode(CENTER);
	image(this.image,0,0,this.r*2,this.r*2);
	//ellipse(0,0,this.r,this.r);
    pop();
  }
};