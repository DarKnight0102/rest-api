module.exports = (app) => {
    const COATrees = require('../controllers/coa-tree.controller');
    app.get('/coatree', COATrees.findAll);
}