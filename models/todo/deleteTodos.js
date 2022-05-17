let todoListData = require('../../todoListData');

function deleteTodos(req, res) {
    const { id: idToDelete } = req.params;

    if (!todoListData[idToDelete]) {
        res.status(200).send({ error: 'id not found'});
    }
    delete todoListData[idToDelete];
    console.log(todoListData);

    res.status(204);
}

module.exports = deleteTodos;