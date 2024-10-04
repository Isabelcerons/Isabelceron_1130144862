/*
Manipulación de Arrays
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

// Combinar arrays
const combinedArray: number[] = array1.concat(array2); // Combina array1 y array2 en un nuevo array
console.log(combinedArray, 'combinedArray'); // [1, 2, 3, 4, 5, 6] 'combinedArray'

const combineArrayPush = array1.push(...array2); // Añade los elementos de array2 al final de array1
console.log(combineArrayPush, 'combineArrayPush'); // Imprime la nueva longitud de array1
console.log(array1, 'array1'); // [1, 2, 3, 4, 5, 6] 'array1'

// Ordenar el array de números de menor a mayor
const unsortedNumbers: number[] = [5, 1, 4, 2, 3];
const sortedNumbers: number[] = unsortedNumbers.sort((a, b) => a - b);
console.log(sortedNumbers, 'sortedNumbers'); // [1, 2, 3, 4, 5] 'sortedNumbers'

// Ordenar el array de palabras en orden alfabético
const names: string[] = ['Charlie', 'Alice', 'Bob'];
const sortedNames: string[] = names.sort();
console.log(sortedNames, 'sortedNames'); // ["Alice", "Bob", "Charlie"] 'sortedNames'

// Invertir el orden de los elementos en el array
const reversedNumbers: number[] = sortedNumbers.reverse();
console.log(reversedNumbers, 'reversedNumbers'); // [5, 4, 3, 2, 1] 'reversedNumbers'

// Uso de includes para verificar la existencia de un elemento
const hasFour: boolean = numbersTwo.includes(4);
console.log(hasFour, 'hasFour'); // false 'hasFour'

*/
