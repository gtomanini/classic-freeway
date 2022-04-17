// let freeway;
// let actor
// let car 




// function preload(){
//     freeway = loadImage("images/freeway.png")
//     actor = loadImage('images/SnowMan.png')
//     car = loadImage('images/car.png')
// }

function setup() {
    createCanvas(500, 400)
}


function draw() {
  background(freeway);
  showActor();
  showCars();
  moveCars();
  moveActor();
  backInitialCarPosition()
  checkCollision()
  addPoint()
}


  

  
