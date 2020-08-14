const COAService = require('../service/coa.service');

exports.findAll = (req, res) => {
    COAService.FindAll()
        .then(coas => {
            res.send(coas);
        })
}