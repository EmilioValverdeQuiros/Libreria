'use strict';

let url = 'http://localhost:3000/api'

const registrarDatos = async(pdatos, pendPoint) => {
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });

};

const obtenerListaDatos = async(pendPoint) => {
    let listaDatos = [];
    url += pendPoint;

    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaDatos = response.data.lista;
    });

    return listaDatos;

};

const obtenerTipoIdentificacion = (idIdentificacion) => {
    let tipoIdentificacion = '';

    switch (idIdentificacion) {
        case 'CedulaNacional':
            tipoIdentificacion = 'Cédula Física Nacional';
            break;

        case 'CedulaJuridica':
            tipoIdentificacion = 'Cédula Jurídica';
            break;

        case 'Pasaporte':
            tipoIdentificacion = 'Pasaporte';
            break;

        case 'Dimex':
            tipoIdentificacion = 'Dimex';
            break;
    }

    return tipoIdentificacion;
};