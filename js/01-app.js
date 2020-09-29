//-------------------------- <> Set
const carrito = new Set(); 

console.log(carrito);

//-------------------- [.add]

carrito.add('nadar'); 
carrito.add('correr'); // No considera duplicados
carrito.add('volar');
carrito.add('Volar'); // Considera las mayúsculas
carrito.add('correr');

console.log(carrito)

//----------------------------------------- [.size]
console.log(carrito.size); // Como length

//----------------------------------------- [.has]
// console.log( carrito.has('Guitarra') );

//----------------------------------------- [.delete]
carrito.delete('Volar');
console.log(carrito)
// console.log( carrito.delete('Guitarra') ); // False

//----------------------------------------------- Iterar
carrito.forEach( (producto, index, pertenece) => {
    // console.log(producto);
    // console.log(index);
    console.log(pertenece);
} )

//----------------------------------------- Aplicaciones
const numeros = [10,20,30,40,50,10,20];
const noDuplicados = new Set(numeros); // Un array sin duplicados

console.log(noDuplicados);























