/*
// Tipos básicos
const username = 'Isa'
const age: number = 28;
console.log(username, 'nombre de usuario'); // Imprime el nombre de usuario
console.log("La edad de", username, "es", age); // Imprime la edad del usuario

// Ejemplo de string
const cat: string = 'Milo';
console.log(cat, "nombre del gato"); // Imprime el nombre del gato
console.log("El gato", cat, "es de", username); // Imprime una frase con el nombre del gato y del usuario

// Ejemplo de number
let contNumber: number = 0;
contNumber = 100;
console.log("El número final es:", contNumber); // Imprime el número final

// Boolean
// Ejemplo de boolean
const isActive: boolean = true;
console.log("¿Está haciendo calor?", isActive); // Imprime si está haciendo calor

// Ejemplo de boolean 2
const actions: boolean = false;
console.log("¿La clase es entretenida?", actions); // Imprime si la clase es entretenida

// Any
// Ejemplo
const data: any = "miauu";
const time: number = 2;
console.log("El gato", cat, "dice", data, "a las", time); // Imprime lo que dice el gato y la hora

// Ejemplo de any 2
const example: any = 10;
console.log('Vamos a ir al río con', example, 'amigos y también va´, username); // Imprime una frase con el número de amigos y el nombre del usuario

// Array
const products: number[] = [7, 8, 9, 6, 1];
const invoices: string[] = ["pago matrícula", "pago producto"];
const stores: number[] = [1, 2, 3, 4, 5, 6];
const coin: string[] = ["name", "hello", "status"];
const peopleOne: any[] = ["any", 1, true, { id: 1, name: "brayan" }];

// Diferencias de const y let en array
const coins: any[] = [
  {
    id: 1,
    name: 'Dólar',
    code: '$',
  },
];

coins.push({
  id: 2,
  name: 'Euro',
  code: '€',
});
console.log(coins); // Imprime el array de monedas con el nuevo elemento añadido

// Tuplas: array especial con número fijo de elementos y posiciones definidas
const dateOne: [string, number] = ['cadena', 1];
console.log(dateOne); // Imprime la tupla

// Enum: constante, fácil de mantener y no quemar código
enum Color { Rojo, Verde, Azul }
let c: Color = Color.Verde;
console.log(Color[1]); // Imprime 'Verde'

enum Day { Lunes = 1, Martes, Miércoles }
let day: Day = Day.Miércoles;
console.log(day, 'día'); // Imprime 3 'día'

enum Week {
  id = 1,
  tipo,
  product
}
let week: Week = Week.product;
console.log(week, 'día'); // Imprime 3 'día'

// Void
function saludar(): void {
  const aux: number[] = [1, 2, 3, 4];
  let sum = 0;
  for (let i = 0; i < aux.length; i++) {
    sum += aux[i];
  }
  console.log('Hola'); // Imprime 'Hola'
}

function llegada(): boolean {
  const name: boolean = true;
  return name; // Devuelve true
}

// Objetos
// Tipar los campos y datos del objeto
const car: { make: string, model: string, year: number } = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
};
console.log(car); // Imprime el objeto car

// Sin tipado se quita la primera llave
const animals: { name: string, age: number, status: boolean } = {
  name: 'Rex',
  age: 5,
  status: false
};
console.log(animals); // Imprime el objeto animals

// Null y undefined
let nothing: any = null; // Valor por defecto que se puede cambiar
nothing = 'Hello';
console.log(nothing); // Imprime 'Hello'

let notDefined: undefined = undefined;
console.log(notDefined); // Imprime undefined

// Manipulación de Arrays

// Declaración de un array de strings
const stringOne: string[] = ['1', '2', '3', '4'];

// Añadir elementos
stringOne.push('5'); // Añade '5' al final del array
console.log(stringOne); // ['1', '2', '3', '4', '5']

// Eliminar elementos
stringOne.pop(); // Elimina el último elemento
console.log(stringOne); // ['1', '2', '3', '4']

// Encontrar el índice de un elemento
const index = stringOne.indexOf('3'); // 2
console.log(index, 'index'); // 2 'index'

// Extraer una parte del array
const sliced = stringOne.slice(1, 4); // ['2', '3', '4']
console.log(sliced, 'sliced'); // ['2', '3', '4'] 'sliced'

// Usar map para transformar los elementos
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num); // [1, 4, 9, 16, 25]
console.log(squares, 'squares'); // [1, 4, 9, 16, 25] 'squares'

// Usar filter para seleccionar elementos
const evenNumbers = numbers.filter((num) => num % 2 === 0); // [2, 4]
console.log(evenNumbers, 'evenNumbers'); // [2, 4] 'evenNumbers'

// Cadena de texto separada por espacios
const sentence: string = 'Hello world TypeScript is great';

// Dividir la cadena en un array de palabras
const words: string[] = sentence.split(' ');
console.log(words, 'words'); // ["Hello", "world", "TypeScript", "is", "great"] 'words'

// Unir un array de palabras en una sola cadena
const joinedSentence: string = words.join(' ');
console.log(joinedSentence, 'joinedSentence'); // "Hello world TypeScript is great" 'joinedSentence'

// Unir un array con un separador personalizado
const csv: string = words.join(',');
console.log(csv, 'csv'); // "Hello,world,TypeScript,is,great" 'csv'

// Buscar un elemento en el array que cumpla una condición
const numbersTwo: number[] = [10, 20, 30, 40, 50];

// Encontrar el primer número mayor que 25
const foundNumber: number | undefined = numbersTwo.find((num) => num > 25);
console.log(foundNumber, 'foundNumber'); // 30 'foundNumber'

// Encontrar el índice del primer número mayor que 25
const foundIndex: number = numbersTwo.findIndex((num) => num > 25);
console.log(foundIndex, 'foundIndex'); // 2 'foundIndex'

// Verificar si todos los números son mayores que 0
const allPositive: boolean = numbersTwo.every((num) => num > 0);
console.log(allPositive, 'allPositive'); // true 'allPositive'

// Verificar si algún número es mayor que 40
const someGreaterThan40: boolean = numbersTwo.some((num) => num > 40);
console.log(someGreaterThan40, 'someGreaterThan40'); // true 'someGreaterThan40'

// Arrays para combinar
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const combinedArray: number[] = array1.concat(array2);
console.log(combinedArray, 'combinedArray'); // [1, 2, 3, 4, 5, 6] 'combinedArray'
*/
