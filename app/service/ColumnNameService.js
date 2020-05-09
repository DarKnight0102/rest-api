const columnNameModel = require('../models/columnnames.model');

class ColumnNameService{

    static findAll(){
        console.log("service called ");
        return columnNameModel.findAll;
    }
}

module.exports = ColumnNameService;