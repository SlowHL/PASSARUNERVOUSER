class Restricao {
    constructor(bodyA, bodyB ) {
        var options = {
            bodyA: bodyA, 
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10     
            }
           this.restricao = Constraint.create(options)
            World.add(world, this.restricao) 
    }
    display(){
        strokeWeight(3)
        line(this.restricao.bodyA.position.x,this.restricao.bodyA.position.y,this.restricao.bodyB.position.x,this.restricao.bodyB.position.y)
    }
  };