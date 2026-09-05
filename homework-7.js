const displayTemperature = (city, temp) => {
    return `Сейчас в ${city} температура ${temp} градусов по Цельсию`;
};

console.log(displayTemperature("Москва", 40));

const SPEED_OF_LIGHT = 299792458;

const compareSpeed = (speed) => {
    if (speed > SPEED_OF_LIGHT) {
        return "Сверхсветовая скорость";
    } else if (speed < SPEED_OF_LIGHT) {
        return "Субсветовая скорость";
    } else {
        return "Скорость света";
    }
}

console.log(compareSpeed(1000));

let product = "RTX 2060";
let price = 13900;

const canPurchase = (current_budget) => {
    const result = current_budget >= price ? `${product} - приобретён` : `Вам не хватает ${price - current_budget} пополните баланс`;
    return result;
}

console.log(canPurchase(2000));