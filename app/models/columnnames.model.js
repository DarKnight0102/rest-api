const mongoose = require('mongoose');

const ColumnModel = mongoose.Schema({
    id: {
        type: Number,
        index: {unique: true, dropDups: true}
    },
    name: {
        type: String,
        index: {unique: true, dropDups: true}
    },
    chartOfAccount: {
        type: String,
        index: {unique: true, dropDups: true}
    },
    startDate: {
        type: String
    }
}, {collection: 'Attribute'});

module.exports = mongoose.model("columnnames", ColumnModel);