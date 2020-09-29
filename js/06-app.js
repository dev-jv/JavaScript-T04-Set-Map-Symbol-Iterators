//----------------------------------- Creando un Iterador

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto nuevo'];

function crearIterador(carrito){

    let i = 0; 

    return{
        siguiente: () => {
            const fin = (i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined;
        
            return {
                fin, // boolean
                valor, 
            }
        }
    }
}

const recorrerCarrito = crearIterador(carrito); // Le asignamos el array a iterar

console.log(recorrerCarrito.siguiente()); // Itera sobre cada elemento de la matriz
console.log(recorrerCarrito.siguiente()); 
console.log(recorrerCarrito.siguiente()); 
console.log(recorrerCarrito.siguiente()); 
console.log(recorrerCarrito.siguiente()); 
console.log(recorrerCarrito.siguiente()); 


//-->>














