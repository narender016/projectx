const Teacher = require("../models/teacherModel");

const createTeacher = async (req, res) => {
    // try {
    //     const data = await Teacher.create(req.body);
    //     res.status(200).json(data);
    // } catch (err) {
    //     res.status(500).json({ msg: err.message })
    // }

    try {
        // Check if a teacher with the same email already exists
        const existingTeacher = await Teacher.findOne({ "email": req.body.email, "mobile":req.body.mobile });

        if (existingTeacher) {
            // If a teacher with the same email exists, return an error response
            return res.status(400).json({ msg: 'Teacher with this email already exists' });
        }

        // If no teacher with the same email exists, create a new teacher
        const newTeacher = await Teacher.create(req.body);

        res.status(200).json(newTeacher);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}


const getTeacher = async (req, res) => {
    try {
        const data = await Teacher.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const updateTeacherSingleField = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Teacher.findByIdAndUpdate(
            {"_id":id},req.body,{new:true, runValidators:true}
        );
        if (!data) {
            return res.status(404).json(`Teacher Not found with id:${id}`);
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = { createTeacher, getTeacher,updateTeacherSingleField }