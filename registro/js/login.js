const inputIdentificacion = document.getElementById('txt-identificacion');
const inputContraLogin = document.getElementById('txt-contrasenna-login');
const botonIniciarSesion = document.getElementById('btn-iniciar-sesion');


const validarLogin = () => {

    let esCorrecto = false;

    listaPersonas.forEach(personaAux => {

        if ((personaAux.identificacion == inputIdentificacion.value) && (personaAux.contrasena == inputContraLogin.value)) {
            localStorage.setItem('UsuarioConectado', JSON.stringify(personaAux));
            esCorrecto = true;
        }
    });

    if (esCorrecto == true) {
        Swal.fire({
            'icon': 'success',
            'title': 'Bienvenido',
            'text': 'Ha iniciado sesion correctamente'
        }).then(() => {
            //Redireccionar a otra pagina
            window.location.href = '../index.html';
        });
    } else {
        Swal.fire({
            'icon': 'error',
            'title': 'Usuario o contraseña incorrectos',
            'text': 'Vuelva a intentarlo'
        });
    };
}
botonIniciarSesion.addEventListener("click", validarLogin);