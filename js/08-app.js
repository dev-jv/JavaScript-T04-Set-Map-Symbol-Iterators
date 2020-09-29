//------------------------------------------------------------------- Iteradores
const ciudades = ['Londres', 'New York', 'Madrid', 'Paris']; // Array

const ordenes = new Set([123, 456, 654, 465, 885]) // Set

const datos = new Map(); // Map
datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');

//---------------------------- Default > lo que haya..
for(let ciudad of ciudades) {
    console.log(ciudad);
}

for(let orden of ordenes) {
    console.log(orden);
}

for(let dato of datos) {
    console.log(dato);
}

//------------------------------------Keys Iterator > keys
for( let keys of ciudades.keys() ) {
    console.log(keys);
}

for( let keys of ordenes.keys() ) {
    console.log(keys);
}

for( let keys of datos.keys() ) {
    console.log(keys);
}

//------------------------------------- Values Iterator > value
for( let value of ciudades.values()) {
    console.log(value);
}

for( let value of ordenes.values()) {
    console.log(value);
}

for( let value of datos.values()) {
    console.log(value);
}

// ------------------------------------Entries Iterator > key and value
for (let entry of ciudades.entries()){
    console.log(entry);
}

for (let entry of ordenes.entries()){
    console.log(entry);
}

for (let entry of datos.entries()){
    console.log(entry);
}
























