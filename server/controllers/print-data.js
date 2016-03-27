'use strict';
var router = require('express').Router();
var nodemailer = require('nodemailer');
var PrintData = require('../models/PrintData');

function sendToEmail (params) {
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'memorylane73@gmail.com', // Your email id
          pass: 'memorylane' // Your password
      }
  });

  var text = 'Status: ' + params.status + ' \n\n' +
    'Priority: ' + params.priority;

  var mailOptions = {
    from: 'example@gmail.com', // sender address
    to: 'memorylane73@gmail.com', // list of receivers
    subject: 'Print data from user: ' + params.name, // Subject line
    text: text, //, // plaintext body
/*    attachments: [    {   // encoded string as an attachment
        filename: 'text1.txt',
        content: 'aGVsbG8gd29ybGQh',
        encoding: 'base64'
    }] */
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    };
});

};

router.get('/', (req, res, next) => {
  PrintData.findAll({})
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});
router.post('/', (req, res, next) => {
  var params = req.body;
  var data = new PrintData(params || {});
  sendToEmail(params);
  data.save()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));

});
router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  PrintData.findById(id)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});
router.delete('/:id', (req, res, next) => {
  var id = req.params.id;
  PrintData.removeById(id)
    .then(() => res.status(200).send(id + ' removed'))
    .catch((err) => next(err));
});
router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  var params = req.body;
  PrintData.updateById(id, params)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

module.exports = router;
