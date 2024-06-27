const connection = require('../../MODEL/dbconnect');

const getEmployeeProfile = (req,res)=> {
    let query = "SELECT * FROM employee_profile";
    connection.query(query,
        (err,result)=> {
            if(err){
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}

const getSingleEmployee = (req,res)=> {
    let employee_id = req.params.employee_id
    let query = "SELECT * FROM employee_profile WHERE employee_id = $1";

    connection.query(query, [employee_id],
        (err,result)=> {
            if(err){
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}

const postEmployeeProfile = async (req,res)=> {
    let {profile_id, employee_id, email, phone_number, gender, profile_photo, attach_document,address,city,state,salary,nationality,marital_status,dob} = req.body;
    let query = "INSERT INTO employee_profile (profile_id, employee_id, email, phone_number, gender, profile_photo, attach_document,address,city,state,salary,nationality,marital_status,dob) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)";
     await connection.query(query, [profile_id, employee_id, email, phone_number, gender, profile_photo, attach_document,address,city,state,salary,nationality,marital_status,dob],
        (err, result)=> {
            if(err){
                console.log(err)
            }
             else {
                res.send(result)
            }
        }
     )

}

const patchEmployeeProfile = async (req,res)=> {
    let {profile_id,employee_id} = req.params
    let {email, phone_number, gender, profile_photo, attach_document,address,city,state,salary,nationality,marital_status,dob} = req.body;
    let query =  "UPDATE employee_profile SET email=$1, phone_number=$2, gender=$3, profile_photo=$4, attach_document=$5, address=$6, city=$7, state=$8, salary=$9, nationality=$10, marital_status=$11,dob=$12 WHERE profile_id = $13 AND employee_id = $14" ;

    await connection.query(query, [email, phone_number, gender, profile_photo, attach_document,address,city,state,salary,nationality,marital_status,dob,profile_id,employee_id],
        (err,result)=> {
            if(err){
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )

}

const deleteEmployeeProfile = async (req,res)=> {
    let {profile_id,employee_id} = req.params
    let query = "DELETE FROM employee_profile WHERE profile_id = $1 AND employee_id = $2";
    await connection.query(query, [profile_id, employee_id],
        (err, result)=> {
            if(err){
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )

}

module.exports = {getEmployeeProfile, postEmployeeProfile, patchEmployeeProfile, deleteEmployeeProfile, getSingleEmployee}