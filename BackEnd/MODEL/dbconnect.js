const pg = require('pg');
const connection = new pg.Client({

    user: 'postgres',
    host: 'localhost',
    password: 'shanu19',
    database: 'edutech',
    port: 5432

})

connection.connect((err)=>{
    if(err){
        console.log('err');
    }

    else{

        console.log('connected to postgres')
    }
})

module.exports = connection;