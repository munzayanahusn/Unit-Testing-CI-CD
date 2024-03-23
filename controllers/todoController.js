// controllers/todoController.js
const { Todo } = require('../models');

async function listAllTodos(req, res) {
  try {
    const todos = await Todo.findAll({
      where: {
        deletedAt: null
      }
    });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function detailTodo(req, res) {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createTodo (req, res) {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteTodo (req, res) {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    await todo.update({ deletedAt: new Date() });
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateTodo (req, res) {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    await todo.update(req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  listAllTodos,
  detailTodo,
  createTodo,
  deleteTodo,
  updateTodo
};
