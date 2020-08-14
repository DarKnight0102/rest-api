const COA = require('../models/coa.model');

const COAService = {
    FindAll: (req) => {
        return COA.find();
    }
}

module.exports = COAService;