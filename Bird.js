class Bird extends BaseClass{
    constructor(x, y) {
      super(x,y,50,50); 
      this.image=loadImage("sprites/bird.png");
      this.simage=loadImage("sprites/smoke.png"); 
      this.trajectory=[]; 
    };
    display(){
      if(this.body.position.x >200 && this.body.velocity.x >10){
      var pos = [this.body.position.x,this.body.position.y];
      this.trajectory.push(pos); 
      }
      for(var i=0;i<this.trajectory.length; i++){
        image(this.simage,this.trajectory[i][0],this.trajectory[i][1]); 
      }
      /*pos.x = mouseX;
      pos.y = mouseY;*/
      super.display(); 
    };
  };
  