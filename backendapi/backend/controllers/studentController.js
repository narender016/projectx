const Student = require("../models/studentModel");

const createStudent = async (req, res,next) => {
    try {
        const newStudent = await Student.create(req.body);

        res.status(200).json(newStudent);
    } catch (err) {
        next(err)
    }
}

const getStudent = async (req, res,next) => {
    try {
        const data = await Student.find();
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
}

module.exports={ createStudent, getStudent}

