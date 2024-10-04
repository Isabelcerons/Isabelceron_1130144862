/* Manipulación de Arrays
// Declaración de un array de strings
const stringArray: string[] = ['1', '2', '3', '4'];
console.log(stringArray);

// Añadir elementos
stringArray.push('5'); // Añade '5' al final del array
console.log(stringArray); // ['1', '2', '3', '4', '5']

// Eliminar elementos
stringArray.pop(); // Elimina el último elemento
console.log(stringArray); // ['1', '2', '3', '4']

// Encontrar el índice de un elemento
const index = stringArray.indexOf('3'); // 2
console.log(index, 'index'); // 2 'index'

// Extraer una parte del array
const sliced = stringArray.slice(1, 4); // ['2', '3', '4']
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

// 1. Agregar y eliminar elementos en un array
const exampleArray: number[] = [3, 5, 7, 9];
exampleArray.push(11, 13); // Agrega 11 y 13 al final del array
console.log(exampleArray); // [3, 5, 7, 9, 11, 13]
exampleArray.pop(); // Elimina el último elemento
console.log(exampleArray); // [3, 5, 7, 9, 11]

// Encontrar el índice de elementos con indexOf()
const idx1 = exampleArray.indexOf(5); // Encuentra el índice de 5
console.log(idx1); // 1

// Extraer una porción del array usando slice()
const subArray = exampleArray.slice(1, 4); // Extrae desde el índice 1 hasta el 3
console.log(subArray); // [5, 7, 9]

// Verificar si todos los elementos son mayores que 2 con every()
const allGreaterThanTwo = exampleArray.every((num) => num > 2);
console.log(allGreaterThanTwo); // true

// Verificar si algún número es mayor o igual a 7 con some()
const someGreaterThanOrEqualSeven = exampleArray.some((num) => num >= 7);
console.log(someGreaterThanOrEqualSeven); // true

// 2. Manipulación de strings en arrays
const stringExampleArray: string[] = ['5', '6', '7'];
stringExampleArray.push('10', '11', '12'); // Agrega elementos en formato string
console.log(stringExampleArray); // ['5', '6', '7', '10', '11', '12']

const stringIndex = stringExampleArray.indexOf('10');
console.log(stringIndex); // 3

// 3. Manipulación de cadenas
const phrase = "Learning TypeScript is fun";
const wordArray = phrase.split(' '); // Divide en palabras
console.log(wordArray); // ['Learning', 'TypeScript', 'is', 'fun']

const joinedByCommas = wordArray.join(','); // Une con comas
console.log(joinedByCommas); // 'Learning,TypeScript,is,fun'

// 4. Otra manipulación de cadenas con split y join
const csvData = "apples,bananas,cherries";
const splitFruits = csvData.split(','); // Divide en elementos
console.log(splitFruits); // ['apples', 'bananas', 'cherries']

const joinedBySpace = splitFruits.join(' '); // Une por espacios
console.log(joinedBySpace); // 'apples bananas cherries'

// 5. Filtrar y encontrar objetos en un array
const products = [
    { name: 'Laptop', price: 1200, discountPrice: 800 },
    { name: 'Phone', price: 900, discountPrice: 700 },
    { name: 'Tablet', price: 950, discountPrice: 600 },
];

const filteredProducts = products.filter(product => product.price > 900);
console.log(filteredProducts); // [{ name: 'Laptop', price: 1200, discountPrice: 800 }]

const firstDiscountProduct = products.find(product => product.discountPrice > 500);
console.log(firstDiscountProduct); // { name: 'Laptop', price: 1200, discountPrice: 800 }

const expensiveProductIndex = products.findIndex(product => product.price > 1000);
console.log(expensiveProductIndex); // 0

// Agregar un nuevo producto al array
products.push({ name: 'Monitor', price: 300, discountPrice: 250 });
console.log(products);
 6. Concatenar y ordenar arrays
const arrayA: number[] = [9, 7, 5];
const arrayB: number[] = [3, 1];
const concatenatedArray = arrayA.concat(arrayB); // Concatenar arrays
console.log(concatenatedArray);

*/
