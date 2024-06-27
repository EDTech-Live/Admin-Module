const connection = require('../../MODEL/dbconnect');

const getTeacher = async (req,res)=> {
    let query = "SELECT * FROM teacher ORDER BY teacher_id"

    await connection.query(query, 
        (err,result)=> {
            if(err) {
                console.log(err)
            } else {
                res.send(result)    
            }
        })
}

const postTeacher = async (req,res)=> {
    let {teacher_id, teacher_name, password, qualification, status, specialization }= req.body;
    let query = "INSERT INTO teacher (teacher_id,teacher_name, password, qualification, status, specialization) VALUES ($1, $2, $3, $4, $5, $6)"
    await connection.query(query, [teacher_id,teacher_name,password, qualification, status, specialization],
        (err, result)=> {
            if(err){
                console.log(err)
            } else {
                res.send(result)
            }
        }
    );

}

const updateTeacher = (req,res)=> {
    let teacher_id = req.params.teacher_id;
    let {teacher_name,password, qualification, status, specialization} = req.body;
    let query = "UPDATE teacher SET teacher_name = $1, password= $2, qualification=$3, status=$4, specialization=$5 WHERE teacher_id = $6";
    connection.query (query, [teacher_name, password, qualification, status, specialization, teacher_id],
        (err,result)=> {
            if (err){
                console.log(err, "error")
            } else {
                res.send(result)
            }
        }
    )
}


const deleteTeacher = (req,res)=> {
    let teacher_id = req.params.teacher_id;
    let query = "DELETE FROM teacher WHERE teacher_id = $1";
    connection.query(query, [teacher_id],
        (err, result)=> {
            if (err){
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}


module.exports = {getTeacher, postTeacher, updateTeacher, deleteTeacher}