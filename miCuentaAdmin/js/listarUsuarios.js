'use strict';

const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
let listaUsuarios = [];

const inicializarListas = async() => {
    listaUsuarios = await obtenerListaDatos('/listar-usuarios');
    mostrarDatos();
};

const mostrarDatos = async() => {
    cuerpoTabla.innerHTML = ''; //Asegurarse que la tabla este limpia


    listaUsuarios.forEach(usuario => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().innerText = usuario.nombre + ' ' + usuario.primerApellido + ' ' + usuario.segundoApellido;
        fila.insertCell().innerText = obtenerTipoIdentificacion(usuario.tipoIdentificacion);
        fila.insertCell().innerText = usuario.identificacion;
    });
};

inicializarListas()