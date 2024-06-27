const connection = require('../../MODEL/dbconnect')

const getCourse = async(req,res)=> {
    let query = "SELECT * FROM course";

    await connection.query(query, (err,result)=> {
        if(err) throw err;
        res.send(result);
        })
}

const PostCourse = async(req,res)=> {
    let {course_id, course_name,  course_description, fees, syllabus}=req.body;
    let query = "INSERT INTO course (course_id, course_name,course_description,fees ,syllabus) VALUES ($1,$2,$3,$4,$5)";
    await connection.query(query, [course_id, course_name,course_description, fees ,syllabus],
        (err,result)=> {
            if(err) throw err;
            res.send(result);     
            })
            }

            const patchCourse = (req, res) => {
                const { course_id } = req.params; 
                const { course_name, course_description,fees,syllabus } = req.body;
            
                const query = "UPDATE course SET course_name=$1, course_description=$2, fees=$3,syllabus=$4 WHERE course_id=$5";
               
            
                connection.query(query, [course_name, course_description,fees,syllabus, course_id], (err, result) => {
                    if (err) {
                        console.error("Error updating course:", err);
                        res.status(500).send("Error updating course. Please try again later.");
                    } else {
                        console.log("Course updated successfully:", result);
                        res.status(200).send(result);
                    }
                });
            };
            
        


const deleteCourse = (req,res)=> {
    let {course_id}= req.params;
    let query = "DELETE FROM course WHERE course_id=$1";
    connection.query(query, [course_id], (err,result)=> {
            if(err) throw err;
            res.send(result);
        }
    )
}

        

    





module.exports = {getCourse, PostCourse,patchCourse,deleteCourse}
