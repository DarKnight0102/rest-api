module.exports = (app) => {
    const COA = require('../controllers/coa.controller');

    //app.post('/coa', coa.create);

    app.get('/coa', COA.findAll);

    //app.get('/coa/:coaId', coa.findOne);

    //app.put('/coa/:coaId', coa.update);

    //app.delete('/coa/:coaId', coa.delete);
}