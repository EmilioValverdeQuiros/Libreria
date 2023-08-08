const botonConfirmarCambios = document.getElementById('btn-confirmar-cambios');
const botonEliminarFoto = document.getElementById('btn-eliminar-foto');


const confirmarCambios = () => {
    Swal.fire({
        'icon': 'success',
        'title': 'Información actualizada con éxito',
        'background': '#EEEEEE',
        'confirmButtonColor': '#FBD46D',
        'confirmButtonText': 'Entendido',
        'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
    }).then(() => {
        //Redireccionar a otra pagina
        window.location.href = '../MiCuenta/miCuenta.html';
    });
}

const eliminarFoto = () => {
    Swal.fire({
        title: '¿Está seguro de eliminar la foto?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Foto eliminada con éxito',
                '',
                'success'
            )
        }
    })
}

botonConfirmarCambios.addEventListener('click', confirmarCambios);
botonEliminarFoto.addEventListener('click', eliminarFoto);