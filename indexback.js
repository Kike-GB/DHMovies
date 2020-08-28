const http = require('http');
const fs = require('fs');
let faqs = require('./data/faqs');
let theaters = require('./data/theaters');
let raiz = require('./src/raiz');
let enCartelera = require('./src/enCartelera');
let masVotadas = require('./src/masVotadas');
let sucursales = require('./src/sucursales');
let contacto = require('./src/contacto');
let preguntasFrecuentes = require('./src/preguntas-frecuentes');

// Servidor
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	
	// Route System
	switch (req.url) {
		case '/':
			res.end(raiz);
			break;
		case '/en-cartelera':
			res.end(enCartelera);
			break;
		case '/mas-votadas':
			res.end(masVotadas);
			break;
		case '/sucursales':
			res.end(sucursales);
			break;
		case '/contacto':
			res.end(contacto);
			break;
		case '/preguntas-frecuentes':
			res.end(preguntasFrecuentes);
			break;
		default:
			res.end('404 not found');
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));
