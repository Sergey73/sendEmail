'use strict';
var router = require('express').Router();
var printData = require('../controllers/print-data');

router.get('/', pathNotSpecified);
router.use('/printdata', printData);

module.exports = router;


function pathNotSpecified(req, res) {
  res.status(422).send({error: 'path not specified'});
}
