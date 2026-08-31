const display_temperature = (city, temp) => {
    console.log(`Сейчас в ${city} температура ${temp} градусов по Цельсию`);
};

display_temperature("Москва", 40);

const SPEED_OF_LIGHT = 299792458;

const compare_speed = (speed) => {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость");
    } else if (speed < SPEED_OF_LIGHT) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

compare_speed(1000);