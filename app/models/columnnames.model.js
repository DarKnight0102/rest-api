const mongoose = require('mongoose');

const ColumnSchema = mongoose.Schema({
    id: {
        type: Number,
        index: {unique: true, dropDups: true}
    },
    name: {
        type: String,
        index: {unique: true, dropDups: true}
    }
});

module.exports = mongoose.model("columnnames", ColumnSchema);