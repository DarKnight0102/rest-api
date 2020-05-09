const mongoose = require('mongoose');

console.log("resumodel called ");
const ColumnModel = mongoose.Schema({
    id: {
        type: Number,
        index: {unique: true, dropDups: true}
    },
    name: {
        type: String,
        index: {unique: true, dropDups: true}
    }
});

module.exports = mongoose.model("columnnames", ColumnModel);