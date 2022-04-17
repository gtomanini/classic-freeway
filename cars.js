// let xCar = 600;
// let yCar = 40


let xCars = [600, 600, 600, 600, 600]
let yCars = [40, 96, 150, 200, 250]
let carsSpeed = [2, 3, 2.5, 1.75, 3.2]
let carWidth = 50;
let carHeight = 40;
let carImage1
let carImage2
let carImage3


// let xCar2 = 600
// let yCar2 = 96
// let car2Speed = 3

// let xCar3 = 600
// let yCar3 = 150
// let car3Speed = 2.5


function showCars(){

    carImage1 = image(car, xCars[0], yCars[0], carWidth, carHeight);
    carImage2 =  image(car2, xCars[1], yCars[1], carWidth, carHeight)
    carImage3 = image(car3, xCars[2], yCars[2], carWidth, carHeight)

  }
  
  function moveCars(){
    // for(let i = 0; carsImages.length; i = i +1){
      // carsImages[i], xCars[i], yCars[i], 50;
      // xCars[i] -= carsSpeed[i]
    // }
    xCars[0] -= carsSpeed[0]
    // xCar -= carSpeed
    xCars[1] -= carsSpeed[1]
    xCars[2] -= carsSpeed[2]
  }

  function backInitialCarPosition(){
    if(xCars[0] < -30){
    xCars[0]= 600
    }
    if(xCars[1] < -30){
      xCars[1]=600
    }
    if(xCars[2] < -30){
      xCars[2] = 600
    }
}

