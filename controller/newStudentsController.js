const {
  createStudentsService,
  getStudentService,
  getStudentByIdService,
  updateStudentByIdService,
  deleteStudentByIdService,
} = require("../service/newStudentsService");
const {
  successResponse,
  errorResponse,
} = require("../middleware/responseHadling");
const createController = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const result = await createStudentsService(name, email, age);

    return successResponse(res, `${name} added successfully`, result, 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const getStudentsController = async (req, res) => {
  try {
    const result = await getStudentService();
    return successResponse(res, "List of students", result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const getStudentsByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getStudentByIdService(id);
    return successResponse(res, `students id : ${id}`, result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const updateStudentsByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const result = await updateStudentByIdService(id, name, email, age);
    if(result===0){
         return errorResponse(res, "Student not found", null, 404);
    }
    return successResponse(res, `Updated students id : ${id}`, result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const deleteStudentsByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteStudentByIdService(id);
    return successResponse(res, `Deleted students id : ${id}`, result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

module.exports = {
  createController,
  getStudentsController,
  getStudentsByIdController,
  updateStudentsByIdController,
  deleteStudentsByIdController,
};
