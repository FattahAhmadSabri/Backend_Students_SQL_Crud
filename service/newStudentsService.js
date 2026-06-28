 const connection = require("../utils/dbConfig")
const createStudentsService = (name, email, age, callback) => {
    const query = `
        INSERT INTO newStudents (name, email, age)
        VALUES (?, ?, ?)
    `;

    connection.execute(query, [name, email, age], (err, result) => {
        if (err) {
            return callback(err);
        }

        callback(null, result);
    });
};

const getStudentService = async () => {
    const [result] = await connection.promise().execute(
        "SELECT * FROM newStudents"
    );

    return result;
};

const getStudentByIdService = async(id)=>{
    const [result] = await connection.promise().execute(
        `SELECT * FROM newStudents WHERE id = ?`,
         [id]
    )
    return result
}

const updateStudentByIdService = async (id, name, email, age) => {
    await connection.promise().execute(
        `UPDATE newStudents
         SET name = ?, email = ?, age = ?
         WHERE id = ?`,
        [name, email,age, id]
    );

    const [rows] = await connection.promise().execute(
        `SELECT * FROM newStudents WHERE id = ?`,
        [id]
    );

    return rows;
};

const deleteStudentByIdService = async (id) => {
    const [result] = await connection.promise().execute(
        `DELETE FROM newStudents WHERE id = ?`,
        [id]
    );

    return result;
};

module.exports = {createStudentsService,getStudentService,getStudentByIdService,updateStudentByIdService,deleteStudentByIdService}