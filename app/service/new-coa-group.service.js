const NewCOAGroup = require('../models/new-coa-group.model');
const { set } = require('mongoose');

const NewCOAGroupService = {
    FindAll: () => {
        return NewCOAGroup.find();
    },
}

module.exports = NewCOAGroupService;