class Particle{
  constructor(x,y,soundVel,R,G,B){
  this.pos = createVector(x,y);
  this.vel = createVector(0,soundVel);
  //this.vel = p5.Vector.random2D();
  this.acc = createVector(0,0);
  this.R = R;
  this.G = G;
  this.B = B;
  
  }
  
  applyForce(force){
    this.acc.add(force);
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0)
  
}

  getRandomColor(){
    // this.randomCol = random(255);
    }

  show = function(colorVal){
    //fill(random(100,200),random(100,200),random(100,200));
    //stroke(colorVal,colorVal,colorVal);
  //strokeWeight(5)
    //point(this.pos.x, this.pos.y);
    fill(this.R,this.G,this.B,96);
    noStroke();
    //rect(this.pos.x,this.pos.y,15,40);
    circle(this.pos.x,this.pos.y,20,20);
    // beginShape();
    // vertex(this.pos.x,this.pos.y)
    // endShape();
    //point(this.pos.x,this.pos.y)
  }
}



class NewParticle{
  constructor(soundVel,R,G,B){
    this.pos = 
    createVector(random(width),random(height));
    this.vel = p5.Vector.random2D();
   // this.vel = createVector(0,soundVel);
    this.acc = createVector(0,0);
   // this.maxSpeed = soundVel;
   this.maxSpeed = 4;
    this.prevPos = this.pos.copy();
    this.R = R;
    this.G = G;
    this.B = B;
  }

  update(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
}

  follow(vectors){
    var x = floor(this.pos.x/scl);
    var y = floor(this.pos.y/scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force){
    this.acc.add(force);
  }

  show(){
    stroke(this.R,this.G,this.B);
    strokeWeight(5)
    line(this.pos.x,this.pos.y,this.prevPos.x,this.prevPos.y)
    this.updatePrev();
  }

  updatePrev(){
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
  edges(){
    if (this.pos.x > width ) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0 ) {
      this.pos.x = width;
       this.updatePrev();
    }
    if (this.pos.y > height ) {
      this.pos.y = 0;
       this.updatePrev();
    }
    if (this.pos.y < 0 ) {  
    this.pos.y = height;
       this.updatePrev();
  }
  }

}