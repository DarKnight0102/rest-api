module.exports = (app) => {
    const AppConfig = require('../controllers/app-config.controller');
    app.get('/appconfig', AppConfig.findAll);
}