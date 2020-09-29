//----------------- <> WeakMap
const producto = {
    idProducto : 10
}

const weakmap = new WeakMap();

//----------------------------------------- [.set] (para agregar)
weakmap.set(producto, 'Monitor');

//----------------------------------------- [.has]
console.log(weakmap.has(producto)); // true

//----------------------------------------- [.get]
console.log(weakmap.get(producto)); // Monitor, acceso limitado
console.log(weakmap); // Muestra todo

//----------------------------------------- [.delete]
console.log( weakmap.delete(producto) );

//------------------------------ (x) .size no está disponible
// console.log( weakmap.size );

//---------------------------------- (x) No se puede iterar con forEach
// weakmap.forEach( (producto) => {
// })
