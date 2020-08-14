const columnNameModel = require('../models/columnnames.model');

class ColumnNameService{

    findAll(){
        console.log("service called ");
        return columnNameModel.findAll;
    }
}

export const columnNameService = new ColumnNameService();