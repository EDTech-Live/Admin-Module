const connection = require('../../MODEL/dbconnect');



const getTeacherProfile = async(req,res)=> {
    let query = "SELECT * FROM teacherprofile"

    await connection.query(query,
        (err,result)=> {
            if (err){
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}


const postTeacherProfile = async (req,res)=>{
    let {
        profile_id,
        teacher_id,
        gender,
        email,
        document,
        address,
        city,
        state,
        marital_status,
        nationality,
        salary,
        profile_photo,
        doj,
        dob

     }  = req.body;
    let query = 'INSERT INTO teacherprofile (profile_id,teacher_id,gender,email,document,address,city,state,marital_status,nationality,salary,profile_photo,doj,dob) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)';

    await connection.query(query, [profile_id,teacher_id,gender,email,document,address,city,state,
        marital_status,nationality,salary,profile_photo,doj,dob],

        (err,result)=> {
            if(err) {
                console.log(err)

            } else {
                res.send(result)
            }
        }
    )
 
}



const patchTeacherProfile = (req,res)=> {
    let{profile_id,teacher_id} = req.params;
    let{gender,
        email,
        document,
        address,
        city,
        state,
        marital_status,
        nationality,
        salary,
        profile_photo,
        doj,
        dob} = req.body;

       
    let query = "UPDATE teacherprofile SET gender = $1, email = $2, document = $3, address = $4, city = $5, state = $6, marital_status = $7, nationality = $8, salary = $9, profile_photo = $10, doj = $11, dob = $12 WHERE profile_id = $13 AND teacher_id = $14";
    connection.query(query, [
        gender,
        email,
        document,
        address,
        city,
        state,
        marital_status,
        nationality,
        salary,
        profile_photo,
        doj,
        dob,
        profile_id,
        teacher_id,
      ],
        (err, result)=> {
            if(err){
                console.log(err,"error")
            } else {
                res.send(result)
                console.log(result, "result")
            }
        }
    )
}


const deleteTeacherProfile = (req,res)=> {
    let {profile_id, teacher_id}=req.params;

    let query = "DELETE FROM teacherprofile WHERE profile_id=$1 AND teacher_id=$2";

    connection.query(query, [profile_id,teacher_id],
        (err,result)=>{
            if(err){
                console.log(err, "err")
            } else {
                res.send(result)
                console.log(result, "result")
            }
        })
};   


module.exports = {getTeacherProfile,postTeacherProfile,patchTeacherProfile,deleteTeacherProfile}