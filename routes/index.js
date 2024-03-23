const router = require('express').Router();
const todoRoutes = require('./todo.route');

router.use('/todos', todoRoutes)

module.exports = router;