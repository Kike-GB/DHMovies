let faqs = require('../data/faqs');

let preguntasFrecuentes = `<b>Preguntas Frecuentes.</b> <hr>
<u>Total de preguntas</u>: ${faqs.length} preguntas </br></br>
<u>Listado de preguntas</u>: </br>`;
let listado = `<ol>`;
lista = faqs.map(function (selecte){
	listado += `<li> <b>${selecte.faq_title}</b> </br> <i>${selecte.faq_answer} </i> </li></br>`
})
listado += `</ol>`
preguntasFrecuentes += listado;

module.exports = preguntasFrecuentes;