class ground{
    constructor(x,y,width,height){
        var options = {isStatic : true};
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

        console.log(this.body.position.y)
    }

    display(){
        push ()
        translate(this.body.position.x,this.body.position.y)
        stroke("white")
        strokeWeight(1)
        fill(0)
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
       pop()
    }
}