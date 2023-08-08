const botonGuardarCambios = document.getElementById('btn-guardar-cambios');



const guardarCambios = () => {
    Swal.fire({
        'icon': 'success',
        'title': 'Información actualizada con éxito',
        'background': '#EEEEEE',
        'confirmButtonColor': '#FBD46D',
        'confirmButtonText': 'Entendido',
        'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
    }).then(() => {
        //Redireccionar a otra pagina
        window.location.href = '../miCuentaAdmin/libroFanAdmin.html';
    });
};

botonGuardarCambios.addEventListener('click', guardarCambios);