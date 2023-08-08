const botonEliminar1 = document.getElementById('btn-eliminar1');
const botonEliminar2 = document.getElementById('btn-eliminar2');

const eliminarTarjeta = () => {
    Swal.fire({
        title: '¿Está seguro de eliminar el método de pago?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Método de pago eliminado con éxito',
                '',
                'success'
            )
        }
    })
}

botonEliminar1.addEventListener('click', eliminarTarjeta);
botonEliminar2.addEventListener('click', eliminarTarjeta);