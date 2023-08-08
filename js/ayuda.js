const inputNombre = document.getElementById('input-nombre');
const inputApellido = document.getElementById('input-apellido');
const inputCorreo = document.getElementById('input-correoElectronico');
const inputOrden = document.getElementById('input-numeroOrden');
const listaProblema = document.getElementById('slt-problema');
const inputMensaje = document.getElementById('input-mensaje');
const botonEnviar = document.getElementById('btn-enviar');
const validarFormularioAyuda = () => {
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
    if (listaProblema.value == '') {
        hayError = true;
        listaProblema.style.border = 'red solid 2px'
    } else {
        listaProblema.style.border = '#30475E solid 2px';
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
            'title': 'No se pudo enviar el formulario',
            'text': 'Por favor rellene los campos resaltados'
        })
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha enviado el formulario',
            'text': 'Prontamente recibirá una respuesta'
        }).then(() => {
            inputNombre.value = '';
            inputApellido.value = '';
            inputCorreo.value = '';
            inputOrden.value = '';
            listaProblema.value = '';
            inputMensaje.value = '';
        });
    }
}
botonEnviar.addEventListener('click', validarFormularioAyuda);