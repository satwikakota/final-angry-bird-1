class Slingshot{
    constructor(body1,point2){
        var options= {
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:10
            
        }
        this.sling1=loadImage("sprites/sling1.png"); 
        this.sling2=loadImage("sprites/sling2.png"); 
        this.sling3=loadImage("sprites/sling3.png"); 
        this.slingshot= Constraint.create(options); 
        this.point2=point2
        World.add(world,this.slingshot); 
    }
    display(){
        image(this.sling1,200,22); 
        image(this.sling2,170,15); 
        
        if(this.slingshot.bodyA!=null){
            push()
            stroke("#301608"); 
            var posA= this.slingshot.bodyA.position;
            var posB= this.point2
            if(posA.x<220){
                strokeWeight(7); 
                line(posA.x-25,posA.y-3,posB.x-25, posB.y-3); 
                line(posA.x-25,posA.y,posB.x+30, posB.y-3); 
                image(this.sling3,posA.x-30,posA.y-10,15,30);
            }
            else{
                strokeWeight(3); 
                line(posA.x+25,posA.y-3,posB.x-25, posB.y-3); 
                line(posA.x+25,posA.y,posB.x+30, posB.y-3); 
                image(this.sling3,posA.x+30,posA.y-10,15,30); 
            }
            pop()
        }
    }
    fly(){
        this.slingshot.bodyA=null
    }
}