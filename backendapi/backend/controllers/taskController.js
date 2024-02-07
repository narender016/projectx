const Task = require("../models/taskModel");
const { Readable } = require('stream');
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}


// const getTask = async (req, res) => {
//     try {
//         const task = await Task.find();
//         res.status(200).json(task);
//     } catch (err) {
//         res.status(500).json({ msg: err.message })
//     }
// }



const getTask = async (req, res) => {// this is for testing purpose streaming
    try {
        // Set the appropriate headers
        res.setHeader('Content-Type', 'text/plain');

        // Create a custom readable stream with delayed chunks
        const text = "this is streaming text. hope you will successfully get this task";
        const chunkSize = 10; // Adjust the chunk size as needed
        const delay = 1000; // Adjust the delay (in milliseconds) between chunks

        let offset = 0;

        const readableStream = new Readable({
            read(size) {
                // Implement the _read() method
                if (offset >= text.length) {
                    this.push(null); // Signal the end of the stream
                    return;
                }

                const chunk = text.slice(offset, offset + chunkSize);
                offset += chunkSize;

                // Simulate delay before pushing the chunk
                setTimeout(() => {
                    this.push(chunk);
                }, delay);
            }
        });

        // Pipe the readable stream to the response object
        readableStream.pipe(res);
    } catch (err) {
        res.status(500).json({ msg: err.message });
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