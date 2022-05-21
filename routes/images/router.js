var express = require('express');
var router = express.Router();
const {getImages} = require('./controller');

/* GET users listing. */
router.get('/', async function (req = request, resp = response, next) {
    const images = await getImages();
    resp.json(images);

  });

  module.exports = router;