const botonConfirmarCambios = document.getElementById('btn-confirmar-cambios');
const botonEliminarFoto = document.getElementById('btn-eliminar-foto');
const inputSocio = document.getElementById('input-socio');
const inputFecha = document.getElementById('input-fecha');
const inputReferencia = document.getElementById('input-referencia')
const inputDireccion = document.getElementById('input-direccion');
const inputHorario = document.getElementById('input-horario');
const inputCedula = document.getElementById('input-cedula');


const inputsIncompletos = () => {
    if (inputSocio.value == '' || inputFecha.value == '' || inputDireccion.value == '' || inputCedula.value == '' || inputReferencia.value == '' || inputHorario.value == '') {

        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido añadir el libro',
            'text': 'Por favor rellene los campos resaltados',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })

        if (inputSocio.value == '') {
            inputSocio.style.border = 'red solid 2px'
        } else {
            inputSocio.style.border = '#30475E solid 2px'
        }

        if (inputFecha.value == '') {
            inputFecha.style.border = 'red solid 2px'
        } else {
            inputFecha.style.border = '#30475E solid 2px'
        }

        if (inputReferencia.value == '') {
            inputReferencia.style.border = 'red solid 2px'
        } else {
            inputReferencia.style.border = '#30475E solid 2px'
        }

        if (inputDireccion.value == '') {
            inputDireccion.style.border = 'red solid 2px'
        } else {
            inputDireccion.style.border = '#30475E solid 2px'
        }

        if (inputHorario.value == '') {
            inputHorario.style.border = 'red solid 2px'
        } else {
            inputHorario.style.border = '#30475E solid 2px'
        }

        if (inputCedula.value == '') {
            inputCedula.style.border = 'red solid 2px'
        } else {
            inputCedula.style.border = '#30475E solid 2px'
        }
    }
}

const confirmarCambios = () => {

    inputsIncompletos();

    if (inputSocio.value != '' && inputFecha.value != '' && inputDireccion.value != '' && inputCedula.value != '' && inputReferencia.value != '' && inputHorario.value != '') {
        Swal.fire({
            'icon': 'success',
            'title': 'Socio añadido con exito',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        }).then(() => {
            //Redireccionar a otra pagina
            window.location.href = '../miCuentaAdmin/sociosAdmin.html';
        });
    }

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

botonConfirmarCambios.addEventListener('click', confirmarCambios);
botonEliminarFoto.addEventListener('click', eliminarLogo);