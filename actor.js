let yActor = 366;
let xActor = 100
let collision = false;
let myScore = 0;

function showActor(){
    image(actor, xActor, yActor, 50, 50);
  }

  function moveActor(){
    if (keyIsDown(UP_ARROW)){
      yActor -= 3; 
    } 
    if (keyIsDown(DOWN_ARROW)){
      yActor += 3;
    }
  }

  function checkCollision(){
      collisionCar1 = collideRectCircle(xCars[0], yCars[0], carWidth, carHeight, xActor, yActor, 15)
      if (collisionCar1){
        restartActorPosition()
      }

      collisionCar2 = collideRectCircle(xCars[1], yCars[1], carWidth, carHeight, xActor, yActor, 15)
      if (collisionCar2){
        restartActorPosition()
      }

      collisionCar3 = collideRectCircle(xCars[2], yCars[2], carWidth, carHeight, xActor, yActor, 15)
      if (collisionCar3){
        restartActorPosition()
      }
  }

  function restartActorPosition(){
    yActor = 366;
  }

  function addScore(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60))
    text(myScore, width / 5, 27);
  }


  
  function addPoint(){
    if (yActor < 15){
      myScore += 1;
      restartActorPosition();
    }
  }