const todoListData = require('../../todoListData');

function getTodos(req, res) {
    res.status(200).send(todoListData);
}

module.exports = getTodos;