const connection = require('../../MODEL/dbconnect');
// const { connect } = require('../../ROUTE/RoleRoute/RoleRoute');

const getOneRoleAssign = async(req,res)=>{
    const employee_id = req.params.employee_id; 
    let query = " SELECT roleassign.role_id, role.role_name FROM roleassign NATURAL JOIN role WHERE employee_id = $1";

    await connection.query(query, [employee_id],
        (err, result)=> {
            if(err){
                console.log(err.message);

            } else {
                res.send(result);
            }
        }
    )
}
// const getOneRoleAssign = async (req, res) => {
//     const employeeId = req.params.employeeId; // Assuming the employee ID is passed as a route parameter
//     let query = "SELECT roleassign.role_id, role.role_name FROM roleassign NATURAL JOIN role WHERE employee_id = $1";

//     try {
//         const result = await connection.query(query, [employeeId]); // Passing the parameter to the query method
//         res.send(result.rows); // Sending the rows from the result
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send('Internal Server Error'); // Sending an error response in case of failure
//     }
// }


const getAssign = async (req, res) => {
    
    let query = "SELECT * FROM roleassign";

    await connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Error fetching data" });
        } else {
            res.send(result); 
        }
    });
};






const postAssign = async (req,res)=>{
    let {role_id, employee_id} = req.body;
    let query =  'INSERT INTO roleassign (role_id, employee_id) VALUES ($1, $2)'; 
    await connection.query(query, [role_id, employee_id], (err, result)=> {
        if(err){
            console.log(err);
            } else {
                res.send(result);
                }
    })
}


const updateAssign = (req,res)=>{
    let {role_id, employee_id} = req.body;
    const { old_role_id, old_employee_id } = req.params;
  const query = 'UPDATE roleassign SET role_id = $1, employee_id = $2 WHERE role_id = $3 AND employee_id = $4';
  connection.query(query, [role_id, employee_id, old_role_id, old_employee_id],
    (err, result) => {
        if (err) {
            console.log(err);
            } else {
                res.send(result);       
                }
            })
    };

const deleteAssign = (req,res)=> {
    const { role_id, employee_id } = req.params;
    const query = 'DELETE FROM roleassign WHERE role_id = $1 AND employee_id = $2';
    connection.query(query, [role_id, employee_id],
        (err, result) => {
            if (err) {
                console.log(err);
                console.log(role_id, employee_id)
                } else {
                    console.log(role_id, employee_id)
                    res.send(result);
                    }
                    })

}







module.exports = {getAssign, postAssign, updateAssign, deleteAssign, getOneRoleAssign}