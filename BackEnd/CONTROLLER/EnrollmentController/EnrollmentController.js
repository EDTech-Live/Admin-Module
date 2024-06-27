const connection = require('../../MODEL/dbconnect');

const getEnrollment = async(req,res)=> {
    let query = "SELECT * FROM enrollment";

    await connection.query(query,
        (err,result)=> {
            if(err) {
                console.log(err)
             } else {
                res.send(result)
             }
        })
};


const postEnrollment =(req,res)=> {
    let {enrollment_id, student_id, course_id, enrollment_date} = req.body;
    let query = "INSERT INTO enrollment (enrollment_id, student_id, course_id, enrollment_date) VALUES ($1,$2,$3,$4)";
    connection.query(query, [enrollment_id, student_id, course_id, enrollment_date],
        (err,result)=>{
            if(err) {
                console.log(err);

            } else {
                res.send(result)
            }
        })
}

const patchEnrollmet = (req,res)=> {
    let {enrollment_id, student_id, course_id} = req.params;
    let {enrollment_date} = req.body;
    let query = "UPDATE enrollment SET student_id=$1, course_id=$2, enrollment_date=$3 WHERE enrollment_id=$4";
    connection.query(query,[student_id,course_id,enrollment_date,enrollment_id],
        (err,result)=> {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )

}

const deleteEnrollment = (req,res)=> {
    let {enrollment_id} = req.params;
    let query = "DELETE FROM enrollment WHERE enrollment_id=$1";
    connection.query(query,[enrollment_id],
        (err,result)=> {
            if (err) {
                console.log(err)

            } else {
                res.send(result)
            }
        }
    )
    
}


module.exports = {getEnrollment,postEnrollment, patchEnrollmet, deleteEnrollment}