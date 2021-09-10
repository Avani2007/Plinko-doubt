class Starclass{
    constructor(x, y, radius) {
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius
        this.image = loadImage("star.png");
        World.add(world, this.body);
      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}