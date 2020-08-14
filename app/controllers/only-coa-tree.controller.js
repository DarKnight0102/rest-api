const COATreeService = require('../service/only-coa-tree.service');

exports.findAll = (req, res) => {
    COATreeService.FindAll()
        .then(coatrees => {
            res.send(coatrees);
        })
}