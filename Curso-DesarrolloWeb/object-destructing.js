const cliente = {
    nombre:'Alejandra',
    tipo:'Premium',
    datos: {
        ubicacion:{
            ciudad: 'Mexico',
            pais: 'Mexico'
        },
        cuenta:{
            desde:'10-12-2012',
            saldo:4000
        }
    },
    gustos: {
        musica: ['trance','rock']
    }
}

console.log(cliente)

// Forma clásica
const nombreCliente = cliente.nombre

// Mejor (Recomendada)
let {nombre, tipo} = cliente; //Busca el key "nombre" dentro del objeto "cliente"
let {datos: {ubicacion}} = cliente;
let {datos: {cuenta: {saldo}}} = cliente
let {gustos:{musica}} = cliente
console.log(nombre,tipo)
console.log(ubicacion)
console.log(saldo)
console.log(musica)