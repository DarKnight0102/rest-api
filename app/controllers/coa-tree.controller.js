const COATreeService = require('../service/coa-tree.service');

exports.findAll = (req, res) => {
    COATreeService.FindAll(res)
}