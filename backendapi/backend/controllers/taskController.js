const Task = require("../models/taskModel");

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}


const getTask = async (req, res) => {
    try {
        const task = await Task.find();
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}


const getSingleTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json(`Task Not found with id:${id}`);
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json(`Task Not found with id:${id}`);
        }
        res.status(200).json("Task deleted");

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}


const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            {"_id":id},req.body,{new:true, runValidators:true}
        );
        if (!task) {
            return res.status(404).json(`Task Not found with id:${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const updateTaskSingleField = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            {"_id":id},req.body,{new:true, runValidators:true}
        );
        if (!task) {
            return res.status(404).json(`Task Not found with id:${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
module.exports = { createTask, getTask, getSingleTask, deleteTask,updateTask,updateTaskSingleField }