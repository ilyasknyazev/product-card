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
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Black",
  transmission: "Automatic"
};

car.owner = user;
console.log(car);
console.log(car.owner.firstName);