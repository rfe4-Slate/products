const {Client} = require('pg');

const pgClient = new Client({
  user: 'student',
  password: 'student',
  host: 'localhost',
  port: 5432,
  database: 'products'
})

pgClient.connect()
  .then(()=>{
    console.log('connection to db succesfully')
  })
  .catch((error)=>{
    console.log(error)
  })



  module.exports = pgClient;




  // .then(()=>
  //   pgClient.query(`select * from mysdcschema.styles where id='1'`)
  // )
  // .then(result=>{
  //   console.table(result.rows)
  // })