const botonEliminarPunto = document.getElementById('btn-eliminar');
const botonActualizarTarifaEnvio = document.getElementById('btn-editar-tarifa');
const inputNuevaTarifa = document.getElementById('input-tarifa-envio');

const eliminarPuntoRetiro = () => {
    Swal.fire({
        title: '¿Está seguro de eliminar el punto de retiro?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Punto de retiro eliminado con éxito',
                '',
                'success'
            )
        }
    })
}

const actualizarTarifa = () => {
    if (inputNuevaTarifa.value == '') {
        inputNuevaTarifa.style.border = 'red solid 2px'
        Swal.fire({
            'icon': 'error',
            'title': 'No se pudo añadir el punto de retiro',
            'text': 'Por favor rellene los campos resaltados',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        });
    } else {
        inputNuevaTarifa.style.border = '#30475E solid 2px'
        Swal.fire({
            'icon': 'success',
            'title': 'Tarifa actualizada con exito',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        }).then(() => {
            inputNuevaTarifa.value = ''
        });
    }
}


botonEliminarPunto.addEventListener('click', eliminarPuntoRetiro);
botonActualizarTarifaEnvio.addEventListener('click', actualizarTarifa);