const botonConfirmarCambios = document.getElementById('btn-confirmar-cambios');
const botonEliminarFoto = document.getElementById('btn-eliminar-foto');
const botonEliminarSocio = document.getElementById('btn-eliminar-socio');
const inputFecha = document.getElementById('input-fecha');
const inputReferencia = document.getElementById('input-referencia')
const inputDireccion = document.getElementById('input-direccion');
const inputHorario = document.getElementById('input-horario')



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
        window.location.href = '../miCuentaAdmin/sociosAdmin.html';
    });

}

const eliminarLogo = () => {
    Swal.fire({
        title: '¿Está seguro de eliminar el logo?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Logo eliminado con éxito',
                '',
                'success'
            )
        }
    })
}

const eliminarSocio = () => {
    Swal.fire({
        title: '¿Está seguro de eliminar el socio?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Socio eliminado con éxito',
                '',
                'success'
            )
            window.location.href = '../miCuentaAdmin/sociosAdmin.html';
        }
    })
}


botonConfirmarCambios.addEventListener('click', confirmarCambios)
botonEliminarFoto.addEventListener('click', eliminarLogo);
botonEliminarSocio.addEventListener('click', eliminarSocio)