class box{
    
    constructor(x,y,width,height,angle){
        
        var options = {
            'restitution':0.9,
            'friction':1.0,
            'density':1.0

        }
        this.body = Bodies.rectangle(x,y,width+5,height+5,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    

    display(){
        var angle = this.body.angle
        push ()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        stroke("white")
        strokeWeight(1)
        fill(0)
        rectMode(CENTER)
        rect(0,0,this.width,this.height);


       pop()
    }
    
}

