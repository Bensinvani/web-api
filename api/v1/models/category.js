const { default: mongoose } = require('mongoose');
const Mongoose  = require('mongoose');

const categorySchema = new Mongoose.Schema(
    {
        cid:Number,
        catname:String,
        price:Number,
        catname:String
    });

module.exports = mongoose.model('categoryies',categorySchema);