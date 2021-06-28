class   Stone {
	constructor(x,y)
	{
		var options = {
			'density':10,
			'friction': 0.9,
			'restitution':0.8
		  };
          this.body = Bodies.rectangle(x, y, 50, 50, options);
          this.width = 50;
          this.height = 90;
          World.add(world, this.body);
        };
    display(){
        var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			strokeWeight(4);
			stroke("black");
			fill("red");
            rectMode(CENTER)
            rect(0, 0, this.width, this.height);
			pop()
	}


}