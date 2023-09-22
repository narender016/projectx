const Batch = require("../models/batchModel");

const createBatch = async (req, res) => {
  try {
    const data = await Batch.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getBatch = async (req, res) => {
  try {
    const data = await Batch.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const updateBatchSingleField = async (req, res) => {
  try {
    const { id } = req.params;
    // const data = await Batch.findByIdAndUpdate(
    //     {"_id":id},req.body,{new:true, runValidators:true}
    // );
    // if (!data) {
    //     return res.status(404).json(`Batch Not found with id:${id}`);
    // }
    // res.status(200).json(data);
    // Find the batch by ID
    const batch = await Batch.findById(id);

    if (!batch) {
      return res.status(404).json({ msg: "Batch not found" });
    }
    batch.students.push(req.body);
    // Remove the student's ObjectId from the students array
    //batch.students.pull(studentId);//remove student from batch

    // Save the updated batch document
    await batch.save();

    return res.status(200).json({ msg: "Student added to batch successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { createBatch, getBatch, updateBatchSingleField };
