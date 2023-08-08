const botonCerrarSesion = document.getElementById('cerrarSesion');

const cerrarLaSesion = () => {
    localStorage.clear('UsuarioConectado')
}

botonCerrarSesion.addEventListener('click', cerrarLaSesion)