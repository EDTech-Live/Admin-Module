const connection = require('../../MODEL/dbconnect');

const getStudentProfile = async(req,res)=> {
    let query = "SELECT * FROM studentprofile";

    await connection.query(query,(err, result)=> {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
}

const postStudentProfile = (req, res) => {
    var fullUrl = req.protocol + "://" + req.get("host") + "/images/";
    let student_profile_data = {
      profile_id: req.body.profile_id,
      student_id: req.body.student_id,
      gender: req.body.gender,
      email: req.body.email,
      document: req.body.student_document,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      nationality: req.body.nationality,
      profile_photo: fullUrl + req.file.filename,
      doj: req.body.doj,
      dob: req.body.dob,
     
    };
    const data = [
      student_profile_data.profile_id,
      student_profile_data.student_id,
      student_profile_data.gender,
      student_profile_data.email,
      student_profile_data.document,
      student_profile_data.address,
      student_profile_data.city,
      student_profile_data.state,
      student_profile_data.nationality,
      student_profile_data.profile_photo,
      student_profile_data.doj,
      student_profile_data.dob,
      
    ];
    let query =
      "INSERT INTO studentprofile(profile_id, student_id, gender, email, document, address, city, state, nationality, profile_photo, doj, dob) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)";
    connection.query(query, data, (err, result) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  };


const patchStudentProfile = (req,res)=> {
    let {profile_id, student_id} = req.params;
    let { 
        gender,
        email,
        document,
        address,
        city,
        state,
        nationality,
        profile_photo,
        doj,
        dob } = req.body;
    let query = 'UPDATE studentprofile SET gender=$1, email=$2,document=$3, address=$4,city=$5,state=$6,nationality=$7,profile_photo=$8,doj=$9,dob=$10 WHERE profile_id=$11 AND student_id=$12';
    connection.query(query, [
        gender,
        email,
        document,
        address,
        city,
        state,
        nationality,
        profile_photo,
        doj,
        dob,
        profile_id,
        student_id
        ], 
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result);
            }
        })
}

const deleteStudentProfile = (req,res)=> {
    let {profile_id, student_id} = req.params;
    
    let query = 'DELETE FROM studentprofile WHERE profile_id=$1 AND student_id=$2'
    connection.query(query, [profile_id, student_id],
        (err,result) => {
            if (err) {
                console.log(err)
                } else {
                    res.send(result);
                    }

})
}
    



module.exports = { getStudentProfile,postStudentProfile, patchStudentProfile,deleteStudentProfile};