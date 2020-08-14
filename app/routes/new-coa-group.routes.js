module.exports = (app) => {
    const COAGroup = require('../controllers/new-coa-group.controller');
    app.get('/coagroupnew', COAGroup.findAll);
}