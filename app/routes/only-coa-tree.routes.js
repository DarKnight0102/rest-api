module.exports = (app) => {
    const COATrees = require('../controllers/only-coa-tree.controller');
    app.get('/coatreetest', COATrees.findAll);
}