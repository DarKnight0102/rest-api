const COATree = require('../models/coa-tree.model');
const COAGroup = require('../models/coa-group.model');
const COA = require('../models/coa.model');

var exclude = {
    __v: false,
    sheetNameId: false
};

const COATreeService = {
    FindAll: (res) => {
        var ret = [];
        var parents = []
        var children = []
        COATree.find({}, exclude, (err, trees) => {
            var len = 0;
            trees.forEach(tree => {
                tree = JSON.parse(JSON.stringify(tree))
                COAGroup.findOne({ _id: tree.categoryGroupId }, exclude, (err, group) => {
                    COATree.findOne({ _id: tree.parentId }, exclude, (err, parent) => {
                        if (tree.categoryGroupId != '000000000000000000000000') {
                            var ParentName = parent
                            ParentName = JSON.parse(JSON.stringify(ParentName))
                            if (ParentName) {
                                parents.push(parent)
                                children.push(tree)
                                console.log(ParentName)
                                delete ParentName['categoryId']
                            }
                            var categoryGroupName = group
                            var categoryIdsNames = []
                            tree.categoryId.forEach((coa) => {
                                COA.find({ id: coa }, exclude, (err, name) => {
                                    if (name.length > 0) {
                                        //console.log(name)
                                        var temp = name[0];
                                        //console.log(temp)
                                        //temp = JSON.parse(JSON.stringify(temp))
                                        temp.categoryGroupId = categoryGroupName._id;
                                        categoryIdsNames.push(temp);
                                    }
                                })
                            })
                            ret.push({
                                categoryGroup: categoryGroupName,
                                nodeId: tree._id,
                                parentId: ParentName,
                                //subgroups: [],
                                categoryIds: categoryIdsNames,
                            })
                        }else{
                            var categoryIdsNames = []
                            tree.categoryId.forEach((coa) => {
                                COA.find({ id: coa }, exclude, (err, name) => {
                                    if (name.length > 0) {
                                        //console.log(name)
                                        var temp = name[0];
                                        //console.log(temp)
                                        //temp = JSON.parse(JSON.stringify(temp))
                                        //temp.categoryGroupId = categoryGroupName._id;
                                        categoryIdsNames.push(temp);
                                    }
                                })
                            })
                            ret.push({
                                categoryGroup: {
                                    "_id":"000000000000000000000000"
                                },
                                nodeId: tree._id,
                                parentId: null,
                                //subgroups: [],
                                categoryIds: categoryIdsNames,
                            })
                        }
                        ////////////////////////
                        //setTimeout(() => {
                        if (++len === trees.length) {
                            var len2 = 0;
                            parents.forEach((prnt, index) => {
                                var chld = children[index]
                                prnt = JSON.parse(JSON.stringify(prnt))
                                chld = JSON.parse(JSON.stringify(chld))
                                COAGroup.findOne({ _id: prnt.categoryGroupId }, exclude, (err, par) => {
                                    var output = ret.filter(function (value) {
                                        return "" + value.categoryGroup._id == "" + par._id;
                                    })[0]
                                    var index = ret.indexOf(output)
                                    COAGroup.findOne({ _id: chld.categoryGroupId }, exclude, (err, ch) => {
                                        chld.name = ch.name
                                        var innerNames = []
                                        chld.categoryId.forEach((coa) => {
                                            COA.findOne({ id: coa }, exclude, (err, name) => {
                                                innerNames.push(name);
                                            })
                                        })
                                        setTimeout(() => {
                                            chld.categoryId = innerNames
                                            // output.subgroups.push({
                                            //     _id: chld._id,
                                            //     parentId: chld.parentId,
                                            //     categoryGroupId: chld.categoryGroupId,
                                            //     name: chld.name,
                                            //     categoryIds: chld.categoryId
                                            // })
                                            ret[index] = output
                                            len2++
                                            if (len2 === parents.length) {
                                                res.send(ret);
                                            }
                                        }, 1000)
                                    })
                                })
                            })

                        }
                        //}, 1000)
                    })
                })
            })

        })
    }
}

module.exports = COATreeService;