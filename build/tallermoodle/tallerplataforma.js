let age = 19;
console.log(age, 'age');
let name1 = 'Isa';
console.log(name1, 'name1');
let box = null;
console.log(box, 'box');
let car = undefined;
console.log(car, 'car');
let state = true;
console.log(state, 'state');
function calArea(base, height) {
    return base * height;
}
const base = 4;
const height = 6;
const result = calArea(base, height);
console.log('El resultado del área es', result);
class Car {
    constructor(make, model, color, brand, plate) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.brand = brand;
        this.plate = plate;
    }
    printInformation() {
        console.log(`El carro fue creado en ${this.make}, el modelo es ${this.model}, el color es ${this.color}, la marca es ${this.brand}, y la placa es ${this.plate}.`);
    }
}
const infoCar = new Car('China', 2010, 'blue', 'Toyota', '21F32Q');
infoCar.printInformation();
class Rectangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    calArea2() {
        return this.base * this.height;
    }
}
const rectangle = new Rectangle(3, 5);
console.log('El área del rectángulo es', rectangle.calArea2());
const books = [
    {
        title: 'Orgullo y Prejuicio',
        author: 'Jane Austen',
        year: 30
    },
    {
        title: 'Vitaminas para el espíritu',
        author: 'Humberto A. Agudelo C.',
        year: 40
    },
    {
        title: 'El Principito',
        author: 'Humberto A. Agudelo C.',
        year: 56
    }
];
const filterAuthor = books.filter(book => book.author === 'Humberto A. Agudelo C.');
console.log('El resultado del autor buscado es', filterAuthor);
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    findBook(author) {
        return this.books.filter(book => book.author === author);
    }
}
const library = new Library();
library.addBook({ title: "Clean Code", author: "Robert C. Martin", year: 2008 });
library.addBook({ title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 });
library.addBook({ title: "Design Patterns", author: "Erich Gamma", year: 1994 });
library.addBook({ title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 });
const robertMartinBooks = library.findBook("Robert C. Martin");
console.log("Libros de Robert C. Martin:", robertMartinBooks);
let addition = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        addition += i;
    }
}
console.log('la suma de los pares es ', addition);
let addOdd = 0;
let num = 1;
while (num <= 30) {
    if (num % 2 !== 0) {
        addOdd++;
    }
    num++;
}
console.log('la suma de los impares es ', addOdd);
function isCousin(num) {
    if (num <= 2)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log('los numeros primos son ');
for (let i = 1; i < 100; i++) {
    if (isCousin(i)) {
        console.log(i);
    }
}
//# sourceMappingURL=tallerplataforma.js.map