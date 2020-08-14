//import Column from '../models/columnnames.model';
const Column = require('../models/columnnames.model');

/*
class ColumnNameService {
    findAll() {
        console.log("service called ");
        Column.find()
            .then(columns => {
                return (columns);
            }).catch(err => {
                return err;
            });
    }
}
*/

const ColumnNameService = {
    FindAll: (req) => {
        return Column.find();
    }
}

module.exports = ColumnNameService;

//export default ColumnNameService;