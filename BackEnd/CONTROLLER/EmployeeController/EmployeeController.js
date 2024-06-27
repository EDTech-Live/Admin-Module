const connection = require('../../MODEL/dbconnect');

const getEmployee = async (req,res)=> {
    let query = "SELECT * FROM employee ORDER BY employee_id";

    await connection.query(query,
        (err, result) => {
            if (err) {
                res.send(err)
            }
            else{
                res.send(result)
            }
        })
}

const postEmployee = async (req,res) => {
    let { employee_id, employee_name, password, qualification, status, doj } = req.body;
    let query = 'INSERT INTO employee(employee_id, employee_name, password, qualification, status, doj) VALUES($1, $2, $3, $4, $5, $6)';

    await connection.query(query, [employee_id, employee_name, password, qualification, status, doj], 
        (err,result)=>{
        if(err){
            res.send(err)
        }

        else {
            res.send(result)
        }
    })
}

const patchEmployee = (req, res) => {
    let employee_id = req.params.employee_id;
    let { employee_name, password, qualification, status, doj } = req.body;
    let query = "UPDATE employee SET employee_name=$1, password=$2, qualification= $3, status=$4, doj=$5 WHERE employee_id=$6";
    connection.query(query, [employee_name, password, qualification, status, doj, employee_id],
         (err, result) => {
      if (err) {
        console.log(err.sqlMessage);
      } else {
        res.send(result);
      }
    });
  };

  const deleteEmployee = (req,res) => {
    let employee_id = req.params.employee_id;
    let query = "DELETE FROM employee WHERE employee_id = $1";
    connection.query(query, [employee_id], function(error, result)
    {
        if(error){
            console.log("Error", error)
        }
        else{
            res.send(result)
        }
    })
  };



module.exports = {getEmployee, postEmployee, patchEmployee, deleteEmployee}

    