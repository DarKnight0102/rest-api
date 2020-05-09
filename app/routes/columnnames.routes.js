module.exports = (app) => {
    const columnnames = require('../controllers/columnnames.controller.js');

    //app.post('/columnnames', columnnames.create);

    app.get('/columnnames', columnnames.findAll);

    //app.get('/columnnames/:columnId', columnnames.findOne);

    //app.put('/columnnames/:columnId', columnnames.update);

    //app.delete('/columnnames/:columnId', columnnames.delete);
}