class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создать экземпляр абстрактного класса 'Drink'!");
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.temperature = temperature;
  }

  getInfo() {
    return `Напиток ${this.name}\n Размер ${this.size}\n Цена ${this.price}\n Температура ${this.getTemperature()} C`;
  }

  getTemperature() {
    console.log(`Температура напитка ${this.name}`);
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
    console.log(`Установка температуры ${this.name}: ${this.temperature}`);
  }

  #prepare() {
    console.log(`Начинаем приготовление ${this.name}`);

    this._make();

    console.log(`Приготовление завершено ${this.name}`);
  }

  _make() {
    return 0;
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
    this.setTemperature(95);
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }

  _make() {
    console.log(`Используем чай ${this.teaType}`);
    this.setTemperature(90);
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
    this.setTemperature(80);
  }
}
