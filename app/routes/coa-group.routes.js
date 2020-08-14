module.exports = (app) => {
    const COAGroup = require('../controllers/coa-group.controller');
    app.get('/coagroup', COAGroup.findAll);
}