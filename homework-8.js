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

function showPropertyValue(object, property) {
  return object[property];
}

console.log(showPropertyValue(car, 'brand'));

const products = ['Ноутбук', 'Смартфон', 'Наушники', 'Монитор'];
console.log(products);

const books = [
  {
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    releaseYear: 1967,
    coverColor: 'Красный',
    genre: 'Роман'
  },
  {
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    releaseYear: 1866,
    coverColor: 'Чёрный',
    genre: 'Психологический роман'
  },
  {
    title: '1984',
    author: 'Джордж Оруэлл',
    releaseYear: 1949,
    coverColor: 'Синий',
    genre: 'Антиутопия'
  },
  {
    title: 'Гарри Поттер и философский камень',
    author: 'Джоан Роулинг',
    releaseYear: 1997,
    coverColor: 'Зелёный',
    genre: 'Фэнтези'
  },
  {
    title: 'Маленький принц',
    author: 'Антуан де Сент-Экзюпери',
    releaseYear: 1943,
    coverColor: 'Жёлтый',
    genre: 'Сказка'
  }
];

books.push({
  title: 'Три товарища',
  author: 'Эрих Мария Ремарк',
  releaseYear: 1936,
  coverColor: 'Серый',
  genre: 'Роман'
});

console.log(books);

