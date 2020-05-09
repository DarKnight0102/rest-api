const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = (app) => {
    const columnnames = require('../controllers/column.controller');

    //app.post('/columnnames', columnnames.create);

    app.get('/columnnames', columnnames.findAll);

    /*
    app.get('/columnnames/:columnId', columnnames.findOne);

    app.put('/columnnames/:columnId', columnnames.update);

    app.delete('/columnnames/:columnId', columnnames.delete);
    */
}

const config = require('./config/columnnames.config');

const url = config.mongoUrl;
const connect = mongoose.connect(url, {
    useNewUrlParser: true
});

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

require('./app/routes/columnnames.routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});