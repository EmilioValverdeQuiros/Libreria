const botonSolicitarTarjeta = document.getElementById('btn-solicitar-tarjeta');
const barraComprasNecesarias = document.getElementById('bar-comprasNecesarias');


const solicitarLibroFan = () => {
    let puedeSolicitar = false;

    if (barraComprasNecesarias.value < 3) {
        Swal.fire({
            'icon': 'error',
            'title': 'No puede solicitar la tarjeta Libro Fan',
            'text': 'Aún no ha realizado las compras necesarias ',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Felicidades',
            'text': 'Eres un cliente frecuente',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        }).then(() => {
            //Redireccionar a otra pagina
            window.location.href = '../MiCuenta/libroFan.html';
        });
    }
}

botonSolicitarTarjeta.addEventListener('click', solicitarLibroFan);