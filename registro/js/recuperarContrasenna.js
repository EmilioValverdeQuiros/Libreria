const inputCorreo = document.getElementById('txt-correo');
const botonRecuperar = document.getElementById('btn-recuperar');

let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validarRecuContra = () => {
    let hayError = false;

    if (inputCorreo.value == '') {
        hayError = true;
    } else {
        hayError = false;
    }


    if (!email.test(inputCorreo.value)) {
        hayError = true;
        swal.fire({
            'icon': 'error',
            'title': 'Correo electrónico invalido',
            'text': 'Por favor ingrese un correo electrónico valido',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
    } else if (hayError == true) {
        Swal.fire({
            'icon': 'error',
            'title': 'Ingrese los datos correctamente'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Las instrucciones fueron enviadas a su correo'
        }).then(() => {
            window.location.href = 'login.html';
        });
    }

};

botonRecuperar.addEventListener('click', validarRecuContra);