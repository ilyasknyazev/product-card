import { products, IMAGE_PATH } from "./products.js";

function getCardsCount() {
    const count = prompt("Сколько карточек отобразить? От 1 до 5");

    if (count >= 1 && count <= 5 && Number.isInteger(Number(count))) {
        return Number(count);
    }

    alert("Некорректное значение. Введите число от 1 до 5.");

    return getCardsCount();
}

function renderCards(products) {
    const productsContainer = document.querySelector(".products-list");
    const template = document.querySelector("#product-template");

    const cardsCount = getCardsCount();

    for (let i = 0; i < cardsCount; i++) {
        const card = template.content.cloneNode(true);

        const image = card.querySelector(".product-card__image");
        const use = card.querySelector(".product-card__use");
        const title = card.querySelector(".product-card__title");
        const description = card.querySelector(".product-card__description");
        const components = card.querySelector(".product-card__components");
        const price = card.querySelector(".product-card__price");

        image.src = `${IMAGE_PATH}${products[i].image}`;
        image.alt = `Товар ${products[i].title}`;

        use.textContent = products[i].use;
        title.textContent = products[i].title;
        description.textContent = products[i].description;
        price.textContent = `${products[i].price} ₽`;

        products[i].components.forEach(component => {
            const li = document.createElement("li");
            li.textContent = component;

            components.append(li);
        });

        productsContainer.append(card);
    }
}

renderCards(products);

const productsInfo = products.reduce((result, product) => {
    result.push({
        [product.title]: product.description
    });

    return result;
}, []);

console.log(productsInfo);