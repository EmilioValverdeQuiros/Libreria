const botonConfirmarCambios = document.getElementById('btn-confirmar-cambios');
const botonEliminarFoto = document.getElementById('btn-eliminar-foto');
const botonEliminarLibro = document.getElementById('btn-eliminar-libro');
const inputTitulo = document.getElementById('input-titulo');
const inputAutor = document.getElementById('input-autor');
const inputISBM = document.getElementById('input-isbm');
const inputFechaPublicacion = document.getElementById('input-fecha-publicacion');
const inputEditorial = document.getElementById('input-editorial');
const inputReseña = document.getElementById('input-reseña');
const inputPrecio = document.getElementById('input-precio');
const inputDescuento = document.getElementById('input-descuento');


const checks = document.querySelectorAll('.input-checkbox');
botonConfirmarCambios.addEventListener('click', function() {

    let formatoSeleccionado = false;

    checks.forEach((e) => {
        if (e.checked == true) {
            formatoSeleccionado = true;
        }
    });

    if (formatoSeleccionado == true) {
        confirmarCambios()
    } else {
        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido editar el libro',
            'text': 'Por favor seleccione el formato disponible',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
    }

});


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
        window.location.href = '../miCuentaAdmin/librosAdmin.html';
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

const eliminarLibro = () => {
    Swal.fire({
        title: '¿Está seguro de eliminar el libro?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Libro eliminado con éxito',
                '',
                'success'
            )
            window.location.href = '../miCuentaAdmin/librosAdmin.html';
        }
    })
}


botonEliminarFoto.addEventListener('click', eliminarFoto);
botonEliminarLibro.addEventListener('click', eliminarLibro)