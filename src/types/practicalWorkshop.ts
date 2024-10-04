const auxNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// agregamos numeros con el push
auxNumber.push(10);
auxNumber.push(12);
auxNumber.push(14);
auxNumber.push(17);
console.log(auxNumber);

// eliminamos el ultimo numero con pop
const auxNumberPop = auxNumber.pop();
console.log(auxNumberPop);

// encontrar el indice en este caso de 1,4,7

const index1 = auxNumber.indexOf(1);
const index2 = auxNumber.indexOf(4);
const index3 = auxNumber.indexOf(7);

console.log('el indice de 1 ', index1, 'el indice de 4 ', index2, 'el indice de 7 ', index3);

// extraer el array de la posicion 2 al 9 (hasta la posición 8)
const sliced = auxNumber.slice(2, 9);

console.log('sliced correcto', sliced);

// verifica si todos los números son mayores a 1
const every1 = auxNumber.every((num) => num > 1);
console.log('todos los elementos que son mayores a 1 son: ', every1);

// verificar si algún elemento es mayor o igual que 7 con some
const some1 = auxNumber.some((num) => num >= 7);
console.log('algun elemento es mayor o igual que 7: ', some1);

// PUNTO 2
const auxStriing: string[] = ['1', '2', '3', '4', '5', '6', '7'];

// agregamos por medio del push el 10,11,12,13,14
auxStriing.push('10');
auxStriing.push('11');
auxStriing.push('12');
auxStriing.push('13');
auxStriing.push('14');

// encontrar el índice de los elementos 10, 11, 14 con indexOf
const index1String = auxStriing.indexOf('10');
const index2String = auxStriing.indexOf('11');
const index3String = auxStriing.indexOf('14');

console.log('indice de 10 ', index1String, 'indice de 11 ', index2String, 'indice de 14 ', index3String);

// PUNTO 3
const message: string = 'Bienvenidos al Itp';

// dividir la cadena en un array de palabras donde el separador sea el espacio por split()
const Split: string[] = message.split(' ');
console.log(Split);

// aplicar un join y que se separe por comas
const join: string = Split.join(' , ');
console.log(join);

// PUNTO 4
const namess: string = 'michael,anderson,yadir,Kevin,Emerson';

// dividir el array en palabras donde el separador sea la coma
const Splitnamess: string[] = namess.split(',');
console.log(Splitnamess);

// aplicar el join donde separe por espacios
const joinnamess: string = Splitnamess.join(' ');
console.log(joinnamess);

// PUNTO 5
const anyProducts: any[] = [
    {
        id: 1,
        name: 'arroz',
        price: 1000,
        priceDiscont: 700,
    },
    {
        id: 2,
        name: 'atun',
        price: 2500,
        priceDiscont: 1500,
    }
];

// filtrar en una const donde el price sea mayor a 900 por medio de filter y por medio de un for
const filterProducts = anyProducts.filter((product) => product.price > 900);
console.log('filtrado por el metodo filter: ', filterProducts);

const filterProductsFor: any[] = [];
for (let i = 0; i < anyProducts.length; i) {
    if (anyProducts[i].price > 900) {
        filterProductsFor.push(anyProducts[i]);
    }
}
console.log('fue filtrado por for: ', filterProductsFor);

// encontrar el primer objeto del array donde priceDiscont > 500 por find
const findProducts = anyProducts.find((product) => product.priceDiscont > 500);
console.log('su producto fue encontrado: ', findProducts);

// encontrar el indice del primer elemento del array donde price > 1000 por findIndex
const findIndexProducts = anyProducts.findIndex((product) => product.price > 1000);
console.log('indice del producto encontrado: ', findIndexProducts);

// agregar 3 productos por push
anyProducts.push(
    {
        id: 3,
        name: 'azucar',
        price: 5000,
        priceDiscont: 100,
    },
    {
        id: 4,
        name: 'panela',
        price: 1000,
        priceDiscont: 400,
    },
    {
        id: 5,
        name: 'lentejas',
        price: 3000,
        priceDiscont: 200,
    }
);
console.log('productos agregados: azucar, panela, lentejas', anyProducts);

// PUNTO 6
const array01: number[] = [1, 2, 3, 4];
const array02: number[] = [6, 7, 8, 9];

// concatenar el array01 con array02 por medio de concat y push
const concatArrays: number[] = array01.concat(array02);
console.log('el Array concatenado mediante el metodo concat: ', concatArrays);

array01.push(...array02);
console.log('Array concatenado mediante push: ', array01);

// ordenar de menor a mayor por sort
const sortArray = concatArrays.sort((a, b) => a - b);
console.log('se ordenó de menor a mayor: ', sortArray);

// ordenar descendente por reverse
const reverseArray = sortArray.reverse();
console.log('se ordenó de mayor a menor: ', reverseArray);
