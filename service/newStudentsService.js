const connection = require("../utils/dbConfig");
const Student = require("../models/studentsSchema");
const createStudentsService = async (name, email, age) => {
  const newStudent = await Student.create({
    name,
    email,
    age,
  });
  return newStudent;
};

const getStudentService = async () => {
  return await Student.findAll();
};
const getStudentByIdService = async (id) => {
  const result = await Student.findByPk(id);
  return result;
};

const updateStudentByIdService = async (id, name, email, age) => {
  const [updateRow] = await Student.update(
    {
      name,
      email,
      age,
    },
    {
      where: { id },
    },
  );
  return updateRow;
};

const deleteStudentByIdService = async (id) => {
  const deleteRow = await Student.destroy({ where: { id } });
  return deleteRow;
};

module.exports = {
  createStudentsService,
  getStudentService,
  getStudentByIdService,
  updateStudentByIdService,
  deleteStudentByIdService,
};
