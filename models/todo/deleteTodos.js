let todoListData = require('../../todoListData');

function deleteTodos(req, res) {
    const { id: idToDelete } = req.params;

    if (!todoListData[idToDelete]) {
        res.status(400).send({ error: 'id not found'});
    }
    delete todoListData[idToDelete];

    res.status(204);
}

module.exports = deleteTodos;