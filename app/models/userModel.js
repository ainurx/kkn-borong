const conn = require('../../config/database')
const table = 'user'

const User = function(user){
  this.username = user.username
  this.password = user.password
  this.nama = user.nama
  this.posisi = user.posisi
  this.foto = user.foto
  this.instagram = user.instagram
  this.role = this.role
}

User.findAll = result =>{
  conn.query(`SELECT * FROM ${table}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

User.findById = (id, result) =>{
  conn.query(`SELECT * FROM ${table} WHERE id= ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

User.create = (newUser, result) =>{
  conn.query(`INSERT INTO ${table} SET ?`, newUser, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

User.update = (id, newData, result)=>{
  conn.query(`UPDATE ${table} SET username= ?, password= ?, nama= ?, 
    posisi= ?, foto= ?, instagram= ?, role= ? WHERE id= ?`, 
    [newData.username, newData.password, newData.nama, newData.posisi, 
      newData.foto, newData.instagram, newData.role, id], (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}


User.delete = (id, result) =>{
  conn.query(`DELETE FROM ${table} WHERE id= ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}
module.exports = User