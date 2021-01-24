class Chain {
constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.05,
        length:10
    }

    this.con=Constraint.create(options)
   World.add(world,this.con)
    
    
}
display(){
var PointA=this.con.bodyA.position;
var PointB=this.con.bodyB.position;
 strokeWeight(4)
  line (PointA.x,PointA.y,PointB.x,PointB.y );      
    }



}