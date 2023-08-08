const inputNombre = document.getElementById('input-nombre');
const inputApellido = document.getElementById('input-apellido');
const inputCorreo = document.getElementById('input-correoElectronico');
const inputMensaje = document.getElementById('input-mensaje');
const botonEnviar = document.getElementById('btn-enviar');
const validarContactenos = () => {
    let hayError = false;
    if (inputNombre.value == '') {
        hayError = true;
        inputNombre.style.border = 'red solid 2px'
    } else {
        inputNombre.style.border = '#30475E solid 2px';
    }
    if (inputApellido.value == '') {
        hayError = true;
        inputApellido.style.border = 'red solid 2px'
    } else {
        inputApellido.style.border = '#30475E solid 2px';
    }
    if (inputCorreo.value == '') {
        hayError = true;
        inputCorreo.style.border = 'red solid 2px'
    } else {
        inputCorreo.style.border = '#30475E solid 2px';
    }
    if (inputMensaje.value == '') {
        hayError = true;
        inputMensaje.style.border = 'red solid 2px'
    } else {
        inputMensaje.style.border = '#30475E solid 2px';
    }
    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo enviar el mensaje',
            'text': 'Por favor rellene los campos resaltados',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha enviado el mensaje',
            'text': 'Prontamente recibirá una respuesta',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        }).then(() => {
            inputNombre.value = '';
            inputApellido.value = '';
            inputCorreo.value = '';
            inputMensaje.value = '';
        });
    }
}
botonEnviar.addEventListener('click', validarContactenos);