const connection = require('../../MODEL/dbconnect');

const getBatch = async (req,res)=> {
    let query = "SELECT * FROM batch ORDER BY batch_id"

    await connection.query(query,
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
})
}

const postBatch = async (req,res)=> {
    let {batch_id, teacher_id, course_id, batch_name, start_date, end_date, mode} = req.body;
    let query = "INSERT INTO batch (batch_id, teacher_id, course_id, batch_name, start_date, end_date, mode) VALUES ($1, $2, $3, $4, $5, $6, $7)"
    await connection.query(query, [batch_id, teacher_id, course_id, batch_name, start_date, end_date, mode],
        (err, result)=> {
            if(err){
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}

const updateBatch = (req,res)=> {
    let {batch_id, teacher_id, course_id
    } = req.params;
    const {batch_name, start_date, end_date, mode} = req.body;
    let query = "UPDATE batch SET batch_name = $1, start_date = $2,end_date = $3, mode = $4 WHERE batch_id = $5 AND teacher_id= $6 AND course_id = $7" 
    connection.query (query, [])   
}