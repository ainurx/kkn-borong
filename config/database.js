const mysql = require('mysql')

const conn = mysql.createConnection({
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'kkn-borong'
})

conn.connect(err=>{
  if(err) throw err
  console.log('Connected to the database')
})

module.exports = conn