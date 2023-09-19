const Batch = require("../models/batchModel");

const createBatch = async (req, res) => {
    try {
        const task = await Batch.create(req.body);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}


const getBatch = async (req, res) => {
    try {
        const task = await Batch.find();
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = { createBatch, getBatch }