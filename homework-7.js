const displayTemperature = (city, temp) => {
    console.log(`Сейчас в ${city} температура ${temp} градусов по Цельсию`);
};

displayTemperature("Москва", 40);

const SPEED_OF_LIGHT = 299792458;

const compareSpeed = (speed) => {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость");
    } else if (speed < SPEED_OF_LIGHT) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

compareSpeed(1000);

let product = "RTX 2060";
let price = 13900;

const canPurchase = (current_budget) => {
    let result = current_budget >= price ? `${product} - приобретён` : `Вам не хватает ${price - current_budget} пополните баланс`;
    console.log(result);
}

canPurchase(2000);