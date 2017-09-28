function getNewCar() {
  city: 'Toronto',
  passengers: 0,
  gas: 100
}

function addCar(cars, newCars) {
  cars.push(newCars)
}

function pickUpPassenger(car) {
  car[passengers] ++;
  car[gas] -= 10;
  console.log('picked up passenger. car now has ' + passengers + ' passengers');
}

function getDestination(car) {
  if (car.city === 'Toronto') {
    return 'Mississauga'
  }
  else if (car.city === 'Mississauga') {
    return 'London'
  }
  else if (car.city == 'London') {
    return 'Toronto'
  }
}

function fillUpGas(car) {
  var oldGas = car.gas;
  car.gas = 100;
  console.log('filled up to ' + getGasDisplay(car.gas) + 'on gas from ' + getGasDisplay(oldGas));
}

function getGasDisplay(gasAmount) {
  console.log(gasAmount + '%');
}

function drive(car, city_distance) {
  if (car.gas < cityDistance) {
    return fillUpGas(car)
  }
  car.city = getDestination(car);
  car.gas -= cityDistance;
  console.log('drove to ' + car.city '. remaining gas: ' + getGasDisplay(car.gas));
}

function dropOffPassengers(car) {
  var previousPassengers = car.passengers;
  car.passengers = 0
  console.log('dropped off ' + previousPassengers + 'passengers');
}

function act(car) {
  var distanceBetweenCities = 50;
  if (car.gas < 20) {
    fillUpGas(car)
  }
  else if (car.passengers < 3) {
    pickUpPassenger(car)
  }
  else {
    if (car.gas < distanceBetweenCities) {
      return fillUpGas(car)
    }
    var droveTo = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassengers(car);
    return console.log(droveTo + passengersDropped);
  }
}

function commandFleet(cars) {
  for (var i = 0; i < cars.length; i++) {
    var action = act(car);
    console.log('car ' + i + 1 + ": " + action);
  }
  console.log('---');
}


function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i < numDays; i++) {
    var newCar = getNewCar;
    console.log(addCar(cars, newCar));
    commandFleet(cars)
  }
}



var cars = []
addOneCarPerDay(cars, 10)
