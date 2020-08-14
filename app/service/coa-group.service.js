const COAGroup = require('../models/coa-group.model');

const COAGroupService = {
    FindAll: (req) => {
        return COAGroup.find();
    }
}

module.exports = COAGroupService;