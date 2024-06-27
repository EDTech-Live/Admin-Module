const connection = require('../../MODEL/dbconnect');

const getStudent = async(req,res)=>{
    let query = "SELECT * FROM student ORDER BY student_id";

    await  connection.query(query,
        (err, result)=> {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
}

const postStudent = async (req,res)=> {
    let {student_id, student_name,password,status,education} = req.body;
    let query = "INSERT INTO student (student_id, student_name,password,status,education) VALUES ($1,$2,$3,$4,$5)";
    await connection.query(query,[student_id, student_name,password,status,education],
        (err, result)=> {
            if (err) {
                console.log(err);
                } else {
                    res.send(result);

            }
        })
    }

const updateStudent = (req,res)=> {
    let student_id = req.params.student_id
    let { student_name,password,status,education} = req.body;
    let query = "UPDATE student SET student_name = $1, password=$2, status=$3,education=$4 WHERE student_id = $5";
    connection.query(query, [student_name,password,status,education,student_id],
        (err, result)=> {
            if (err) {
                console.log(err);
                } else {
                    res.send(result);
                    }
              })
       }


const deleteStudent = (req,res)=> {
    let student_id = req.params.student_id;
    let query = "DELETE FROM student WHERE student_id = $1";
    connection.query(query, [student_id],
        (err, result)=>{
            if (err) {
                console.log(err);

            } else {
                res.send(result);
            }
        })
}

module.exports = {getStudent, postStudent, updateStudent,deleteStudent}