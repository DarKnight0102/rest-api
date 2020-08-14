const AppConfig = require('../models/app-config.model');

const AppConfigService = {
    FindAll: (req) => {
        return AppConfig.find();
    }
}

module.exports = AppConfigService;