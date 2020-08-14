const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const config = require('./config/columnnames.config');

const url = config.mongoUrl;
const connect = mongoose.connect(url, {
    useNewUrlParser: true
});

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });

require('./app/routes/columnnames.routes')(app);
require('./app/routes/coa.routes')(app);
require('./app/routes/coa-group.routes')(app);
require('./app/routes/new-coa-group.routes')(app);
require('./app/routes/coa-tree.routes')(app);
require('./app/routes/only-coa-tree.routes')(app);
require('./app/routes/app-config.routes')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});