let carArray = [];

function addCar(make, model, year, color) {
  if (!make || !model || !year || !color) {
    return false;
  }

  const newCar = { id: carArray.length + 1, make, model, year, color };
  carArray.push(newCar);
  return newCar;
}

function readCars() {
  return carArray;
}

// TODO: Implement updateCar(id, updatedDetails) function

function update(id, updatedDetails) {

  const car = carArray.find(p => p.id === id);
  if (!car) {
    return false;  // Car not found, can't update
  }

  // Update the Car's details
  Object.assign(car, updatedDetails);
  return car;
}


module.exports = { addCar, readCars, carArray };