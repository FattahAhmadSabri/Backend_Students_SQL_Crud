const express = require("express")
const connection = require("./utils/dbConfig")
const newStudentRouter = require("./routes/newStudentRouter")

const port = 4000
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("server working")
})

app.use("/student",newStudentRouter )

app.listen(port,()=>{
    console.log("server connected")
})


