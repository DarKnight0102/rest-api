const COATree = require('../models/coa-tree.model');

const COATreeService = {
    FindAll: () => {
        return COATree.find();
    }
}

module.exports = COATreeService;