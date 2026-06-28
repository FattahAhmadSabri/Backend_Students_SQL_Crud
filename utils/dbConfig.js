const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@SQL321",
  database: "mytestdb",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connection has created");
const creationQuery = `
CREATE TABLE IF NOT EXISTS newStudents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20),
    age INT
)
`;
 connection.execute(creationQuery,(err)=>{
    if(err){
        console.log(err)
        connection.end()
        return
    }
    console.log("table created")
 })
});

module.exports= connection

