// Switch statement

const metodoPago = 'Tarjeta';

switch(metodoPago){
    case 'Efectivo': 
        console.log(`Pagaste con ${metodoPago}`)
        break
    case 'Cheque': 
        console.log(`Pagaste con ${metodoPago}`)
        break
    case 'Tarjeta': 
        console.log(`Pagaste con ${metodoPago}`)
        break
    default:
        console.log('Aún no has pagado o método de pago no válido')
        break
}