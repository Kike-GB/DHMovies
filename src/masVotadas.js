let movies = require('../data/movies');

let masVotadas = `<b>Más Votadas.</b> <hr>
<u>Total de películas</u>: `;
seleccionadas = movies.filter(movis => movis.vote_average >= 7);
masVotadas += `${seleccionadas.length} películas </br></br> 
<u>Rating promedio</u>:`
let promedio = 0;
promedio = seleccionadas.reduce( function (primero,segundo){
	return primero + segundo.vote_average;
},0)
promedio = promedio / seleccionadas.length;
masVotadas += promedio + `</br></br> <u>Listado de películas</u>: </br>`;  
seleccionadas = seleccionadas.sort( function (a, b){
    if (a.vote_average > b.vote_average) return -1;
    if (a.vote_average < b.vote_average) return 1;
    return 0;
});
let listado = `<ol>`;
lista = seleccionadas.map(function (selecte){
	listado += `<li> <u>${selecte.title}</u> </br>${selecte.overview}  </br> <u>Calificación:</u><b> ${selecte.vote_average}</b></li></br>`
})
listado += `</ol>`;
masVotadas += listado;

module.exports = masVotadas;
