const mongoose = require('mongoose');

const CoaModel = mongoose.Schema({
    name: {
        type: String
    },
    id: {
        type: String,
        index: {unique: true, dropDups: true}
    },
    startDate:{
        type: Date
    },
    COA:{
        type: String
    }
}, {collection: 'Category'});

module.exports = mongoose.model("COA", CoaModel);