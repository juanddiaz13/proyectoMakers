const axios  = require('axios');

//Obtiene la información de un mes, correspondiente a una página 
async function getImages(fechas){
    const result = await axios.get("https://api.nasa.gov/planetary/apod?api_key=iuenwC5jFVBftgtkvv2iJVBulBzAgPf065FyY9S6&start_date="+fechas[0]+"&end_date="+fechas[1])
    i = 0
    let objeto = {data : []}
    for(i;i<result.data.length;i++){
        //Revisa si el elemento retornado contiene hdurl, de tenerlo con el fin de solo enviar aquellos elenentos que tienen imagen.
        if(result.data[i].hdurl!=undefined){
            objeto.data.push(result.data[i])
        }
    }
    return objeto;
}

//Obtiene la información desde una fecha dada hasta la actualidad
async function getImagesUltimas(fechas){
    const result = await axios.get("https://api.nasa.gov/planetary/apod?api_key=iuenwC5jFVBftgtkvv2iJVBulBzAgPf065FyY9S6&start_date="+fechas[0])
    i = 0
    let objeto = {data : []}
    for(i;i<result.data.length;i++){
        //Revisa si el elemento retornado contiene hdurl, de tenerlo con el fin de solo enviar aquellos elenentos que tienen imagen.
        if(result.data[i].hdurl!=undefined){
            objeto.data.push(result.data[i])
        }
    }
    return objeto;
}

module.exports = {getImages, getImagesUltimas};