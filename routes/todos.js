const express = require('express');
const router = express.Router();

const { getTodos, updateTodos, createTodos, deleteTodos } = require('../models/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  getTodos(req, res);
});

router.post('/', function(req, res, next) {
  createTodos(req, res);
});

router.put('/{:id}', function(req, res, next) {
  updateTodos(req, res);
});

router.delete('/{:id}', function(req, res, next) {
  deleteTodos(req, res);
});


module.exports = router;
