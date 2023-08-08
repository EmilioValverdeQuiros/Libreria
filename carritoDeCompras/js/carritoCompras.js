const botonAgregar1 = document.getElementById('btn-agregarCarrito1');
const validarAgregar1 = () => {
    let hayError = true;
    if (hayError == true) {
        Swal.fire({
            'icon': 'success',
            'title': 'Libro agregado al carrito',
            'text': 'Por favor revise su carrito de compras',
        })
    }
}
botonAgregar1.addEventListener('click', validarAgregar1);

const botonAgregar2 = document.getElementById('btn-agregarCarrito2');
const validarAgregar2 = () => {
    let hayError = true;
    if (hayError == true) {
        Swal.fire({
            'icon': 'success',
            'title': 'Libro agregado al carrito',
            'text': 'Por favor revise su carrito de compras',
        })
    }
}
botonAgregar2.addEventListener('click', validarAgregar2)

const botonAgregar3 = document.getElementById('btn-agregarCarrito3');
const validarAgregar3 = () => {
    let hayError = true;
    if (hayError == true) {
        Swal.fire({
            'icon': 'success',
            'title': 'Libro agregado al carrito',
            'text': 'Por favor revise su carrito de compras',
        })
    }
}
botonAgregar3.addEventListener('click', validarAgregar3);

const botonEliminar1 = document.getElementById('btn-eliminar1');
const validarEliminar1 = () => {
    let hayError = true;
    if (hayError == true) {
        Swal.fire({
            'icon': 'success',
            'title': 'Libro eliminado del carrito',
            'text': 'Por favor revise su carrito de compras',
        })
    }
}
botonEliminar1.addEventListener('click', validarEliminar1);

const botonEliminar2 = document.getElementById('btn-eliminar2');
const validarEliminar2 = () => {
    let hayError = true;
    if (hayError == true) {
        Swal.fire({
            'icon': 'success',
            'title': 'Libro eliminado del carrito',
            'text': 'Por favor revise su carrito de compras',
        })
    }
}
botonEliminar2.addEventListener('click', validarEliminar2);

const botonEliminar3 = document.getElementById('btn-eliminar3');
const validarEliminar3 = () => {
    let hayError = true;
    if (hayError == true) {
        Swal.fire({
            'icon': 'success',
            'title': 'Libro eliminado del carrito',
            'text': 'Por favor revise su carrito de compras',
        })
    }
}
botonEliminar3.addEventListener('click', validarEliminar3);

const inputCantidad1 = document.getElementById('txt-cantidad1');
const listaFormato1 = document.getElementById('slt-formato1');
const inputCantidad2 = document.getElementById('txt-cantidad2');
const listaFormato2 = document.getElementById('slt-formato2');
const inputCantidad3 = document.getElementById('txt-cantidad3');
const listaFormato3 = document.getElementById('slt-formato3');
const botonProcederPago = document.getElementById('btn-procederPago');
const validarProcederPago = () => {
    let hayError = false;
    if (listaFormato1.value == '') {
        hayError = true;
        listaFormato1.style.border = 'red solid 2px';
    } else {
        listaFormato1.style.border = '#30475E solid 2px';
    }
    if (inputCantidad1.value == '0' || inputCantidad1.value == '-1') {
        hayError = true;
        inputCantidad1.style.border = 'red solid 2px';
    } else {
        inputCantidad1.style.border = '#30475E solid 2px';
    }
    if (listaFormato2.value == '') {
        hayError = true;
        listaFormato2.style.border = 'red solid 2px';
    } else {
        listaFormato2.style.border = '#30475E solid 2px';
    }
    if (inputCantidad2.value == '0' || inputCantidad2.value == '-1') {
        hayError = true;
        inputCantidad2.style.border = 'red solid 2px';
    } else {
        inputCantidad2.style.border = '#30475E solid 2px';
    }
    if (listaFormato3.value == '') {
        hayError = true;
        listaFormato3.style.border = 'red solid 2px';
    } else {
        listaFormato3.style.border = '#30475E solid 2px';
    }
    if (inputCantidad3.value == '0' || inputCantidad3.value == '-1') {
        hayError = true;
        inputCantidad3.style.border = 'red solid 2px';
    } else {
        inputCantidad3.style.border = '#30475E solid 2px';
    }
    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo proceder el pago',
            'text': 'Por favor rellene los campos resaltados'
        }).then(() => {
            inputCantidad1.value = '1';
            inputCantidad2.value = '1';
            inputCantidad3.value = '1';
            listaFormato1.value = '';
            listaFormato2.value = '';
            listaFormato3.value = '';
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Proceso de pago con éxito',
            'text': 'Será redireccionado a la siguiente página'
        }).then(() => {
            window.location.href = 'seleccionarTarjeta.html';
        })
    }
}
botonProcederPago.addEventListener('click', validarProcederPago);