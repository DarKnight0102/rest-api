const ColumnNameService = require('../service/columnnames.service.js');

/*
exports.create = (req, res) => {
    if(!req.body.id) {
        return res.status(400).send({
            message: "Column can not have no id"
        });
    }

    const columnname = new Column({
        id: req.body.id, 
        name: req.body.name
    });

    columnname.save()
    .then(columnname => {
        res.send(columnname);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Column."
        });
    });
};
*/

exports.findAll = (req, res) => {
    /*
    Column.find()
    .then(columns => {
        res.send(columns);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving columns."
        });
    });
    */
    ColumnNameService.FindAll()
        .then(columns => {
            res.send(columns);
        })
}
/*
exports.findOne = (req, res) => {
    Column.findById(req.params.columnId)
    .then(column => {
        if(!column) {
            return res.status(404).send({
                message: "Column not found with id " + req.params.columnId
            });
        }
        res.send(column);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Column not found with id " + req.params.columnId
            });
        }
        return res.status(500).send({
            message: "Error retrieving column with id " + req.params.columnId
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.id) {
        return res.status(400).send({
            message: "Column can not have no id"
        });
    }

    Column.findByIdAndUpdate(req.params.columnId, {
        id: req.body.id,
        name: req.body.name
    }, {new: true})
    .then(column => {
        if(!column) {
            return res.status(404).send({
                message: "Column not found with id " + req.params.columnId
            });
        }
        res.send(column);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Column not found with id " + req.params.columnId
            });
        }
        return res.status(500).send({
            message: "Error updating column with id " + req.params.columnId
        });
    });
};

exports.delete = (req, res) => {
    Column.findByIdAndRemove(req.params.columnId)
    .then(column => {
        if(!column) {
            return res.status(404).send({
                message: "Column not found with id " + req.params.columnId
            });
        }
        res.send({message: "Column deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Column not found with id " + req.params.columnId
            });
        }
        return res.status(500).send({
            message: "Could not delete column with id " + req.params.columnId
        });
    });
};
*/