let movies = require('../data/movies');

let enCartelera = `<b>En Cartelera</b> <hr>
	<u>Total de películas en cartelera</u>: ${movies.length} películas </br></br>
    <u>Listado de películas</u>: </br>`;
let listado = `<ol>`
	for ( i = 0; i < movies.length; i++){
        listado += `<li> <b>${movies[i].title}:</b> `
        listado += `${movies[i].overview} </li></br>`
	}
    listado += `</ol>`
    enCartelera += listado;
    
module.exports = enCartelera;
