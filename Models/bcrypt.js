var mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcr = new Schema({
    name:({
        type:String
    }),
    password:({
        type:String
    })
})
const MyModel = mongoose.model('pass', bcr);
module.exports = MyModel