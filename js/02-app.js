//----------------------------- <> WeakSet
const weakset = new WeakSet(); 

const cliente = { // Sólo acepta objetos
    nombre: 'juan',
    saldo: 100,
}

//--------------------------------------------- [.add]
weakset.add(cliente); // Cliente es un objeto

//-------------------------------------------------- [.has]
// console.log(weakset.has(cliente2)); // undefined

//----------------------- [.delete]
weakset.delete(cliente); 

//------------------------ (x) .size no está disponible
console.log(weakset.size);

//---------------------------------- (x) No se puede iterar
// weakset.forEach( (producto) => {
// })








































