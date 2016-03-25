'use strict';
var PrintDataModel = require('../schemas/print-datas');
var mongo = require('mongoose');
// var mongo = require('../../libs/mongoose');

class PrintData  {
	constructor(model) {
		this._model = this.constructor.model(model);
	}

	save() {
	return Promise.resolve()
	  .then(() => {
	    return new Promise((resolve, reject) => {
	      this._model.save((err) => (err ? reject(err) : resolve(this)));
	    });
	  })
	}

  	static findAll() {
  		debugger
	    return new Promise((resolve, reject) => {
	      var find = this.model.find({});
	      find.exec((err, docs) => {
	        if (err) {
	          return reject(err);
	        }

	        var Self = this;
	        var objects = [];
	        for (var i = 0; i < docs.length; i++) {
	          if (this.getClass) { Self = this.getClass(docs[i]); }
	          objects.push(new Self(docs[i]));
	        }

	        objects.toJSON = () => {
	          return objects;
	        };

	        resolve(objects);
	      });
	    });
  	}

	static get model() {
    	return PrintDataModel;
  	}
}

module.exports = PrintData;
