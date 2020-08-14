const mongoose = require('mongoose');

const CoaGroupModel = mongoose.Schema({
    name: {
        type: String,
        index: {unique: true, dropDups: true}
    },
    isActive: {
        type: Boolean
    },
    code:{
        type: String
    }
}, {collection: 'CategoryGroup'});

module.exports = mongoose.model("COAGroup", CoaGroupModel);