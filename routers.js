let raiz = require('./src/raiz');
let enCartelera = require('./src/enCartelera');
let masVotadas = require('./src/masVotadas');
let sucursales = require('./src/sucursales');
let contacto = require('./src/contacto');
let preguntasFrecuentes = require('./src/preguntasFrecuentes');

module.exports = {
    '/': function () {
        return raiz;
    },
    '/en-cartelera': function () {
        return enCartelera;
    },
    '/mas-votadas': function () {
        return masVotadas;
    },
    '/sucursales': function () {
        return sucursales;
    },
    '/contacto': function () {
        return contacto;
    },
    '/preguntas-frecuentes': function () {
        return preguntasFrecuentes;
    },
    '/favicon.ico': function () {
        return '';
    }
}