/* 1. Declara variables utilizando todos los tipos primitivos mencionados */ 
let age: number = 19;
console.log(age, 'age');

let name1: string = 'Isa';
console.log(name1,'name1');

let box: null = null;
console.log(null,'null');

let car: undefined = undefined;
console.log(undefined, 'undefined');

let state: boolean = true;
console.log(state,'state');

/*2. Crea una función que calcule el área de un rectángulo, tomando la base y la altura como parámetros */

function calArea (base:number,height:number){
    return (base * height);
}
const base: number = 4;
const height: number = 6; 

const resut: number = calArea(base, height);

console.log('el resultado del area es ',resut);

/* 3. Crea una clase Car que tenga propiedades como make, model, y un método para mostrar su información*/ 

class Car {
    private make: string;
    private model: number;
    private color: string;
    private brand: string; 
    private plate: string;
    
    constructor(make: string,model:number,color:string,brand:string,plate:string){
        this.make = make;
        this.model = model;
        this.color = color;
        this.brand = brand ;
        this.plate = plate;
    } 
    printInformation(): void{
        console.log('el carro fue creado',this.make,'el modelo es',this.model, 'el color es',this.color,
            'la marca es',this.brand,'la placa del carro es',this.plate);

    }
} 
const infoCar = new Car('china',2010,'blue','toyota','21f32q');
console.log(infoCar,'infoCar');

/*4. Define una interfaz Shape que tenga propiedades para calcular el área y una clase Rectangle que implemente esta interfaz */

interface Shape{
   calArea2(): number;

}

class Rectangle implements Shape{

    base: number;
    height: number;

    constructor( base:number, height:number){
        this.base = base;
        this.height = height;
    }

    calArea2(): number{
        return this.base * this.height;
    }
}
const rectangle = new Rectangle(3,5);
console.log('la area del rectangulo es ',rectangle.calArea2());

/*5. Crea un arreglo de objetos que representen libros, cada uno con propiedades como title, author, y usa filter para obtener solo los libros de un autor específico */

const books: {title: string,author: string,year: number}[] =[
 {
    title: 'orgullo y prejuicio',
    author: 'jane austen',
    year: 30
 },
 {
    title : 'vitaminas para el espíritu',
    author : 'Humberto A. Agudelo C.',
    year : 40 

 },
 {
    title : 'principito',
    author : 'Humberto A. Agudelo C.',
    year : 56 
 }
]
const filterAuthor = books.filter(Auth => Auth.author==='Humberto A. Agudelo C.');
console.log('el resultado del autor buscado es ',filterAuthor);


 /* 6. Crea un pequeño programa que utilice todos los conceptos anteriores:
	Define una interfaz Book que tenga title, author, y year.
	Crea una clase Library que tenga un arreglo de libros y métodos para agregar y buscar libros por autor.
	Usa métodos de clase y arreglos para interactuar con la biblioteca.*/

 interface Book{
    title: string ;
    author: string;
    year : number;
 }
 class Library{
    private book:Book[] = [];

    addBook(book:Book): void{
        this.book.push(book)   
    }

    findBook(author:string) : Book[]{
        return this.book.filter(book => book.author=== author );
    }
   
 }

const library = new Library();

// Agregar libros

library.addBook({ title: "Clean Code", author: "Robert C. Martin", year: 2008 });
library.addBook({ title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 });
library.addBook({ title: "Design Patterns", author: "Erich Gamma", year: 1994 });
library.addBook({ title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 });

// Buscar libros por autor
const robertMartinBooks = library.findBook("Robert C. Martin");
console.log("Libros de Robert C. Martin:", robertMartinBooks);

/*8. Uso de ciclos


/*1. Escribe un programa que sume todos los números pares del 1 al 100 */
	    
let addition: number = 0;

for(let i =1; i<=100; i++){ /*i iterador  % mood*/
    if(i % 2 === 0){ 
      addition += i;

    }
}
  console.log('la suma de los pares es ',addition);

  /*2. Contar números impares con while, que hay entre 1 y 30.*/

  let addOdd: number = 0;
  let num: number = 1;

  while(num <=30){
    if(num % 2 !== 0){
       addOdd ++; 
    }
    num ++;
  }
  console.log('la suma de los impares es ', addOdd);

 /* 3. Imprimir números primos con for y if */
 

  function isCousin(num: number): boolean{
    if(num<=2) return false;
    for(let i = 2;i<num;i++){
        if(num % i ===0){
            return false;
        }
    }
    return true;
  }
  console.log('los numeros primos son ');
  for(let i =1;i<100; i++){
    if(isCousin(i)){
        console.log(i);

    }
  }
  
 
  
   