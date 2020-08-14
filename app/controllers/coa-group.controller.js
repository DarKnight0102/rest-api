const COAGroupService = require('../service/coa-group.service');

exports.findAll = (req, res) => {
    COAGroupService.FindAll()
        .then(coagroups => {
            res.send(coagroups);
        })
}