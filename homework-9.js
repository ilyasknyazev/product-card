// lvl 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter(number => number >= 5);

console.log("Исходный массив:", numbers);
console.log("Массив начиная с 5:", numbersFromFive);

const books = [
    "Евгений Онегин",
    "Преступление и наказание",
    "Война и мир",
    "Анна Каренина",
    "Метель"
];

const bookExists = books.includes("Война и мир");

console.log("Исходный массив книг:", books);
console.log("Существует ли книга 'Война и мир'?", bookExists);

const reverseArray = (arr) => {
    return arr.reverse();
};

console.log("Перевернутый массив чисел:", reverseArray(numbers));
console.log("Перевернутый массив книг:", reverseArray(books));

// lvl 2