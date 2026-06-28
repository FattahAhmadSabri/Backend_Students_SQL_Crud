const {createController, getStudentsController,getStudentsByIdController,updateStudentsByIdController,deleteStudentsByIdController} = require("../controller/newStudentsController")

const express =require("express")

const router = express.Router()

router.post("/",createController)
router.get("/",getStudentsController)
router.get("/:id",getStudentsByIdController)
router.put("/:id",updateStudentsByIdController)
router.delete("/:id",deleteStudentsByIdController)

module.exports = router