class tree {
    constructor(x,y)
    {
      this.x=x;
      this.y=y;
      this.treeWidth=450;
      this.treeHeight=350;
      this.wallThickness=10;
      this.image = loadImage("tree.png");	
      this.image.scale = 2;
      
      this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
      this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
      this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
      
      World.add(world, this.bottomBody)
      World.add(world, this.leftWallBody)
      World.add(world, this.rightWallBody);
  
    }
    display()
    {
        var posBottom = this.bottomBody.position;
        push()
        translate(posBottom.x, posBottom.y);
        imageMode(CENTER);
        image(this.image,0,0,this.treeWidth, this.treeHeight);
        pop()
        
    }
  
  }