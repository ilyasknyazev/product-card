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
    car.maxSpeed = 180;
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
    title: 'Евгений Онегин',
    author: 'Александр Пушкин',
    releaseYear: 1833,
    coverColor: 'Синий',
    genre: 'Роман в стихах'
  },
  {
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    releaseYear: 1866,
    coverColor: 'Чёрный',
    genre: 'Психологический роман'
  },
  {
    title: 'Война и мир',
    author: 'Лев Толстой',
    releaseYear: 1869,
    coverColor: 'Красный',
    genre: 'Роман-эпопея'
  },
  {
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    releaseYear: 1877,
    coverColor: 'Золотой',
    genre: 'Роман'
  },
  {
    title: 'Метель',
    author: 'Александр Пушкин',
    releaseYear: 1831,
    coverColor: 'Серый',
    genre: 'Повесть'
  }
];

books.push({
  title: 'Мастер и Маргарита',
  author: 'Михаил Булгаков',
  releaseYear: 1967,
  coverColor: 'Красный',
  genre: 'Роман'
});

console.log(books);

const dostoevskyBooks = [
  {
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    releaseYear: 1866,
    coverColor: 'Чёрный',
    genre: 'Психологический роман'
  },
  {
    title: 'Идиот',
    author: 'Фёдор Достоевский',
    releaseYear: 1868,
    coverColor: 'Зелёный',
    genre: 'Роман'
  },
  {
    title: 'Бесы',
    author: 'Фёдор Достоевский',
    releaseYear: 1872,
    coverColor: 'Синий',
    genre: 'Роман'
  }
];

const allBooks = [...books, ...dostoevskyBooks];
console.log(allBooks);

function setRareStatus(books) {
  books.forEach((book) => {
    book.isRare = book.releaseYear > 2000;
  });
}

setRareStatus(dostoevskyBooks);
console.log(dostoevskyBooks);