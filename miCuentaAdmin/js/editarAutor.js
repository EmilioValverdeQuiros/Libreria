const botonConfirmarCambios = document.getElementById('btn-confirmar-cambios');
const botonEliminarFoto = document.getElementById('btn-eliminar-foto');
const botonEliminarAutor = document.getElementById('btn-eliminar-autor');

const confirmarCambios = () => {
    Swal.fire({
        'icon': 'success',
        'title': 'Información actualizada con exito',
        'background': '#EEEEEE',
        'confirmButtonColor': '#FBD46D',
        'confirmButtonText': 'Entendido',
        'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
    }).then(() => {
        //Redireccionar a otra pagina
        window.location.href = '../miCuentaAdmin/autoresAdmin.html';
    });
}

const eliminarAutor = () => {
    Swal.fire({
        title: '¿Está seguro de eliminar el autor?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Autor eliminado con éxito',
                '',
                'success'
            )
            window.location.href = '../miCuentaAdmin/autoresAdmin.html';
        }
    })
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
botonEliminarAutor.addEventListener('click', eliminarAutor);
botonEliminarFoto.addEventListener('click', eliminarFoto);