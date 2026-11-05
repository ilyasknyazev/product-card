class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создать экземпляр абстрактного класса 'Drink'!");
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Напиток ${this.name}\n Размер ${this.size}\n Цена ${this.price}\n Температура ${this.getTemperature()} C`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
    console.log(`Установка температуры ${this.name}: ${temperature}`);
  }

  #prepare() {
    console.log(`Начинаем приготовление ${this.name}`);

    this._make();

    console.log(`Приготовление завершено ${this.name}`);
  }

  _make() {
    throw new Error("Метод должен быть переопределён наследниками");
  }

  serve() {
    console.log(`Готовим ${this.name} к подаче`);

    this.#prepare();

    console.log(`${this.name} подан, температура ${this.getTemperature()} C`);
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  _make() {
    console.log(`Используем зерна ${this.beanType}`);
    console.log(`Используем молоко ${this.milkType}`);
    this.setTemperature(75);
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }

  _make() {
    console.log(`Используем чай ${this.teaType}`);
    this.setTemperature(65);
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor) {
    super(name, size, price, temperature);
    this.flavor = flavor;
  }

  _make() {
    console.log(`Испольуем сироп ${this.flavor}`);
    console.log("Добавляем лед");
    this.setTemperature(7);
  }
}

class Cacao extends Drink {
  constructor(name, size, price, temperature, cacaoType) {
    super(name, size, price, temperature);
    this.cacaoType = cacaoType;
  }

  _make() {
    console.log(`Используем сорт какао ${this.cacaoType}`);
    this.setTemperature(60);
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    console.log("Информация о кафе");
    return `${this.name}, ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Заказ ${drink.name} кафе ${this.name}`);
    drink.serve();
    console.log(`Стоимость заказа составляет: ${drink.price}`);
  }
}

const cafe = new Cafe("Косолапый", "Омск, ул. Медвежья 12");

console.log(cafe.getInfo());

const coffee = new Coffee("Капучино", "Средний", 220, 20, "Арабика", "Овсяное");
const tea = new Tea("Зелёный чай", "Большой", 150, 20, "Сенча");
const lemonade = new Lemonade("Лимонад", "Большой", 130, 15, "Лимон");
const cacao = new Cacao("Какао", "Средний", 120, 20, "Криолло");

console.log(coffee.getInfo());

cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);
cafe.orderDrink(cacao);
