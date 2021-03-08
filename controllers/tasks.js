const Task = require('../models/task')

module.exports = {
    index,
    show, 
    create
}

async function index(req, res) {
    const tasks = await Task.find({})
    .sort({createdAt: 1})
    res.status(200).json(tasks)
}

async function show(req, res) {
    const task = await Task.findById(req.params.id)
    res.status(200).json(task)
}

async function create(req, res) {
    const task = await Task.create(req.body)
    res.status(201).json(task)
}