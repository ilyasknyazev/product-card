import { comments } from "./comments.js";
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
const commentsWithComEmail = comments.filter(comment => {
    return comment.email.includes(".com");
});

console.log("Комментарии с почтой .com:");
console.log(commentsWithComEmail);

const changedPostId = comments.map(comment => {
    if (comment.id <= 5) {
        return {
            ...comment,
            postId: 2
        };
    } else {
        return {
            ...comment,
            postId: 1
        };
    }
});

console.log("Измененный postId:");
console.log(changedPostId);

const commentsIdAndName = comments.map(comment => {
    return {
        id: comment.id,
        name: comment.name
    };
});

console.log("Только id и name:");
console.log(commentsIdAndName);