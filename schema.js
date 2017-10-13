var mongoose = require('mongoose');
var assert = require('assert');
var Schema = mongoose.Schema;
var productSchema = new Schema({
name: {
    type: String,
    require: true,
    unique: true
},
description: {
    type: String,
    required: true
}
}, {timestamps: true

});
var Products = mongoose.model('students', productSchema);
module.exports = Products;
