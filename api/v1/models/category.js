const { default: mongoose } = require('mongoose');
const Mongoose  = require('mongoose');

const categorySchema = new Mongoose.Schema(
    {
        catid:Number,
        catname:String,
        catdesc:String
    });

module.exports = mongoose.model('category',categorySchema);