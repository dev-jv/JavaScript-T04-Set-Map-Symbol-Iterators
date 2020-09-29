//--------------------------- <> Map
const cliente = new Map();

//-------------------------------- [.set] (para agregar)
cliente.set('nombre', 'karen');
cliente.set('tipo','Premium');
cliente.set('saldo', '3000');

console.log(cliente);

//------------------------------- [.size]
console.log(cliente.size); // 3

//----------------------------------------- [.has]
console.log(cliente.has('nombre2')); // false

//----------------------------------------- [.get]
console.log(cliente.get('nombre')); // Karen

//--------------------- [.delete]
cliente.delete(saldo);
console.log(cliente.has('saldo')); // false
console.log(cliente.get('saldo')); // undefined

//---------------- [.clear]
cliente.clear();
console.log(cliente);

//----------------------------------------------------------------- Constructor
const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);

paciente.set('dr', 'Dr Asignado'); // Agregar
paciente.set('nombre', 'Antonio'); // Reescribir

console.log(paciente);

paciente.forEach( (datos, index) => { // Iterar
    console.log(index);
} )