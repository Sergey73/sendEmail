'use strict';
var PrintDataModel = require('../schemas/print-datas');
var mongo = require('mongoose');

class PrintData  {
	constructor(model) {
		this._model = this.constructor.model(model);
	}

	save() {
	   return this._model.save();
	}

  	static findAll() {
	    return this.model.find({}).exec();
  	}

    static findById(id) {
	    return this.model.findById(id).exec();
  	}

    static removeById(id) {
	    return this.model.remove({"_id": id}).exec();
  	}

    static updateById(id, newValue) {
	    return this.model.update({"_id": id}, newValue).exec();
  	}

	static get model() {
    	return PrintDataModel;
  	}
}

module.exports = PrintData;
