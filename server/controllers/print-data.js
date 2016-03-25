'use strict';
var router = require('express').Router();
var PrintData = require('../models/PrintData');

router.get('/', (req, res, next) => {
  PrintData.findAll({})
    .then((data) => res.status(200).send(data.toJSON()))
    .catch((err) => next(err));
});
router.get('/:id', (req, res, next) => {
  PrintData.find(req.params.id)
    .then((data) => res.status(200).send(data.toJSON()))
    .catch((err) => next(err));
});
router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  PrintData.find(id)
    .then((data) => data.update(req.body))
    .then((data) => res.status(200).send(data.toJSON()))
    .catch((err) => next(err));
});


router.post('/', (req, res, next) => {
  console.log(req.body)
  var data = new PrintData(req.body || {});
  data.save()
    .then((data) => res.status(200).send(data/*.toJSON()*/))
    .catch((err) => next(err));
});
router.delete('/:id', (req, res, next) => {
  var id = req.params.id;
  PrintData.find(id)
    .then((data) => data.remove())
    .then(() => res.status(200).send(id + ' removed'))
    .catch((err) => next(err));
});

module.exports = router;
