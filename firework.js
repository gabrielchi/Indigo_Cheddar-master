class Firework{
  constructor(soundVel,R,G,B) {
  this.firework = new Particle(random(width), height,soundVel,R,G,B);
  }

  update() {
    this.firework.applyForce(gravity)
    this.firework.update()
  }

show(){
  this.firework.show();
}

}