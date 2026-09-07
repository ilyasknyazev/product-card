const user = {
  firstName: "Ilyas",
  lastName: "Knyazev",
  age: 24,
  email: "ilyas.knyazev@example.com",
  country: "Russia",
  city: "Omsk",
  work: "IT company",
  position: "Frontend developer",
  maritalStatus: "single",
  phone: "+7 900 123-45-67",
};

console.log(user);

const car = {
  brand: "Lada",
  model: "2109",
  year: 1994,
  color: "Red",
  transmission: "Manual",
};

car.owner = user;
console.log(car);
console.log(car.owner.firstName);

function addMaxSpeed(car) {
  if (car.maxSpeed === undefined) {
    car.maxSpeed = 200;
  } else {
    return;
  }
}

addMaxSpeed(car);
console.log(car);