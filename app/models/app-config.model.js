const mongoose = require('mongoose');

const AppConfigModel = mongoose.Schema({
    key: {
        type: String,
        index: {unique: true, dropDups: true}
    },
    value: {
        type: String
    },
    sys:{
        type: String
    }
}, {collection: 'AppConfig'});

module.exports = mongoose.model("AppConfig", AppConfigModel);