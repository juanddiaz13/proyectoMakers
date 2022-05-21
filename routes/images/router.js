var express = require('express');
var router = express.Router();
const {getImages} = require('./controller');

/* GET users listing. */
router.get('/', async function (req, res) {
    const images = await getImages();
    res.json(images);

  });

  module.exports = router;