//----------------------- <> Symbol (permite crear propiedades únicas)
// const sym = Symbol();
// const sym2 = Symbol();

const sym = Symbol('1');
const sym2 = Symbol('1');

if (sym === sym2) {
    console.log('Son iguales!!') // Los symbols no son iguales nunca!
}else{
    console.log('Son diferentes') // ...
}

// console.log( Symbol() === Symbol() ); // false



//----------------------- <> Utilizando un objeto

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar
persona[nombre] = 'Juan';
persona[apellido] = 'De la torre'; //Agregar una propiedad Symbol
persona.tipoCliente = 'Premium';
persona.saldo = 500;


console.log(persona);
console.log(persona[nombre]); //Extraer de una propiedad Symbol


//----------------------- <> Las propiedades que utilizan un symbol no son iterables
for(let i in persona){
    console.log(i); 
} // Sólo funciona para las propiedades normales

//-------------------------------------- <> Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};


cliente[nombreCliente] = 'Pedro';


console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);






































