class Figure {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    calcDistance() {
        return Math.sqrt(Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2));
    }

    calcOfSquare() {
        return 0;
    }
}

class Circle extends Figure {
    calcOfSquare() {
        const d = this.calcDistance();
        return (Math.PI * Math.pow(d, 2)) / 4;
    }
}

class Rectangle extends Figure {
    calcOfSquare() {
        return Math.abs(this.x2 - this.x1) * Math.abs(this.y2 - this.y1); 
    }
}

class Triangle extends Figure {
    constructor(x1, y1, x2, y2, x3, y3) {
        super(x1, y1, x2, y2);
        this.x3 = x3;
        this.y3 = y3;
    }

    calcOfSquare() {
        return Math.abs(
            this.x1 * (this.y2 - this.y3) +
            this.x2 * (this.y3 - this.y1) +
            this.x3 * (this.y1 - this.y2)
        ) / 2;
    }
}

const circle = new Circle(0, 0, 0, 10);
const rectangle = new Rectangle(1, 2, 5, 8);
const triangle = new Triangle(0, 0, 4, 0, 0, 3);

console.log(circle.calcDistance());
console.log(circle.calcOfSquare());

console.log(rectangle.calcOfSquare());

console.log(triangle.calcOfSquare());