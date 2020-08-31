let movies = require('../data/movies');

let enCartelera = `<b>En Cartelera</b> <hr>
	<u>Total de películas en cartelera</u>: ${movies.length} películas </br></br>
    <u>Listado de películas</u>: </br>`;
let listado = `<ol>`
lista = movies.map(function (movis){
    listado += `<li> <b>${movis.title} :</b>`
    listado += `${movis.overview} </li></br>`
})
listado += `</ol>`;
enCartelera += listado;
    
module.exports = enCartelera;
