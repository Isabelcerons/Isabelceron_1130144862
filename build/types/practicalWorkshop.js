const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
auxNumber.push(10);
auxNumber.push(12);
auxNumber.push(14);
auxNumber.push(17);
console.log(auxNumber);
const auxNumberPop = auxNumber.pop();
console.log(auxNumberPop);
const index1 = auxNumber.indexOf(1);
const index2 = auxNumber.indexOf(4);
const index3 = auxNumber.indexOf(7);
console.log('el indice de 1 ', index1, 'el indice de 4 ', index2, 'el indice de 7 ', index3);
const sliced = auxNumber.slice(2, 9);
console.log('sliced correcto', sliced);
const every1 = auxNumber.every((num) => num > 1);
console.log('todos los elementos que son mayores a 1 son: ', every1);
const some1 = auxNumber.some((num) => num >= 7);
console.log('algun elemento es mayor o igual que 7: ', some1);
const auxStriing = ['1', '2', '3', '4', '5', '6', '7'];
auxStriing.push('10');
auxStriing.push('11');
auxStriing.push('12');
auxStriing.push('13');
auxStriing.push('14');
const index1String = auxStriing.indexOf('10');
const index2String = auxStriing.indexOf('11');
const index3String = auxStriing.indexOf('14');
console.log('indice de 10 ', index1String, 'indice de 11 ', index2String, 'indice de 14 ', index3String);
const message = 'Bienvenidos al Itp';
const Split = message.split(' ');
console.log(Split);
const join = Split.join(' , ');
console.log(join);
const namess = 'michael,anderson,yadir,Kevin,Emerson';
const Splitnamess = namess.split(',');
console.log(Splitnamess);
const joinnamess = Splitnamess.join(' ');
console.log(joinnamess);
const anyProducts = [
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
const filterProducts = anyProducts.filter((product) => product.price > 900);
console.log('filtrado por el metodo filter: ', filterProducts);
const filterProductsFor = [];
for (let i = 0; i < anyProducts.length; i++) {
    if (anyProducts[i].price > 900) {
        filterProductsFor.push(anyProducts[i]);
    }
}
console.log('fue filtrado por for: ', filterProductsFor);
const findProducts = anyProducts.find((product) => product.priceDiscont > 500);
console.log('su producto fue encontrado: ', findProducts);
const findIndexProducts = anyProducts.findIndex((product) => product.price > 1000);
console.log('indice del producto encontrado: ', findIndexProducts);
anyProducts.push({
    id: 3,
    name: 'azucar',
    price: 5000,
    priceDiscont: 100,
}, {
    id: 4,
    name: 'panela',
    price: 1000,
    priceDiscont: 400,
}, {
    id: 5,
    name: 'lentejas',
    price: 3000,
    priceDiscont: 200,
});
console.log('productos agregados: azucar, panela, lentejas', anyProducts);
const array01 = [1, 2, 3, 4];
const array02 = [6, 7, 8, 9];
const concatArrays = array01.concat(array02);
console.log('el Array concatenado mediante el metodo concat: ', concatArrays);
array01.push(...array02);
console.log('Array concatenado mediante push: ', array01);
const sortArray = concatArrays.sort((a, b) => a - b);
console.log('se ordenó de menor a mayor: ', sortArray);
const reverseArray = sortArray.reverse();
console.log('se ordenó de mayor a menor: ', reverseArray);
//# sourceMappingURL=practicalWorkshop.js.map