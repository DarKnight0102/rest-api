const AppConfigService = require('../service/app-config.service');

exports.findAll = (req, res) => {
    AppConfigService.FindAll()
        .then(appconfigs => {
            res.send(appconfigs);
        })
}