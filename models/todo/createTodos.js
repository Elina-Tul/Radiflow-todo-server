const { v4: uuidv4 } = require('uuid');
let todoListData = require('../../todoListData');

function createTodos(req, res) {
    const { description } = req.body;
    if(!description) {
        res.status(400).send({ error: 'description not provided' });
    }
    const todoId = uuidv4();
    todoListData[todoId] = description;

    res.status(201).send({ id: todoId });

}

module.exports = createTodos;