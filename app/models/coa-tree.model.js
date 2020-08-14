const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const CoaTreeModel = mongoose.Schema({
    categoryId: [{
        type: String
    }],
    parentId:{
        type: ObjectId
    },
    COAGroupId: {
        type: ObjectId
    },
    sheetNameId:{
        type: ObjectId
    }
}, {collection: 'CategoryTree'});

module.exports = mongoose.model("COATree", CoaTreeModel);