var express = require('express');
var router = express.Router();
const {getImages, getImagesUltimas} = require('./controller');

//Arreglo que dada la posición determina las fechas que se usarán para la paginación.
//Ejemplo: página=1 es igual a acceder a la posición página-1 (0) para poder acceder a las imágenes de ENERO.
const meses = [['2022-01-01','2022-01-31'],['2022-02-01','2022-02-28'],['2022-03-01','2022-03-31'],['2022-04-01','2022-04-30'],['2022-05-01','2022-05-24']]

/* GET users listing. */
router.get('/', async function (req = request, resp = response, next) {
    const page = parseInt(req.query.page);

    //Revisa que la página solicitada desde el front sea válida y notifica en el caso en que no sea válido para que
    //el front pueda identificar y mostrar una respuesta apropiada al usuario
    if(page<1 || page >5){
      resp.json({'Respuesta':'Número de página ingresado INVÁLIDO'})
    }
    else{
      //Dado el caso en que el número de la página es válido, se envían las posiciones del arreglo correspondientes al mes (página) ingresada
      const images = await getImages(meses[page-1]);
      resp.json(images)
    }
  });

  /* GET users listing. */
router.get('/ultimas', async function (req = request, resp = response, next) {

  const date = req.query.fecha;
  const fechaDivi= date.split("-")
  const mes = parseInt(fechaDivi[1])

  const images = await getImagesUltimas(meses[mes-1]);
  resp.json(images)
  
});

  module.exports = router;