const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const NewCoaGroupModel = mongoose.Schema({
    name: {
        type: String,
        index: {unique: true, dropDups: true}
    },
    subgroups: [{
        type: ObjectId
    }],
    categoryIds:[{
        type: String
    }]
}, {collection: 'CategoryGroup_Test'});

module.exports = mongoose.model("CategoryGroup_Test", NewCoaGroupModel);