const NewCOAGroupService = require('../service/new-coa-group.service');

var collection = []

exports.findAll = (req, res) => {
    NewCOAGroupService.FindAll()
        .then(coagroups => {
            collection = coagroups
            var ret = []
            coagroups.forEach((group) => {
                ret.push(bfs(group._id))
            })
            res.send(ret)
            // res.send(coagroups);
        })
}

function bfs(_id) {
    var group = collection.filter(function (value) {
        return "" + value._id == "" + _id;
    })[0]
    if (group.subgroups !== null) {
        for (var i = 0; i < group.subgroups.length; i = i + 1) {
            group.subgroups[i] = bfs(group.subgroups[i])
        }
    }
    return group
}