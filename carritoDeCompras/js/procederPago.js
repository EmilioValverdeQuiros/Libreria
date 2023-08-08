const listaRetiro = document.getElementById('sucursal-retiro');
const inputDireccion = document.getElementById('input-direccion');
const botonProcederPago = document.getElementById('btn-procederPago');
const validarProcederPago = () => {
    let hayError = false;
    if (listaRetiro.value == '' && inputDireccion.value == '') {
        hayError = true;
        listaRetiro.style.border = 'red solid 2px'
        inputDireccion.style.border = 'red solid 2px'
    } else {
        listaRetiro.style.border = '#30475E solid 2px'
        inputDireccion.style.border = '#30475E solid 2px'
    }
    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo proceder el pago',
            'text': 'Por favor rellene los campos resaltados',
        })
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Proceso de pago con éxito',
            'text': 'Será redireccionado a la siguiente página',
        }).then(() => {
            window.location.href = '../carritoDeCompras/detalleCompra.html';
        })
    }
}
botonProcederPago.addEventListener('click', validarProcederPago);