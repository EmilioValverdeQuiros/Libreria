const botonEnviarFactura = document.getElementById('btn-solicitar-factura');

const enviarFactura = () => {
    Swal.fire({
        'icon': 'success',
        'title': 'Factura enviada con éxito',
        'text': 'Por favor revise su correo',
        'background': '#EEEEEE',
        'confirmButtonColor': '#FBD46D',
        'confirmButtonText': 'Entendido',
        'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
    })
};

botonEnviarFactura.addEventListener('click', enviarFactura);