class Estilingue {
    constructor(bodyA, pointB ) {
        var options = {
            bodyA: bodyA, 
            pointB: pointB,
            stiffness: 0.04,
            length: 10     
            }
            this.estilingue1 = loadImage("sprites/sling1.png")
            this.estilingue2 = loadImage("sprites/sling2.png")
            this.estilingue3 = loadImage("sprites/sling3.png")
            this.pointB = pointB;
           this.estilingue = Constraint.create(options)
            World.add(world, this.estilingue) 
    }
    display(){
        image(this.estilingue1, 200,20)
        image(this.estilingue2, 170,20)
        if (this.estilingue.bodyA){
            push()
            
            stroke(48,22,8)
            if(this.estilingue.bodyA.position.x<220){
            strokeWeight(7)
            }else{
            strokeWeight(3)
            }
            line(this.estilingue.bodyA.position.x-20,this.estilingue.bodyA.position.y,this.pointB.x-10,this.pointB.y)
            line(this.estilingue.bodyA.position.x-20,this.estilingue.bodyA.position.y,this.pointB.x+30,this.pointB.y-3)
            image(this.estilingue3,this.estilingue.bodyA.position.x-30,this.estilingue.bodyA.position.y-10,15,30)
            pop()
        }   
    }
    fly() {
    this.estilingue.bodyA = null;  
    }
  };