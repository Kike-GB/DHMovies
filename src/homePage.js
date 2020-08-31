let movies = require('../data/movies');

let contenido = `<b>Bienvenidos a DH Movies el mejor sitio para encontrar las mejores
	películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.</b> <hr>
	<u>Total de películas en cartelera</u>: ${movies.length} películas </br></br>
	<u>Listado de películas</u>: </br>`;
	movies = movies.sort( function (a, b){
		if (a.title > b.title) return 1;
		if (a.title < b.title) return -1;
		return 0;
	});
	let listado = `<ol>`
	lista = movies.map(function (movis){
		listado += `<li>${movis.title} :</li>`;
	});
	listado += `</ol>`
	contenido += listado;
	contenido += `<u>Recordá que podés visitar las secciones</u>: </br></br>
	i. En Cartelera </br>
	ii. Más Votadas </br>
	iii. Sucursales </br>
	iv. Contacto </br>
    v. Preguntas Frecuentes </br>`

    module.exports = contenido;