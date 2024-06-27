const connection = require('../../MODEL/dbconnect');

const getRole = async (req,res)=> {
    let query = "SELECT * FROM role ORDER BY role_id";

    await connection.query(query,
        (err,result)=> {
            if(err){
                console.log(err);
            }
            else{
                res.send(result);
            }
        } 
    )
}
  
const postRole = async (req,res) =>{
    let{role_id, role_name} = req.body;
    let query = 'INSERT INTO role (role_id, role_name) VALUES($1,$2)';
    await connection.query(query, [role_id, role_name], (err, result)=> {
        if(err){
            // res.send(err)
            console.log(err)
        }

        else {
            res.send(result)
            console.log(result)
        }
    })
}

const patchRole = (req,res)=> {
    let role_id = req.params.role_id;
    let { role_name } = req.body;
    let query = 'UPDATE role SET role_name = $1 WHERE role_id = $2';
    connection.query(query, [role_name, role_id], (err, result)=> {
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
}


const deleteRole = (req,res)=> {
    let data = req.params.role_id;
    let query = "DELETE FROM role WHERE role_id =$1"
    connection.query(query, [data], function(error, result)
    {
        if(error){
            console.log("Error", error)
        }
        else{
            res.send(result)
        }
    })
}

module.exports = {getRole, postRole, patchRole, deleteRole}






